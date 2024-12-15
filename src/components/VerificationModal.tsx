import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Platform } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    backgroundColor: "white",
    height: 200,
    width: "80%",
    zIndex: 10,
    top: "50%",
    justifyContent: "center",
    gap: 20,
    borderRadius: 20,
    position: "absolute",
    transform: [{ translateY: "-50%" }],
  },
  title: { textAlign: "center", fontSize: 20 },
  codeFieldRoot: { width: "90%" },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});

type Props = {
  cell_count: number;
  handleClose: () => void;
};

const VerificationModal = ({ cell_count, handleClose }: Props) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: cell_count });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    if (value.length === cell_count) {
      handleClose();
    }
  }, [value]);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={cell_count}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default VerificationModal;

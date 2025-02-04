import { useState, useEffect } from "react";

interface UseSettings {
  getCurrentEmail: () => string;
}

const useSettings = (): UseSettings => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const fetchEmail = async () => {
      const storedEmail = await getStoredEmail();
      setEmail(storedEmail);
    };

    fetchEmail();
  }, []);

  const getStoredEmail = async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("user@example.com"); // Example email
      }, 1000);
    });
  };

  return {
    getCurrentEmail: () => email,
  };
};

export { useSettings };

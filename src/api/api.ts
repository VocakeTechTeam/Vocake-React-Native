import axios from "axios";
import Config from "react-native-config";
console.log("Config.REACT_APP_VOCAKE_API: ", Config.REACT_APP_VOCAKE_API);
export const apiClient = axios.create({
  baseURL: Config.REACT_APP_VOCAKE_API,
});

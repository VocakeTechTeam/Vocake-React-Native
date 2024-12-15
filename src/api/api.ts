import axios from "axios";
import { REACT_APP_VOCAKE_API } from "@env";
export const apiClient = axios.create({
  baseURL: REACT_APP_VOCAKE_API,
});

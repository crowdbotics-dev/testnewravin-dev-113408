import axios from "axios"
import {
  NEW_CONNECTOR_TESTMITHI_USERNAME,
  NEW_CONNECTOR_TESTMITHI_PASSWORD
} from "react-native-dotenv"
const newConnectortestmithi = axios.create({
  baseURL: "https://testing.com",
  auth: {
    username: NEW_CONNECTOR_TESTMITHI_USERNAME,
    password: NEW_CONNECTOR_TESTMITHI_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}

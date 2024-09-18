// src/index.js
import { AppRegistry } from "react-native";
import App from "./App";
import appJson from "../app.json"; // Ajuste o caminho conforme necessário

AppRegistry.registerComponent(appJson.name, () => App);

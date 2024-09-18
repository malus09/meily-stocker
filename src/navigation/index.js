// src/navigation/index.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator"; // Importa o StackNavigator
// Importar TabNavigator ou qualquer outro navegador, se necessário
// import TabNavigator from './TabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* Ou TabNavigator, dependendo da estrutura de navegação desejada */}
    </NavigationContainer>
  );
};

export default AppNavigator;

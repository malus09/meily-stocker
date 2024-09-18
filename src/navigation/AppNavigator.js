// src/navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import StockScreen from "../screens/StockScreen";
import ReportScreen from "../screens/ReportScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator para as principais funcionalidades
function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stock" component={StockScreen} />
      <Tab.Screen name="Reports" component={ReportScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator para empilhar telas
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* A navegação principal do app, que será a Tab Navigation */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{ headerShown: false }} // Esconder o header padrão para as abas
      />
      {/* Exemplo de uma tela de configurações que não está nas abas */}
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

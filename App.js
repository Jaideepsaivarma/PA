import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Tasks from "./screens/Tasks";
import CreateTasks from "./screens/CreateTasks";

const AppSwitchNavigator = createSwitchNavigator({
  Tasks: Tasks,
  CreateTasks: CreateTasks,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}

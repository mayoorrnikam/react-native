import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import PracticeComponent from "./src/screens/PracticeComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    PractComponent: PracticeComponent,
    ListScreen: ListScreen,
    Image: ImageScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Next Gen App",
    },
  }
);

export default createAppContainer(navigator);

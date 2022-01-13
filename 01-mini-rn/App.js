import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListComponent from "./src/screens/ListComponent";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		ListComponent,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//screens
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListComponent from "./src/screens/ListComponent";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		ListComponent,
		ImageScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);

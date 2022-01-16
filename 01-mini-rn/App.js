import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//screens
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListComponent from "./src/screens/ListComponent";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextDemo from "./src/screens/TextDemo";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		ListComponent,
		ImageScreen,
		CounterScreen,
		ColorScreen,
		SquareScreen,
		TextDemo,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);

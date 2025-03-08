import LandingScreen from './AQRO/screens/LandingScreen';
import SignInScreen from './AQRO/screens/SignInScreen';
import SignUpScreen from './AQRO/screens/SignUpScreen';
import HomeScreen from './AQRO/screens/HomeScreen';
import ContainerScreen from './AQRO/screens/ContainerScreen';
import MarketPlaceScreen from './AQRO/screens/MarketPlaceScreen';
import MenuScreen from './AQRO/screens/MenuScreen';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={BottomTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabs() {

  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                  const icons = {
                      Home: 'home-outline',
                      Container: 'cube-outline',
                      MarketPlace: 'cart-outline',
                      Menu: 'menu-outline'
                  };
                  return <Ionicons name={icons[route.name]} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#27800c',
              tabBarInactiveTintColor: '#eee',
              tabBarStyle: { backgroundColor: '#000', paddingBottom: 5 },
              tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
              headerStyle: { backgroundColor: "#000" },
              headerTitle: () => (
                <View style={styles.headerContainer}>                
                  <Image source={require("/Users/russelguerrero/AQRO2/AQRO/assets/4.png")} style={styles.heroImage} />
                  <TouchableOpacity>
                    <Ionicons name='scan-outline' style={styles.scan} size={32}/>
                  </TouchableOpacity>
                </View>
              ),
          })
        }
      >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Container" component={ContainerScreen} />
          <Tab.Screen name="MarketPlace" component={MarketPlaceScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    width: 180,
    height: 50,
    left:-20,
    resizeMode:'cover',
  },

  scan: {
    color: '#eee',
    top: 5, 
    left: 140
  },

  headerContainer: {
    flexDirection:'row',
    alignItems:'center',
  }

})
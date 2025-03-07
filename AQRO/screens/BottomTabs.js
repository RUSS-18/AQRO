// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from '../screens/HomeScreen';
// import ContainerScreen from '../screens/ContainerScreen';
// import MarketPlaceScreen from '../screens/MarketPlaceScreen';
// import MenuScreen from '../screens/MenuScreen';

// const Tab = createBottomTabNavigator();

// export default function BottomTabs() {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ color, size }) => {
//                     const icons = {
//                         Home: 'home-outline',
//                         Container: 'cube-outline',
//                         MarketPlace: 'cart-outline',
//                         Menu: 'menu-outline'
//                     };
//                     return <Ionicons name={icons[route.name]} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#27800c',
//                 tabBarInactiveTintColor: '#ccc',
//                 tabBarStyle: { backgroundColor: '#000', paddingBottom: 5 },
//                 tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
//                 headerShown: false,
//             })}
//         >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Container" component={ContainerScreen} />
//             <Tab.Screen name="MarketPlace" component={MarketPlaceScreen} />
//             <Tab.Screen name="Menu" component={MenuScreen} />
//         </Tab.Navigator>
//     );
// }

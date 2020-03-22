import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Login,
  Registration,
  Home,
  Splash,
  Chat,
  Jobs,
  Notifications,
  Settings
} from '../screen';
import { Ionicons } from 'react-native-vector-icons/Ionicons';

export const AuthContext = React.createContext();

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen
      name="Registration"
      component={Registration}
      options={{ title: 'Registration' }}
    />
  </AuthStack.Navigator>
);

// const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
// const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    {/* <HomeStack.Screen
            name="Details"
            component={Details}
            options={({ route }) => ({
                title: route.params.name
            })}
        /> */}
  </HomeStack.Navigator>
);

// const Drawer = createDrawerNavigator();
// const DrawerScreen = () => (
//     <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeStackScreen} />
//         <Drawer.Screen name="Intro" component={Intro} />
//     </Drawer.Navigator>
// );

const Tab = createBottomTabNavigator();

const TabBar = () => (
  // <NavigationContainer>
  <Tab.Navigator
  //   screenOptions={({ route }) => ({
  //     tabBarIcon: ({ focused, color, size }) => {
  //       let iconName;

  //       if (route.name === 'Home') {
  //         iconName = focused
  //           ? 'ios-information-circle'
  //           : 'ios-information-circle-outline';
  //       } else if (route.name === 'Settings') {
  //         iconName = focused ? 'ios-list-box' : 'ios-list';
  //       }

  //       // You can return any component that you like here!
  //       return <Ionicons name={iconName} size={size} color={color} />;
  //     }
  //   })
  // }
  //   tabBarOptions={{
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray'
  //   }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Jobs" component={Jobs} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  // </NavigationContainer>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabBar}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

export function Navigation() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {}
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        await AsyncStorage.setItem('userToken', 'text');
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: async () => {
        await AsyncStorage.clear();
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async data => {
        await AsyncStorage.setItem('userToken', 'text');
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      }
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={state.userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

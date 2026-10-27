import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const brandGreen = '#0B3D2E';

const lines = ['M1 Yenikapı – Airport', 'M2 Yenikapı – Hacıosman', 'M4 Kadıköy – Tavşantepe'];

function LinesScreen() {
  return (
    <FlatList
      data={lines}
      keyExtractor={(line) => line}
      renderItem={({ item }) => <Text style={{ padding: 16 }}>{item}</Text>}
    />
  );
}

function AlertsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No service alerts</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: brandGreen,
        tabBarStyle: { backgroundColor: '#FFFFFF', height: 83 },
      }}
    >
      <Tab.Screen name="Lines" component={LinesScreen} />
      <Tab.Screen name="Alerts" component={AlertsScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: brandGreen },
            headerTintColor: '#FFFFFF',
          }}
        >
          <Stack.Screen name="Greenline" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

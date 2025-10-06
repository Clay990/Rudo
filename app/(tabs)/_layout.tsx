import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native'
// in App.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

library.add(fab, faSquareCheck, faHouse, faHouse)


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center mt-5">
              <FontAwesomeIcon 
                icon={faHouse} 
                size={22} 
                color={focused ? 'rgba(255, 237, 132, 1)' : '#6b7280'}
              />
              <Text 
                className={`text-xs ${focused ? 'text-yellow-300' : 'text-gray-500'}`}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center mt-5">
              <FontAwesomeIcon 
                icon={faUser} 
                size={22} 
                color={focused ? 'rgba(255, 237, 132, 1)' : '#6b7280'}
              />
              <Text 
                className={`text-xs ${focused ? 'text-yellow-300' : 'text-gray-500'}`}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center mt-5">
              <FontAwesomeIcon 
                icon={faUser} 
                size={22} 
                color={focused ? 'rgba(255, 237, 132, 1)' : '#6b7280'}
              />
              <Text 
                className={`text-xs ${focused ? 'text-yellow-300' : 'text-gray-500'}`}
              >
                Test
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}


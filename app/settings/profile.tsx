import React from 'react'
import { Text, View } from 'react-native'
 import { Stack } from 'expo-router';

function profile() {
  return (
    <View className='bg-white flex-1 flex-col'>
    <Stack.Screen options={{ title: 'Profile Settings' }} />

    <View className='m-5 p-5 border border-gray-400 rounded-3xl'>
        <Text className='text-xl'>Name: Clay Jensen</Text>
    </View>

    </View>
  )
}

export default profile
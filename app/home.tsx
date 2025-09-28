import React from 'react'
import { View, Image, Button, Alert, TouchableOpacity, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">

        <View className="mt-8 ml-5 h-[50] flex-row items-center justify-between pr-5">
          <Text className="text-black font-bold text-3xl">Good Morning, Clay</Text>
          <Image className="w-10 h-10" source={require('@/assets/images/fawn.gif')} />
        </View>
        <View className='mt-5 h-[1] bg-black'></View>
        <Text className='text-3xl ml-5 mt-5'>Notes</Text>
        <View className='m-5'>
          <View className='rounded-2xl w-full h-80 rounded-lg p-4 border border-gray-400'>
            <View className='rounded-xl w-[120] rounded-lg justify-center items-center border border-gray-400'>
            <Text className='text-sm'>Edit: Jan 24, 2025</Text>
          </View>
          <Text className='text-3xl font-medium mt-5'>Home Work</Text>
          <Text className='font-light mt-5'>Every utility class in Tailwind can be applied conditionally by adding a variant to the beginning of the class name that describes the condition you want to target.</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default home
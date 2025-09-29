import React from 'react'
import { View, Image, Button, Alert, TouchableOpacity, Text, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareCheck, faPencil } from '@fortawesome/free-solid-svg-icons'; 
import { useRouter } from "expo-router";

library.add(faSquareCheck, faPencil);

function home() {
  const router = useRouter();
  const handleProfile = () => {
    router.push('/profile');
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">

        <View className="mt-8 ml-5 h-[50] flex-row items-center justify-between pr-5">
          <Text className="text-black font-bold text-3xl">Good Morning, Clay</Text>
          <Image className="w-10 h-10" source={require('@/assets/images/fawn.gif')} />
        </View>
        <View className='mt-5 h-[1] bg-black'></View>
        <ScrollView>
          <Text className='text-3xl ml-5 m-2'>Notes</Text>

          {/* Note Card */}
          <View className='m-5'>
            <View className='rounded-2xl w-full h-80 rounded-lg p-4 border border-gray-400'>
              <View className='flex-row justify-between'>
                <View>

                  <View className='rounded-xl w-[120] rounded-lg justify-center items-center border border-gray-400'>
                    <Text className='text-sm'>Edit: Jan 24, 2025</Text>
                  </View>
                  <Text className='text-3xl font-medium mt-5'>Tailwind CSS</Text>
                </View>
                <Image className='w-20 h-20 rounded-xl' source={{ uri: 'https://code.dlang.org/packages/tailwind-d/logo?s=650228a573eaa51f8ceded68' }} />
              </View>
              <Text className='font-light mt-5'>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites and web applications. Unlike traditional frameworks like Bootstrap that provide pre-designed components, Tailwind gives developers low-level utility classes that can be combined directly within HTML to create completely custom designs.</Text>
              <View className='absolute bottom-4 right-4 '>
                <TouchableOpacity onPress={handleProfile}>
                  <FontAwesomeIcon icon="pencil" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Note Card */}
          <View className='m-5'>
            <View className='rounded-2xl w-full h-80 rounded-lg p-4 border border-gray-400'>
              <View className='flex-row justify-between'>
                <View>

                  <View className='rounded-xl w-[120] rounded-lg justify-center items-center border border-gray-400'>
                    <Text className='text-sm'>Edit: Jan 24, 2025</Text>
                  </View>
                  <Text className='text-3xl font-medium mt-5'>Tailwind CSS</Text>
                </View>
                <Image className='w-20 h-20 rounded-xl' source={{ uri: 'https://code.dlang.org/packages/tailwind-d/logo?s=650228a573eaa51f8ceded68' }} />
              </View>
              <Text className='font-light mt-5'>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites and web applications. Unlike traditional frameworks like Bootstrap that provide pre-designed components, Tailwind gives developers low-level utility classes that can be combined directly within HTML to create completely custom designs.</Text>
            </View>
          </View>
          {/* Note Card */}
          <View className='m-5'>
            <View className='rounded-2xl w-full h-80 rounded-lg p-4 border border-gray-400'>
              <View className='flex-row justify-between'>
                <View>

                  <View className='rounded-xl w-[120] rounded-lg justify-center items-center border border-gray-400'>
                    <Text className='text-sm'>Edit: Jan 24, 2025</Text>
                  </View>
                  <Text className='text-3xl font-medium mt-5'>Tailwind CSS</Text>
                </View>
                <Image className='w-20 h-20 rounded-xl' source={{ uri: 'https://code.dlang.org/packages/tailwind-d/logo?s=650228a573eaa51f8ceded68' }} />
              </View>
              <Text className='font-light mt-5'>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites and web applications. Unlike traditional frameworks like Bootstrap that provide pre-designed components, Tailwind gives developers low-level utility classes that can be combined directly within HTML to create completely custom designs.</Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default home
import React from 'react'
import { View, Image, Text } from "react-native";

function Card() {
    return (
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
    )
}

export default Card
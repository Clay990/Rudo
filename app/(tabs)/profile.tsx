import React from 'react'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Button, Alert, TouchableOpacity, Text, ScrollView,  } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';


import { 
    faUser, 
    faPalette, 
    faBell, 
    faCloudArrowUp, 
    faUsers, 
    faCrown, 
    faShieldHalved, 
    faFileShield, 
    faQuestionCircle, 
    faThumbsUp,
    faSquareCheck, 
    faPencil 
} from '@fortawesome/free-solid-svg-icons'; 
import { router } from 'expo-router';

// icons for settings set in future when components seperate to the file
library.add(
    faUser, 
    faPalette, 
    faBell, 
    faCloudArrowUp, 
    faUsers, 
    faCrown, 
    faShieldHalved, 
    faFileShield, 
    faQuestionCircle, 
    faThumbsUp,
    faSquareCheck,
    faPencil
);

function profile() {
    return (
        // <SafeAreaProvider>
        //     <SafeAreaView className="flex-1">
                <View className="bg-white flex-1 flex-col">

                    <View className="flex-[1] flex-col bg-yellow-200 justify-center items-center rounded-b-[50px]">
                        <View className='mt-10 flex-col justify-center items-center'>

                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGmbVlXYi1BEuOw7ySL36qCQ7BvT5jqzxvg&s' }}
                            className='w-36 h-36 rounded-full'
                            />
                        <Text className='mt-3 font-medium text-3xl'>Clay Jensen</Text>
                            </View>
                    </View>


                    <View className='bg-white flex-[2] flex-col align-center m-5 border border-gray-400 rounded-3xl p-5 overflow-hidden'>
                        <View className=''>
                            <View>
                                <Text>Settings</Text>
                                <View className='mt-5 h-[1] bg-black '></View>
                            </View>
                            <View className=''>
                                <ScrollView showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false} >
                                        <TouchableOpacity onPress={() => router.push('/settings/profile')}>
                                    <Text className='mt-10 font-medium text-xl'>Profile</Text>
                                        </TouchableOpacity>
                                        
                                    <Text className='mt-10 font-medium text-xl'>Appearance</Text>
                                    <Text className='mt-10 font-medium text-xl'>Notifications</Text>
                                    <Text className='mt-10 font-medium text-xl'>Backup & Restore</Text>
                                    <Text className='mt-10 font-medium text-xl'>Collaboration</Text>
                                    <Text className='mt-10 font-medium text-xl'>Subscription</Text>
                                    <Text className='mt-10 font-medium text-xl'>Security</Text>
                                    <Text className='mt-10 font-medium text-xl'>Privacy Policy</Text>
                                    <Text className='mt-10 font-medium text-xl'>Help & Support</Text>
                                    <Text className='mt-10 font-medium text-xl'>Rate App</Text>
                                    
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
        //     </SafeAreaView>
        // </SafeAreaProvider>
    )
}

export default profile
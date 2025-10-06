import React from 'react'
import { View, Image, Button, Alert, TouchableOpacity, ScrollView, Modal, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import Card from '@/components/cards';


library.add(faSquareCheck, faPencil);

function home() {
  const router = useRouter();
  const noteDescritextption = '';
  const handleProfile = () => {
    setModalVisible(true);
  }
  const [text, setText] = useState('Tailwind CSS is a utility-first CSS framework for rapidly building modern websites and web applications. Unlike traditional frameworks like Bootstrap that provide pre-designed components, Tailwind gives developers low-level utility classes that can be combined directly within HTML to create completely custom designs.');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">

        <View className="mt-4 ml-5 h-[50] flex-row items-center justify-between pr-5">
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
              <Text className='font-light mt-5'>{text}</Text>
              <View className='absolute bottom-4 right-4 '>
                <TouchableOpacity onPress={handleProfile}>
                  <FontAwesomeIcon icon="pencil" size={20} />
                </TouchableOpacity>
              </View>
              <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View className='flex-1 justify-center items-center' >
                  <View className='m-5 bg-white rounded-2xl p-3 items-center justify-center'>
                    {/* <Text className=''>Hello World! The backdropColor of the modal (or background color of the modal's container.) Defaults to white if not provided and transparent is false. Ignored if transparent is true. </Text> */}
                    <TextInput
                      className='items-center mb-5 max-h-full border border-gray-400 rounded-lg p-3'
                      onChangeText={setText}
                      value={text}
                      multiline={true}
                      keyboardType="default"
                    />
                    <Pressable
                      className='bg-yellow-300 rounded-xl p-3 w-40 items-center'
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text className='items-center font-bold'>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          {/* Note Card */}
          <Card />
          {/* Note Card */}
         <Card />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default home
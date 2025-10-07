import React, { useCallback } from "react";
import { View, Image, Button, Alert, TouchableOpacity, ScrollView, Modal, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useRouter, useFocusEffect } from "expo-router";
import { useState, useEffect } from "react";
import { initDB, saveNote, getNotes, deleteNote, updateNote, Note } from "../../lib/db";

library.add(faSquareCheck, faPencil);

function home() {
  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [])
  );

  const router = useRouter();
  const handleEdits = () => {
    setModalVisible(true);
  }

  const handleNote = (id: any, item: any, content: any) => {
    router.push({ pathname: '/note', params: { idd: id, titlee: item, contentt: content } });
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {

    (async () => {
      await initDB();
      await loadNotes();
    })();
  }, []);

  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleAdd = () => {
    router.push('/note');
  }

  const handleSave = async () => {
    if (editId) {
      await updateNote(editId, title, content);
      setEditId(null);
    } else {
      await saveNote(title, content);
    }
    setTitle("");
    setContent("");
    await loadNotes();
    setModalVisible(!modalVisible);
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
    setModalVisible(!modalVisible);
  };

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    await loadNotes();
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">

        <View className="mt-4 ml-5 h-[50] flex-row items-center justify-between pr-5">
          <Text className="text-black font-bold text-3xl">Good Morning, Clay</Text>
          <Image className="w-10 h-10" source={require('@/assets/images/fawn.gif')} />
        </View>
        <View className='mt-5 h-[1] bg-black'></View>
        <ScrollView>
          <View className='flex-row justify-between items-center m-2'>
            <Text className='text-3xl '>Notes</Text>
            {/* <Text className='text-xl '>Add</Text> */}
            <Pressable
              className='bg-sky-200 rounded-xl p-1 w-20 items-center'
              onPress={() => handleAdd()}>
              <Text className='items-center font-bold'>Add</Text>
            </Pressable>
          </View>



          {/* Render Notes from DB */}
          {notes.map((item: any) => (
            <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => handleNote(item.id, item.title, item.content)}>
              <View key={item.id} className="m-5">
                <View className="overflow-hidden rounded-2xl w-full h-80 p-4 border border-gray-400">
                  <View className="flex-row justify-between">
                    <View>
                      <View className="rounded-xl w-[120] justify-center items-center border border-gray-400">
                        <Text className="text-sm">Edit: Jan 24, 2025</Text>
                      </View>
                      
                      <Text className="text-3xl font-medium mt-5">{item.title}</Text>
                    </View>
                    <Image
                      className="w-20 h-20 rounded-xl"
                      source={{
                        uri: "https://code.dlang.org/packages/tailwind-d/logo?s=650228a573eaa51f8ceded68",
                      }}
                    />

                  </View>
                  <View className="shrink">
                  <Text numberOfLines={9} ellipsizeMode="tail" className="font-light mt-5">{item.content}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}


        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default home
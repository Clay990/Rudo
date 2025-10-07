
import { View, Image, Button, Alert, TouchableOpacity, ScrollView, Modal, StyleSheet, Text, Pressable, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { router, useLocalSearchParams } from 'expo-router';
import { initDB, saveNote, getNotes, deleteNote, updateNote, Note } from "../lib/db";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";




function note() {
  const { idd, titlee, contentt } = useLocalSearchParams();
  const handles = (text: string) => { };

  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState<string | null>(idd as string | null);

  useEffect(() => {
    handleEdit({ id: idd as string, title: titlee as string, content: contentt as string });
    (async () => {
      await initDB();
      await loadNotes();
    })();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      // ✅ This runs every time the screen comes into focus
      loadNotes(); // your function to fetch notes from SQLite or AsyncStorage

      return () => {
        // optional cleanup
      };
    }, [])
  );


  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleSave = async () => {

    if (editId) {
      await updateNote(editId, title, content);
      setEditId(idd as string);
    } else {
      await saveNote(title, content);
    }
    setTitle(title);
    setContent(content);
    router.push('/(tabs)/home')
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);

  };

  const handleDelete = async () => {
    await deleteNote(editId as string);
    await loadNotes();
    router.push('/(tabs)/home')

  };

  return (
    <KeyboardAvoidingView
      className='flex-1 p-5 bg-white'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* This View will grow to take up all available space */}
      <View className='flex-1'>
        <TextInput
          className='font-bold text-3xl mb-4' // Added margin-bottom for spacing
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
          maxLength={30} // Increased max length slightly
        />
        <TextInput
          className='flex-1 text-xl text-top' // flex-1 makes it expand, text-top aligns text to the top
          onChangeText={setContent}
          value={content}
          multiline={true}
          keyboardType="default"
          placeholder="Write your note here..."
          textAlignVertical="top" // Important for Android multiline placeholder
        />
      </View>

      {/* This View will be pushed to the bottom */}
      <View className='flex-row justify-between items-center mt-4'>
        <Pressable
          className='bg-red-300 rounded-xl h-12 w-28 justify-center items-center'
          onPress={() => handleDelete()}>
          <Text className='font-bold text-base'>Delete</Text>
        </Pressable>

        <Pressable
          className='bg-yellow-300 rounded-xl h-12 w-28 justify-center items-center'
          onPress={() => handleSave()}>
          <Text className='font-bold text-base'>Save</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>

  )
}

export default note
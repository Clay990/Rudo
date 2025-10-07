import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { initDB, saveNote, getNotes, deleteNote, updateNote, Note } from "../../lib/db";

export default function test() {
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
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    await loadNotes();
  };

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title={editId ? "Update Note" : "Save Note"} onPress={handleSave} />

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, borderBottomWidth: 1, paddingBottom: 5 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.content}</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <TouchableOpacity onPress={() => handleEdit(item)} style={{ marginRight: 10 }}>
                <Text style={{ color: "blue" }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={{ color: "red" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, TextInput, Alert } from 'react-native';

export default function App() {
  const [writeMode, setWriteMode] = useState(false)
  const [txt, setTxt] = useState('')

  const orimemo = [
    {
      id: '1',
      memo: 'memo1',
    },
    {
      id: '2',
      memo: 'memo2',
    },
    {
      id: '3',
      memo: 'memo3',
    },
    {
      id: '4',
      memo: 'memo4',
    },
    {
      id: '5',
      memo: 'memo5',
    },
  ]

  const [memos, setMemos] = useState(orimemo)
  const [idx, setIdx] = useState(6)

  const addMemo = () => {
    //Alert.alert(txt)
    let newMemo = { id: idx, memo: txt }
    setMemos(prev => [...prev, newMemo])
    setWriteMode(false)
    setIdx(prev => prev + 1)
  }

  const renderMemo = ({ item }) => {
    return (
      <View style={{ padding: 10, borderBottomColor: '#ddd', borderBottomWidth: 1, flexDirection: 'row' }}>
        <Text style={{ marginRight: 10 }}>{item.id}</Text>
        <Text>{item.memo}</Text>
      </View>
    )
  }

  if (writeMode) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#9c0' }}>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <TouchableOpacity sylte={{ padding: 15 }} onPress={() => setWriteMode(false)}>
              <Text style={{ fontSize: 18, }}>취소</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ padding: 15 }} onPress={() => addMemo()}>
              <Text style={{ fontSize: 18, }}>저장</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <TextInput style={{ backgroundColor: '#eee', flex: 1, padding: 10 }} onChangeText={(text) => setTxt(text)} multiline></TextInput>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'tomato' }}>
      <View style={{}}>
        <Text style={{ fontSize: 18, padding: 15, textAlign: 'center' }}>메모장</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{
          position: 'absolute', right: 20, bottom: 20, zIndex: 10, width: 50, height: 50,
          backgroundColor: 'tomato', borderRadius: 25, alignItems: 'center', justifyContent: 'center'
        }}>
          <TouchableOpacity onPress={() => setWriteMode(true)}>
            <Text style={{ color: '#ffff' }}>글쓰기</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList data={memos} renderItem={renderMemo} style={{ flex: 1 }} />
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [txt, settxt] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem('assa', value)
      console.log('saved')
    } catch (e) {
      console.error(e)
    }
  }
  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('assa')
      if (value !== null) {
        settxt(value)
      }
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <View style={style.container}>
      <SafeAreaView style={style.safeAreaView}>
        <StatusBar style={style.statusBarArea} />
        <View style={style.titleArea}>
          <Button title="저장" onPress={() => saveData(txt)}></Button>
          <Text style={style.title}>메모장</Text>
          <Button title="불러오기" onPress={() => loadData()}></Button>
        </View>
        <View style={style.contentArea}>
          <TextInput value={txt} onChangeText={txt => settxt(txt)} multiline />
        </View>
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fc0' },
  safeAreaView: { flex: 1 },
  statusBarArea: { flex: 1 },
  titleArea: { marginTop: 20, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { textAlign: 'center', fontSize: 18 },
  contentArea: { backgroundColor: '#eeeeee', flex: 1, padding: 10 },
})


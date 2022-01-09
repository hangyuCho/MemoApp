import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <SafeAreaView style={style.safeAreaView}>
        <StatusBar style={style.statusBarArea} />
        <View style={style.titleArea}>
          <Button title="저장"></Button>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>메모장</Text>
          <Button title="불러오기"></Button>
        </View>
        <View style={{ backgroundColor: '#eeeeee', flex: 1, padding: 10 }}>
          <Text>메모 리스트</Text>
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
})


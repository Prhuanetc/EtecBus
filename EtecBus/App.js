import React, {useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, ActivityIndicator, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as location from "expo-location";

// configurações Fixas - Locais
const SCHOOL = {
  id: 'school',
  name: 'Etec Comendado João Rays',
  coordinate: {},
  address: 'Rua Ludovico Victório, 2140, Barra Bonita - SP'

};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

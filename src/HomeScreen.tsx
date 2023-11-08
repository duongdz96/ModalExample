import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useModalManager from './hooks/useModalManager'

const HomeScreen = () => {
    const {openModal} = useModalManager();
    const handleOpenModal = () => {
        openModal('CalculationModal');
    }
  return (
    <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity onPress={handleOpenModal}>
            <Text>Press me</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default HomeScreen
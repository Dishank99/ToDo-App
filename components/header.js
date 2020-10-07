import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.header_title}>My ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'coral',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    header_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
})
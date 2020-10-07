import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, onPressHandler }) {
    return (
        <TouchableOpacity onPress={() => onPressHandler(item.id)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="black" />
                <Text style={{ marginLeft: 10 }}>{item.todo}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    }
})
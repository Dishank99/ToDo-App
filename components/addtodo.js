import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function AddTodo({ onSubmitHandler }) {
    const [text, setText] = useState('')

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    placeholder='New Todo...'
                    onChangeText={(text) => setText(text)}
                    style={styles.input}
                    value={text}
                />
                <MaterialIcons style={{
                    marginTop: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                }} name="clear" size={24} color="#ddd" onPress={() => setText('')} />
            </View>
            <Button //we cant style buttons
                onPress={() => onSubmitHandler(text)}
                title='Add Todo'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flex: 1,
    },
})
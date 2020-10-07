import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function List() {
    const DATA = [
        { todo: 'todo1', status: false, id: '1' },
        { todo: 'todo2', status: false, id: '2' },
        { todo: 'todo3', status: false, id: '3' },
    ]

    const [data, setData] = useState(DATA)
    const [currentTodo, setCurrentTodo] = useState({})

    const onDelete = (id) => {
        setData((currentState) => currentState.filter(item => item.id != id))
    }

    const UpdateTodo = (currentTodo) => {
        setData((currentState) =>
            currentState.push(currentTodo)
        )
    }

    const AddTodo = (value) => {
        if (value !== '') {
            setCurrentTodo({
                todo: value,
                status: false,
                id: Date.now().toString(),
            })
        }
    }

    const listitem = (item) => (
        <View style={styles.content_list_item}>
            <Text style={styles.content_list_item_text}>{item.todo}</Text>
            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity style={styles.content_list_item_button}>
                    <Text style={styles.content_list_item_text}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.content_list_item_button}>
                    <Text style={styles.content_list_item_text}>Delete</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

    return (
        <View style={styles.content}>
            {/* todo input */}
            <View style={styles.content_input}>
                <TextInput
                    style={styles.content_input_textbox}
                    placeholder='Enter Todo..'
                    onChangeText={(text) => AddTodo(text)}
                    value={currentTodo.todo}
                />
                <TouchableOpacity
                    style={[styles.content_list_item_button, { flex: 0.3, alignSelf: 'center', }]}
                    onPress={UpdateTodo}
                >
                    <Text style={[styles.content_list_item_text, { textAlign: 'center', }]}>Add</Text>
                </TouchableOpacity>
            </View>
            {/* todo list */}
            <View style={styles.content_list}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => listitem(item)}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        // borderColor: 'red',
        // borderWidth: 2,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    content_list: {
        // borderColor: 'green',
        // borderWidth: 2,
        width: '85%',
        // flex: 0.8,
        marginTop: 10,
    },
    content_list_item: {
        // borderWidth: 1,
        // borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 1,
        // height: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    content_list_item_text: {
        fontSize: 15,
        fontWeight: '500',
        margin: 10,
    },
    content_list_item_button: {
        // borderColor: 'green',
        // borderWidth: 2,
        marginHorizontal: 2,
    },
    content_input: {
        // borderColor: 'blue',
        // borderWidth: 2,
        width: '85%',
        flex: 0.1,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    content_input_textbox: {
        // borderColor: 'red',
        // borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 0,
        fontSize: 20,
        // height: '70%',
        flex: 0.7,
    },
})
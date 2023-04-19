import * as React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Button, Checkbox, IconButton, List, TextInput } from 'react-native-paper';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const initialTodoList: TodoItem[] = [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Take out the trash', completed: true },
    { id: 3, text: 'Do laundry', completed: false },
    { id: 4, text: 'Walk the dog', completed: true },
    { id: 5, text: 'Read a book', completed: false },
    { id: 6, text: 'Go for a run', completed: false },
    { id: 7, text: 'Clean the bathroom', completed: false },
    { id: 8, text: 'Prepare dinner', completed: false },
];

export default function TodoScreen() {
    const [todoList, setTodoList] = React.useState<TodoItem[]>(initialTodoList);
    const [textInputValue, setTextInputValue] = React.useState('');

    const handleAddTodo = () => {
        if (textInputValue.trim() === '') {
            return;
        }

        const newTodo: TodoItem = {
            id: Math.max(...todoList.map(todo => todo.id), 0) + 1,
            text: textInputValue.trim(),
            completed: false,
        };

        setTodoList([...todoList, newTodo]);
        setTextInputValue('');
    };

    const handleToggleTodoCompleted = (todo: TodoItem) => {
        const newTodoList = todoList.map(t =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
        );

        setTodoList(newTodoList);
    };

    const handleRemoveTodo = (todo: TodoItem) => {
        const newTodoList = todoList.filter(t => t.id !== todo.id);

        setTodoList(newTodoList);
    };


    return (
        <View style={styles.container}>
            <TextInput
                label="New todo"
                value={textInputValue}
                onChangeText={setTextInputValue}
                onSubmitEditing={handleAddTodo}
                style={styles.textInput}
            />
            <Button onPress={handleAddTodo} mode="contained" style={styles.addButton}>
                Add
            </Button>
            <ScrollView style={styles.todoListSection}>
                <List.Section>
                    <List.Subheader>TODOs:</List.Subheader>
                    {todoList.map(todo => (
                        <List.Item
                            titleStyle={todo.completed ? styles.completedItem : null}
                            key={todo.id}
                            title={todo.text}
                            onPress={() => handleToggleTodoCompleted(todo)}
                            left={() => (
                                <Checkbox
                                    status={todo.completed ? 'checked' : 'unchecked'}
                                    onPress={() => handleToggleTodoCompleted(todo)}
                                />
                            )}
                            right={() => (
                                <TouchableOpacity style={styles.deleteBtnTO} onPress={() => handleRemoveTodo(todo)}>
                                    <List.Icon
                                        icon="delete"
                                    />
                                </TouchableOpacity>

                            )}
                        />
                    ))}
                </List.Section>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    textInput: {
        marginBottom: 16,
    },
    addButton: {
        marginBottom: 16,
    },
    todoListSection: {
        flex: 1,
        marginRight: -30
    },
    deleteBtnTO: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    completedItem: {
        textDecorationLine: 'line-through',
        fontStyle: 'italic',
        color: '#777',
    },
});

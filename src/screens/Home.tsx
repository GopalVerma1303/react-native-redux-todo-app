import * as React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Button, Checkbox, List, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index.reducer';
import { addTodo, removeTodo, toggleTodoCompleted } from '../redux/actions/todo.actions';

export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoScreen() {
    const [textInputValue, setTextInputValue] = React.useState('');

    const todoList = useSelector((state: RootState) => state.todo);

    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (textInputValue.trim() === '') {
            return;
        }

        dispatch(addTodo({
            id: Math.max(...todoList.map((todo: TodoItem) => todo.id), 0) + 1,
            text: textInputValue.trim(),
            completed: false,
        }));

        setTextInputValue('');
    };

    const handleToggleTodoCompleted = (todo: TodoItem) => {
        dispatch(toggleTodoCompleted(todo));
    };

    const handleRemoveTodo = (todo: TodoItem) => {
        dispatch(removeTodo(todo));
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
                    {todoList.map((todo: TodoItem) => (
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

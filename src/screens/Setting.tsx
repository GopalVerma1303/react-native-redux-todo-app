import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
    List, Switch,
} from 'react-native-paper';
const SettingScreen = ({ navigation }: any) => {

    return (
        <View style={{ flex: 1, paddingLeft: 25 }}>
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch />}
            />
        </View>
    )
}

export default SettingScreen;
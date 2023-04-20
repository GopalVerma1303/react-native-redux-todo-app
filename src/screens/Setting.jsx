import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
    List, Switch,
} from 'react-native-paper';

import { RootState } from '../redux/reducers/index.reducer';
import * as themeActions from "../redux/actions/theme.action";
import { useDispatch, useSelector } from "react-redux";

const SettingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector((state) => state.todo);
    return (
        <View style={{ flex: 1, paddingLeft: 25 }}>
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch value={themeReducer} onValueChange={(val) => dispatch(themeActions.ToggleTheme(val))} />}
            />
        </View>
    )
}

export default SettingScreen;
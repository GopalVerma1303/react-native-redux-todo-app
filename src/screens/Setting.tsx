import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
    List, Switch,
} from 'react-native-paper';

import * as themeActions from "../redux/actions/theme.action";
import { useDispatch, useSelector } from "react-redux";

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector(({ themeReducer }: any) => themeReducer);
    return (
        <View style={{ flex: 1, paddingLeft: 25 }}>
            <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch value={themeReducer.theme} onValueChange={(val) => dispatch(themeActions.ToggleTheme(val))} />}
            />
        </View>
    )
}

export default SettingScreen;
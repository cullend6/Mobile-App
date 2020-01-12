import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const FormSwitch = ({ label, valueKey, value, onChange, prevState }) => {
    return (
        <View style={{ 
            height: 50,
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            marginHorizontal: 20,
            }}
        >
            <Text style={{ 
                flexGrow: 1,
                fontSize: 15, 
                marginTop: 13.5,
                }}
            >
                {label}
            </Text>
            <Switch
                value={value}
                onValueChange={val => onChange(val, valueKey)}          
            />
        </View>
    )
}

export default FormSwitch;
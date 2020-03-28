import React from 'react';
import { View, Text, TextInput } from 'react-native';

type Props = {
    label: string,
    valueKey: string,
    value: any,
    onChange: any,
}

const FormAmount = (props: Props) => {
    const { label, value, valueKey, onChange } = props;
    
    return (
        <View
        style={{
            height: 50,
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            marginHorizontal: 20,
            }}
        >
            <Text
                style={{
                    flexGrow: 1,
                    fontSize: 15, 
                    marginTop: 13.5,
                }}
            >{label}</Text>
            <TextInput 
                keyboardType='number-pad'
                value={value}
                onChangeText={text => onChange(text, valueKey)}
                style={{
                    borderWidth: 0.5,
                    borderColor: '#d6d7da',
                    width: 40,
                    textAlign: 'center',
                }}
            />
        </View> 
    )
}

export default FormAmount
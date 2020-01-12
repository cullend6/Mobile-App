import React, { useState } from 'react';
import { View, Button, ToastAndroid } from 'react-native';

import FormSwitch from '../../components/FormSwitch';
import FormAmount from '../../components/FormAmount';

import { styles } from './FormStyles';
import { TextInput } from 'react-native-gesture-handler';

export const DetailInfo = {
    TAKEN_TABLETS: {
        key: 'takenTablets',
        label: 'Taken tablets',
    },
    WATER_DRANK: {
        key: 'waterDrank',
        label: 'Bottles of water drank',
        type: 'Amount',
    },
    FOOD_EATEN: {
        key: 'foodEatenEvery4Hours',
        label: 'Food eaten every four hours',
    },
    EXERCISED: {
        key: 'exercised',
        label: 'Exercised today',
    },
    ALCOHOL_DRANK: {
        key: 'alcoholDrank',
        label: 'Alcoholic drinks had',
        type: 'Amount',
    },
    ON_PERIOD: {
        key: 'onPeriod',
        label: 'On period',
    },
    GOOD_SLEEP: {
        key: 'goodSleep',
        label: 'Had a good sleep',
    },
    SEEING_STUFF: {
        key: 'timesSeeingStuff',
        label: 'Times seeing stuff',
        type: 'Amount',
    },
};

const DefaultState = {
    takenTablets: false,
    waterDrank: '0',
    foodEatenEvery4Hours: false,
    exercised: false,
    alcoholDrank: '0',
    onPeriod: false,
    goodSleep: false,
    timesSeeingStuff: '0',
    notes: '',
};

const FormInput = ({ value, label, valueKey, type, updateDetails }) => {

    if (type === 'Amount') {
        return <FormAmount
            label={label}
            value={value}
            valueKey={valueKey}
            onChange={updateDetails}
        />
    }

    return <FormSwitch
        label={label}
        value={value}
        valueKey={valueKey}
        onChange={updateDetails}
    />
}

const Form = () => {
    const [details, setDetails] = useState(DefaultState);

    const updateDetails = (value, key) => {
        setDetails({
            ...details,
            [key]: value,
        })
    };

    const handleSubmit = () => {        
        // just need to check the amounts are numbers
        const infoKeys = Object.keys(DetailInfo);
        const amountFields = infoKeys.filter(key => DetailInfo[key].type === 'Amount');
        const amountIsntNumberKey = amountFields.find(key => {
            return isNaN((parseFloat(details[DetailInfo[key].key])))
        });

        if (amountIsntNumberKey) {
            ToastAndroid.show(`${DetailInfo[amountIsntNumberKey].label} isn't a number.`, ToastAndroid.SHORT);
            return;
        }

        setDetails(DefaultState);
    };

    const buildForm = () => {
        const keys = Object.keys(DetailInfo);
        const fields = keys.map(infoKey => {
            const { label, key, type } = DetailInfo[infoKey];
            return <FormInput
                label={label}
                valueKey={key}
                value={details[key]}
                updateDetails={updateDetails}
                type={type}
            />
        })
        return fields;
    }

    return (
        <View style={styles.container}>
            {buildForm().map(field => field)}
            <TextInput
                value={details.notes}
                placeholder='Any notes pal...'
                onChangeText={text => updateDetails(text, DetailKeys.NOTES)}
                style={{
                    alignSelf: 'stretch',
                    height: 120,
                    marginHorizontal: 20,
                    textAlignVertical: 'top',
                    borderWidth: 0.5,
                    borderColor: '#d6d7da',
                }}
            />
            <Button title='Submit' onPress={() => handleSubmit()} />
        </View>
    )
}

export default Form;
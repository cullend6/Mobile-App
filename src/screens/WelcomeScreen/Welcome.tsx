import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './WelcomeStyles';

const Welcome = ({ navigation }) => {
    const body = () => {
        const time = new Date().getHours();
        if (time < 12) {
            return <Text>Good morning Una.</Text>
        } else if (12 < time && time < 18 ) {
            return <Text>Good afternoon Una.</Text>
        } else if (time === 16 || 4 && new Date().getMinutes() === 20) {
            return <Text>Blaze it Una.</Text>
        } else {
            return <Text>Good evening Una.</Text>
        }
    }

    return (
        <View style={styles.container} >
            {body()}
            <Button title='Go' onPress={() => navigation.navigate('Form')}/>
        </View>
    )
}

Welcome.navigationOptions = {
    headerShown: false,
};

export default Welcome;
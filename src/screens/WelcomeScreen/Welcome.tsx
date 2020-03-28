import React, { useMemo } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './WelcomeStyles';

type Props = {
    navigation: any,
}

const Welcome = (props: Props) => {
    const { navigation } = props;
    
    const greeting = useMemo(() => {
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
    }, []);

    return (
        <View style={styles.container} >
            {greeting}
            <Button title='Go' onPress={() => navigation.navigate('Form')}/>
            <Button title='Calendar' onPress={() => navigation.navigate('Calendar')}/>
        </View>
    )
}

Welcome.navigationOptions = {
    headerShown: false,
};

export default Welcome;
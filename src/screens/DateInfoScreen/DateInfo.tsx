import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { get } from '../../utils/storageUtils';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';

/**
 * To show individual dates recorded values
 */

type Props = {
    navigation: any,
};

const DateInfo = (props: Props) => {
    const { navigation } = props;
    const { data, isLoading } = useQuery(navigation?.state?.params, get);

    const body = useMemo(() => {
        if (!data) return <Text>No data!</Text>

        const dataKeys = Object.keys(data);
        return dataKeys.map((key: string) => {
            return (
                <View>
                    <Text>{`${key}: ${data[key]}`}</Text>
                </View>
            )
        })
    }, [data]);

    if (isLoading) return <Loading />

    return <View>{body}</View>
}

export default DateInfo;
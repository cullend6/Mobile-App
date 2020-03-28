import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { Text, View, Button } from 'react-native';

import { getAllKeys } from '../../utils/storageUtils';
import moment from 'moment';
import Loading from '../../components/Loading';

/**
 * Grab all keys
 * These will be the dates that we have data for
 * start date from 20/03/2020
 * display list with gaps and have each date be clickable to show info
 * for now just blank page
 */

type Props = {
    navigation: any,
}

const createDateList = (data: string[], from = '03/20/2020') => {
    const mCurrent = moment(new Date(from));
    const mEnd = moment(new Date());
    const dates: any[] = [];

    while (mCurrent.isBefore(mEnd)) {
        dates.push({ date: mCurrent.format('DD/MM/YYYY'), hasData: data.includes(mCurrent.format('DD/MM/YYYY')) });
        mCurrent.add(1, 'day');
    }
}

const Calendar = (props: Props) => {
    const { navigation } = props;
    const { data, isLoading } = useQuery('keys', getAllKeys);

    const createDateList = (data: string[], from = '03/20/2020') => {
        const mCurrent = moment(new Date(from));
        const mEnd = moment(new Date());
        const dates: any[] = [];

        while (mCurrent.isBefore(mEnd)) {
            dates.push({ key: mCurrent.format('DD/MM/YYYY'), hasData: data.includes(mCurrent.format('DD/MM/YYYY')) });
            mCurrent.add(1, 'day');
        }

        return dates;
    }

    const body = useMemo(() => {
        if (!data) return <Text>No data!</Text>
        const dates = createDateList(data);
        return dates.map((date: any) => {
            console.log(date)
            return <Button
                title={date.key}
                disabled={!date.hasData}
                onPress={() => navigation.navigate('DateInfo', date.key)}
            />
        });
    }, [data]);

    if (isLoading) return <Loading />

    return (
        <View>
            {body}
        </View>
    )
}

export default Calendar;
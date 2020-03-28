import moment from 'moment';

export const dateKey = (value?: string) => {
    const date = moment(value).format('DD/MM/YYYY');
    return date;
}
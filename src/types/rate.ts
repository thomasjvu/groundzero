export interface Rate {
    name: string;
    value: string;
}

export const rateList: Rate[] = [
    { name: 'Annual', value: 'annual'},
    { name: 'Hourly', value: 'hourly'},
    { name: 'Weekly', value: 'weekly'},
] 

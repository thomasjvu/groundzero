export interface Setting {
    name: string;
    value: string;
}

export const settingList: Setting[] = [
    { name: 'Remote', value: 'remote' },
    { name: 'Hybrid', value: 'hybrid' },
    { name: 'On-Site', value: 'on-site' }
];

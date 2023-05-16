export interface Contract {
    name: string;
    value: string;
};

export const contractList: Contract[] = [
    { name: 'Full Time', value: 'full-time' },
    { name: 'Part Time', value: 'part-time' },
    { name: 'Contract', value: 'contract' },
    { name: 'Temporary', value: 'temporary' },
    { name: 'Freelance', value: 'freelance' },
    { name: 'Internship', value: 'internship' },
    { name: 'Externship', value: 'externship' }
];

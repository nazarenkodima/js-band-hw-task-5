// Mocks


const pound = 2.2046226218;

const DEFAULT_TRUCK = {
    id: 'smrta-asdad-deead',
    model: 'MAN TGX D38',
    licensePlate: 'AA1232OO',
    producedYear: '2018',
    capacity: '12000',
    averageSpeed: '110',
    typeOfGas: 'Diesel',
};

const DEFAULT_SHIP = {
    id: 'xxxxx-qqqqq-aaaaa',
    model: 'Combo',
    name: 'JS Band Ship',
    producedYear: '2019',
    capacity: '200000',
    averageSpeed: '20',
    countOfTeam: '83',
};


global.__ = {
    pound,
    DEFAULT_TRUCK,
    DEFAULT_SHIP
};



import Truck from '../Truck';

const truck = new Truck(
    __.DEFAULT_TRUCK._id,
    __.DEFAULT_TRUCK._model,
    __.DEFAULT_TRUCK._licensePlate,
    __.DEFAULT_TRUCK._producedYear,
    __.DEFAULT_TRUCK._capacity,
    __.DEFAULT_TRUCK._averageSpeed,
    __.DEFAULT_TRUCK._typeOfGas,

);


describe('Truck:', () => {
    test('should return class with new Truck', () => {
        expect(truck).toEqual({
            _id: __.DEFAULT_TRUCK.id,
            _model: __.DEFAULT_TRUCK.model,
            _licensePlate: __.DEFAULT_TRUCK.licensePlate,
            _producedYear: __.DEFAULT_TRUCK.producedYear,
            _capacity: __.DEFAULT_TRUCK.capacity,
            _averageSpeed: __.DEFAULT_TRUCK.averageSpeed,
            _typeOfGas: __.DEFAULT_TRUCK.typeOfGas
        });
    });

    test('truck should have averageSpeed method', () => {
        const averageSpeed =  truck.showAverageSpeed()
        expect(averageSpeed).toEqual(`${__.DEFAULT_TRUCK.averageSpeed} km`);
    });

    test('truck should have showCapacityInPounds method', () => {
        const capacityInPoundsMethod = truck.showCapacityInPounds();
        const capacityInPounds = __.DEFAULT_TRUCK.capacity * __.pound;
        expect(capacityInPoundsMethod).toEqual(`${capacityInPounds.toFixed()}lbs`);
    });
});



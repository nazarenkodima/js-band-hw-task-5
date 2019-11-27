import Ship from '../Ship';

const ship = new Ship(
    __.DEFAULT_SHIP._id,
    __.DEFAULT_SHIP._model,
    __.DEFAULT_SHIP._name,
    __.DEFAULT_SHIP._producedYear,
    __.DEFAULT_SHIP._capacity,
    __.DEFAULT_SHIP._averageSpeed,
    __.DEFAULT_SHIP._countOfTeam

);



describe('Ship:', () => {
    test('should return class with new Ship', () => {
        expect(ship).toEqual({
            _id: __.DEFAULT_SHIP.id,
            _model: __.DEFAULT_SHIP.model,
            _name: __.DEFAULT_SHIP.name,
            _producedYear: __.DEFAULT_SHIP.producedYear,
            _capacity: __.DEFAULT_SHIP.capacity,
            _averageSpeed: __.DEFAULT_SHIP.averageSpeed,
            _countOfTeam: __.DEFAULT_SHIP.countOfTeam
        });
    });

    test('ship should have averageSpeed method', () => {
        const averageSpeedMethod = ship.showAverageSpeed();
        expect(averageSpeedMethod).toEqual(`${__.DEFAULT_SHIP.averageSpeed} nm`);
    });

    test('ship should have showCapacityInPounds method', () => {
        const capacityInPoundsMethod = ship.showCapacityInPounds();
        const capacityInPounds = __.DEFAULT_SHIP.capacity * __.pound;
        expect(capacityInPoundsMethod).toEqual(`${capacityInPounds.toFixed()}lbs`);
    });

});



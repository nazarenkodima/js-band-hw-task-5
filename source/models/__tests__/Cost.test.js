import Cost from '../Cost';

const cost = new Cost(
  __.DEFAULT_COST.model,
  __.DEFAULT_COST.costByKilogram,
  __.DEFAULT_COST.costByDistance,
);

describe('Cost:', () => {
  test('should return class with new Cost', () => {
    expect(cost).toEqual({
      _model: __.DEFAULT_COST.model,
      _costByKilogram: __.DEFAULT_COST.costByKilogram,
      _costByDistance: __.DEFAULT_COST.costByDistance,
    });
  });
});

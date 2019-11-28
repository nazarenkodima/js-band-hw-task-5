import Truck from '../Truck';
import Ship from '../Ship';
import TransportFactory from '../TransportFactory/TransportFactory';

jest.mock('../Truck', () => {
  return jest.fn().mockImplementation();
});

jest.mock('../Ship');

beforeEach(() => {
  Truck.mockClear();
  Ship.mockClear();
});

describe('Transport Factory:', () => {
  test('check if transport constructor was called', () => {
    const truck = TransportFactory.createTransport('truck');
    expect(Truck).toHaveBeenCalledTimes(1);
  });

  test('check if transport constructor was called', () => {
    const ship = TransportFactory.createTransport('ship');
    expect(Ship).toHaveBeenCalledTimes(1);
  });

  test('check if transport constructor was called', () => {
    const defaultTransport = TransportFactory.createTransport();
    expect(Truck).toHaveBeenCalledTimes(1);
  });
});

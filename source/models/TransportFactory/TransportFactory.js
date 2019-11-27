import Truck from '../Truck';
import Ship from '../Ship';

export default class TransportFactory {
  static createTransport(type, ...args) {
    switch (type) {
      case 'truck':
        return new Truck(...args);
      case 'ship':
        return new Ship(...args);

      default:
        return new Truck(...args);
    }
  }
}

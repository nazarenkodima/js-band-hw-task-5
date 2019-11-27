import TransportFactory from './TransportFactory/TransportFactory';
import LocalStorageService from '../services/LocalStorageService';

const localStorageService = LocalStorageService.getInstance();
const TRANSPORT_TOKEN = 'Transport';

export default class TransportList {
  constructor() {
    this.transportList = document.querySelector('.transport-list');

    const addTruckButton = document.getElementById('add-truck');
    const addShipButton = document.getElementById('add-ship');

    addTruckButton.addEventListener('click', this.addTruck.bind(this));
    addShipButton.addEventListener('click', this.addShip.bind(this));

    this.render();
  }

  addShip() {
    const id = document.querySelector('.ship-id').value;
    const model = document.querySelector('.ship-model').value;
    const name = document.querySelector('.ship-name').value;
    const producedYear = document.querySelector('.ship-producedYear').value;
    const capacity = document.querySelector('.ship-capacity').value;
    const averageSpeed = document.querySelector('.ship-averageSpeed').value;
    const countOfTeam = document.querySelector('.ship-countOfTeam').value;
    const shipInputs = document.querySelectorAll('.ship-input');

    let ship;

    ship = TransportFactory.createTransport(
        'ship',
        id,
        model,
        name,
        producedYear,
        capacity,
        averageSpeed,
        countOfTeam,
    )

    shipInputs.forEach(input => {
      if(!input.value.trim()) ship = TransportFactory.createTransport('ship')
    });

    console.log(`Average speed: ${ship.showAverageSpeed()}`);
    console.log(`Capacity in pounds: ${ship.showCapacityInPounds()}`);

    shipInputs.forEach(input => {
      const inputValue = input;
      inputValue.value = '';
    });

    const li = document.createElement('li');
    li.insertAdjacentHTML(
      'afterbegin',
      `
      <span>ID:</span> ${ship._id}
      <span>Model: </span>${ship._model}
      <span>Type:</span> ${ship._name}
      <span>Produced year:</span> ${ship._producedYear}
      <span>Capacity:</span> ${ship._capacity}kg
      <span>Average speed:</span> ${ship._averageSpeed}km
      <span>Count of Team:</span> ${ship._countOfTeam}
    `,
    );

    this.transportList.appendChild(li);

    const transportList = this.transportList.innerHTML;

    localStorageService.saveToken(TRANSPORT_TOKEN, transportList);
  }

  addTruck() {
    const id = document.querySelector('.truck-id').value;
    const model = document.querySelector('.truck-model').value;
    const producedYear = document.querySelector('.truck-producedYear').value;
    const capacity = document.querySelector('.truck-capacity').value;
    const averageSpeed = document.querySelector('.truck-averageSpeed').value;
    const licensePlate = document.querySelector('.truck-licensePlate').value;
    const typeOfGas = document.querySelector('.truck-typeOfGas').value;
    const truckInputs = document.querySelectorAll('.truck-input');

    let truck;

    truck = TransportFactory.createTransport(
        'truck',
        id,
        model,
        producedYear,
        capacity,
        averageSpeed,
        licensePlate,
        typeOfGas,
    )

    truckInputs.forEach(input => {
      if(!input.value.trim() ) truck = TransportFactory.createTransport('truck')
    });

    console.log(`Average speed: ${truck.showAverageSpeed()}`);
    console.log(`Capacity in pounds: ${truck.showCapacityInPounds()}`);

    truckInputs.forEach(input => {
      const inputValue = input;
      inputValue.value = '';
    });

    const li = document.createElement('li');
    li.insertAdjacentHTML(
      'afterbegin',
      `
      <span>ID:</span> ${truck._id}
      <span>Model:</span> ${truck._model}
      <span>Produced year:</span> ${truck._producedYear}
      <span>Capacity:</span> ${truck._capacity}kg
      <span>Average speed:</span> ${truck._averageSpeed}km
      <span>License plate:</span> ${truck._licensePlate}
      <span>Type of gas:</span> ${truck._typeOfGas}
    `,
    );

    this.transportList.appendChild(li);

    const transportList = this.transportList.innerHTML;

    localStorageService.saveToken(TRANSPORT_TOKEN, transportList);
  }

  render() {
    this.transportList.innerHTML = '';

    if (localStorageService.init(TRANSPORT_TOKEN)) {
      localStorageService.saveToken(TRANSPORT_TOKEN, null);

      console.log(`local storage for ${TRANSPORT_TOKEN} is initialized`);
    }

    this.transportList.innerHTML = localStorageService.getToken(TRANSPORT_TOKEN);
  }
}

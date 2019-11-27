import Cost from './Cost';
import LocalStorageService from '../services/LocalStorageService';

const localStorageService = LocalStorageService.getInstance();
const COST_TOKEN = 'Cost';

export default class CostList {
  constructor() {
    this.costList = document.querySelector('.cost-list');

    const addCostButton = document.getElementById('add-cost');

    addCostButton.addEventListener('click', this.addCost.bind(this));

    this.render();
  }

  addCost() {
    const model = document.querySelector('.model').value;
    const costByKilogram = document.querySelector('.costByKilogram').value;
    const costByDistance = document.querySelector('.costByDistance').value;
    const costInputs = document.querySelectorAll('.cost-input');

    const cost = new Cost(model, costByKilogram, costByDistance);

    costInputs.forEach(input => {
      const inputValue = input;
      inputValue.value = '';
    });

    const li = document.createElement('li');
    li.insertAdjacentHTML(
      'afterbegin',
      `
      <span>Model:</span> ${cost._model}
      <span>Cost by kilogram:</span> ${cost._costByKilogram}
      <span>Cost by distance:</span> ${cost._costByDistance}
    `,
    );

    this.costList.appendChild(li);

    const costList = this.costList.innerHTML;

    localStorageService.saveToken(COST_TOKEN, costList);
  }

  render() {
    this.costList.innerHTML = '';

    if (localStorageService.init(COST_TOKEN)) {
      localStorageService.saveToken(COST_TOKEN, null);

      console.log(`local storage for ${COST_TOKEN} is initialized`);
    }

    this.costList.innerHTML = localStorageService.getToken(COST_TOKEN);
  }
}

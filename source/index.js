import TransportList from './models/TransportList';
import CostList from './models/CostList';

// Styles
import './theme/init.css';


function transportList() {
    const transport = new TransportList();
    return transport
}

function costList() {
    const cost = new CostList();
    return cost
}

transportList();
costList();


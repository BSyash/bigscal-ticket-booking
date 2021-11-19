import { useHistory } from 'react-router-dom'
import './App.css';
import BusTicketBooking from './BusTicketBooking/BusTicketBooking';
import SearchTicket from './SearchTicket/SearchTicket';

function App() {
  const history = useHistory()
  return (
    <>

      <div className="App">
        <BusTicketBooking />
      </div>
    </>
  );
}

export default App;

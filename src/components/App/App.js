import Main from '../Main/Main';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';
import Promo from '../Promo/Promo';

function App() {
  return (
    <div className='page'>
      <Header />
      <Promo />
      <Main />
      <Contacts />
    </div>
  );
}

export default App;

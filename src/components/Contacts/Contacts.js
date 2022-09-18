import tg from '../../images/icons8-телеграм-50 (2).png';
import email from '../../images/icons8-конверт-в-круге-50 (1).png';


function Contacts() {
  return (
    <section className="contacts page-limits">
      <a name="contacts"></a>
      <h2 className="contacts__heading main__heading">Мои контакты</h2>
      <div className="contacts__container">
        <a href="https://t.me/netitov" className="contacts__link">
          <img src={tg} className="contacts__img"></img>
          <p className="contacts__title">@netitov</p>
        </a>
        <a href="mailto:netitov@gmail.com" className="contacts__link">
          <img src={email} className="contacts__img"></img>
          <p className="contacts__title">netitov@gmail.com</p>
        </a>
      </div>
    </section>
  );
}

export default Contacts;

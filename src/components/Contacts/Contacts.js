import { IoMdMail } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function Contacts() {
  return (
    <section className="contacts page-limits">
      <a name="contacts"></a>
      <h2 className="contacts__heading main__heading">Contacts</h2>
      <div className="contacts__container">
        <a href="https://t.me/netitov" className="contacts__link">
          <FaTelegram />
          <p className="contacts__title">@netitov</p>
        </a>
        <a href="mailto:netitov@gmail.com" className="contacts__link">
          <IoMdMail />
          <p className="contacts__title">netitov@gmail.com</p>
        </a>
        <a href="https://github.com/netitov" className="contacts__link">
          <BsGithub />
          <p className="contacts__title">netitov</p>
        </a>
      </div>
    </section>
  );
}

export default Contacts;

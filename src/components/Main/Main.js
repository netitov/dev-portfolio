import pic from '../../images/MovieExpl.jpg';
import pic1 from '../../images/portf2.jpg';
import pic2 from '../../images/mesto.jpg';
import pic3 from '../../images/admin2.jpg';
import github from '../../images/GitHub-Mark-Light-64px.png';
import siteLink from '../../images/icons8-внешняя-ссылка-30.png';

function Main() {
  return (
    <main className="main page-limits">
      <h2 className="main__heading">Мои работы</h2>
      <div className="main__card-list">

        <div className="main__card card">
          <a href="http://movies.netitov.ru/" className="card__img-link">
            <img src={pic} alt="movie-explorer" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data">
            <h2 className="card__heading">Movie explorer</h2>
            <p className="card__description">Дипломный проект: поиск фильмов по названию через API;
              добавление фильмов в избранное; редактирование профиля пользователя
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>Express</li>
              <li>API</li>
              <li>MongoDB</li>
            </ul>
            <a href="https://github.com/T-Nick-13/movies-explorer-frontend" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="http://movies.netitov.ru/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="http://stafeeva.site/" className="card__img-link">
            <img src={pic1} alt="movie-explorer" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data">
            <h2 className="card__heading">Portfolio</h2>
            <p className="card__description">Портфолио иллюстратора: просмотр изображений; форма обратной связи
              с отправкой по email
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>Express</li>
              <li>API</li>
              <li>EmailJS</li>
            </ul>
            <a href="https://github.com/T-Nick-13/portfoilio" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="http://stafeeva.site/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="https://t-nick-13.github.io/mesto/" className="card__img-link">
            <img src={pic2} alt="movie-explorer" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data card__data">
            <h2 className="card__heading">Mesto</h2>
            <p className="card__description">Учебный проект: добавление изображений через API; изменений данных в профиле;
              добавление аватара
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>API</li>
            </ul>
            <a href="https://github.com/T-Nick-13/mesto" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="https://t-nick-13.github.io/mesto/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="http://admin.stafeeva.site/" className="card__img-link">
            <img src={pic3} alt="movie-explorer" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data card__data">
            <h2 className="card__heading">Portfolio-admin</h2>
            <p className="card__description">Сервис для управления страницы портфолио иллюстратора: загрузка/ удалений
              изображений через API; просмотр статистики
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>Express</li>
              <li>API</li>
              <li>MongoDB</li>
            </ul>
            <a href="https://github.com/T-Nick-13/portfolio-admin" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="http://admin.stafeeva.site/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>



      </div>
    </main>
  );
}

export default Main;

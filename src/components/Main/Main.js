import pic from '../../images/MovieExpl.jpg';
import pic1 from '../../images/portf2.jpg';
import pic2 from '../../images/todolist.jpg';
import pic3 from '../../images/admin2.jpg';
import taskboard from '../../images/taskboard.jpg';
import activity from '../../images/activity.jpg';
import github from '../../images/GitHub-Mark-Light-64px.png';
import siteLink from '../../images/icons8-внешняя-ссылка-30.png';

function Main() {
  return (
    <main className="main page-limits">
      <h2 className="main__heading">Мои работы</h2>
      <div className="main__card-list">

        <div className="main__card card">
          <a href="https://movies.netitov.ru/" className="card__img-link">
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
            <a href="https://movies.netitov.ru/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="https://stafeeva.site/" className="card__img-link">
            <img src={pic1} alt="portfolio" className="card__img" />
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
            <a href="https://stafeeva.site/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="https://todo.netitov.ru/" className="card__img-link">
            <img src={pic2} alt="todo-list" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data card__data">
            <h2 className="card__heading">Todo-list</h2>
            <p className="card__description">Управление задачами: добавление/ удаление/ редактирование задач,
              отслеживание срока задач в формате списка
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>Express</li>
              <li>API</li>
              <li>MongoDB</li>
            </ul>
            <a href="https://github.com/T-Nick-13/todo-list" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="https://todo.netitov.ru/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="https://admin.stafeeva.site/" className="card__img-link">
            <img src={pic3} alt="portfolio-admin" className="card__img" />
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
            <a href="https://admin.stafeeva.site/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="https://tboard.netitov.ru/" className="card__img-link">
            <img src={taskboard} alt="taskboard" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data card__data">
            <h2 className="card__heading">Task-board</h2>
            <p className="card__description">Панель задач: управление задами в формате Kanban доски. Добавление подзадач
             и комментариев к задачам
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>Express</li>
              <li>API</li>
              <li>MongoDB</li>
            </ul>
            <a href="https://github.com/T-Nick-13/task-board" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="https://tboard.netitov.ru/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>

        <div className="main__card card">
          <a href="https://activity.netitov.ru/" className="card__img-link">
            <img src={activity} alt="activity-tracker" className="card__img" />
            <div className="card__overlay"></div>
          </a>
          <div className="card__data card__data">
            <h2 className="card__heading">Activity tracker</h2>
            <p className="card__description">Трекер активности: сортировка данных в таблице; фильтрация таблицы по разным колонкам
              и условиям
            </p>
            <ul className="card__ul">
              <li>React</li>
              <li>Express</li>
              <li>API</li>
              <li>PostgreSQL</li>
            </ul>
            <a href="https://github.com/T-Nick-13/welbex-table" className="card__link">
              <img src={github} alt="github logo"></img>
            </a>
            <a href="https://activity.netitov.ru/" className="card__link">
              <img src={siteLink} alt="link logo"></img>
            </a>
          </div>
        </div>



      </div>
    </main>
  );
}

export default Main;

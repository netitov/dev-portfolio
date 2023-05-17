import React from "react";

import lfc from '../images/LfcStats.png';
import lfc2 from '../images/LfcStats2.png';
import lfc3 from '../images/LfcStats3.png';

import portf from '../images/Stafeeva.png';
import portf1 from '../images/Stafeeva2.png';
import portf2 from '../images/Stafeeva3.png';

import taskboard from '../images/task-board.png';
import taskboard1 from '../images/task-board2.png';
import taskboard2 from '../images/task-board3.png';

import movie from '../images/Movies-explorer.png';
import movie1 from '../images/Movies-explorer2.png';
import movie2 from '../images/Movies-explorer3.png';

import portAd from '../images/Portfolio-admin.png';
import portAd1 from '../images/Portfolio-admin2.png';


export const cards = [
  {
    title: 'LfcStats',
    url: 'https://lfcstats.netitov.ru/',
    img: [lfc, lfc2, lfc3],
    description: 'Футбольная статистика: получение статистики, новостей и youtube видео с разных источников через API, автоматическое регулярное обновление данных в БД, интерактивные диаграммы и таблицы.',
    descriptionEn: 'Football stats: fetching stats, news and videos from different sources via API, auto data updating in the database, interactive graphs and tables',
    techs: ['React', 'Chart JS', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/lfcstat',
  },
  {
    title: 'Illustrator portfolio',
    url: 'https://stafeeva.site/',
    img: [portf, portf1, portf2],
    description: 'Просмотр изображений; форма обратной связи с отправкой по email',
    descriptionEn: 'View illustrations in grid layout and slider; page navigation with React Router; contact form with email sending',
    techs: ['React', 'CSS', 'Email JS' ],
    github: 'https://github.com/netitov/portfoilio',
  },
  {
    title: 'Task-board',
    url: 'https://tboard.netitov.ru/',
    img: [taskboard, taskboard1, taskboard2],
    description: 'Панель задач: управление задами в формате Kanban доски. Добавление подзадач и комментариев к задачам',
    descriptionEn: 'Task management in a kanban board. Add subtasks and comments',
    techs: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/task-board',
  },
  {
    title: 'Movie-explorer',
    url: 'https://movies.netitov.ru/',
    img: [movie, movie1, movie2],
    description: 'Регистрация и авторизация пользователей, поиск фильмов по названию, добавление фильмов в избранное, редактирование профиля пользователя',
    descriptionEn: 'Movie search by title; adding movies to favorites; signing up and authorization of users; editing user profile',
    techs: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/movies-explorer-frontend',
  },
  {
    title: 'Portfolio-admin',
    url: 'https://admin.stafeeva.site/',
    img: [portAd, portAd1],
    description: 'Сервис для управления страницы портфолио иллюстратора: загрузка/ удаление изображений через API; просмотр статистики',
    descriptionEn: 'App for administration illustrator portfolio site: upload and deleting illustrations; view image stats',
    techs: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/portfolio-admin',
  }
];

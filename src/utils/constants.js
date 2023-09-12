import React from 'react';

import lfc from '../images/LfcStats.png';
import portf from '../images/Stafeeva.png';
import taskboard from '../images/task-board.png';
import wordslearner from '../images/words_learner.png';

export const cards = [
  {
    title: 'Words Learner',
    url: 'https://wordslearner.site',
    img: [wordslearner],
    description: '',
    descriptionEn:
      'Service helps to learn words and master languages efficiently: translate, controll process, check word usages and much more',
    techs: ['React', 'Chart JS', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/words-learner',
  },
  {
    title: 'LfcStats',
    url: 'https://lfcstats.netitov.ru/',
    img: [lfc],
    description:
      'Футбольная статистика: получение статистики, новостей и youtube видео с разных источников через API, автоматическое регулярное обновление данных в БД, интерактивные диаграммы и таблицы.',
    descriptionEn:
      'Football club Liverpool: view results, fixtures, team statistics, latest news, compare players, and more',
    techs: ['React', 'Chart JS', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/lfcstat',
  },
  {
    title: 'Illustrator portfolio',
    url: 'https://stafeeva.site/',
    img: [portf],
    description: 'Просмотр изображений; форма обратной связи с отправкой по email',
    descriptionEn:
      'View illustrations, check usage examples, find author information, and access the contact form',
    techs: ['React', 'CSS', 'Email JS'],
    github: 'https://github.com/netitov/portfoilio',
  },
  {
    title: 'Task-board',
    url: 'https://tboard.netitov.ru/',
    img: [taskboard],
    description:
      'Панель задач: управление задами в формате Kanban доски. Добавление подзадач и комментариев к задачам',
    descriptionEn: 'Task management in a kanban board. Add subtasks and comments',
    techs: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/netitov/task-board',
  },
];

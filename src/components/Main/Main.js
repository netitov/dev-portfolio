import { cards } from '../../utils/constants';
import Card from '../Card/Card';

function Main() {
  return (
    <main className='main'>
      <a name='works'></a>
      <h2 className='main__heading'>WORKS</h2>

      <div className='main__card-list'>
        {cards.map((i, index) => {
          return (
            <Card
              title={i.title}
              url={i.url}
              img={i.img}
              description={i.descriptionEn}
              techs={i.techs}
              github={i.github}
              key={i.title}
              x={index % 2 === 0 ? '100%' : '-100%'}
            />
          );
        })}
      </div>

      <div className='main__techs'>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Redux</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </main>
  );
}

export default Main;

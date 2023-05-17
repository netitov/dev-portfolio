import { cards } from '../../utils/constants';
import Card from '../Card/Card';

function Main() {

  return (
    <main className="main page-limits">
      <h2 className="main__heading">Projects</h2>
      <div className="main__card-list">

        {cards.map((i) => {
          return (
            <Card
              title={i.title}
              url={i.url}
              img={i.img}
              description={i.descriptionEn}
              techs={i.techs}
              github={i.github}
              key={i.title}
            />
          )
        })}

      </div>
    </main>
  );
}

export default Main;

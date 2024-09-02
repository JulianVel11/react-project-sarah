import infoImg from "./assets/info-section-img.jpg";
import GoalCards from "./components/GoalCard";
import WorkCard from "./components/WorkCard";
import CallButton from "./components/CallButton";
import PictureSarah from "./components/PictureSarah";
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Schedule />
      </section>
      <section className="information-section">
        <div className="information-picture">
          <img src={infoImg} alt="Img" />
        </div>
        <div className="information-text">
          <div className="text-container">
            <h2>Hey boss, are you ready to...</h2>
            <h3>Take your business to the next level?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis nisi alias quos ex eos vel? Delectus, dolor
              reprehenderit. Recusandae aliquam reiciendis voluptatum quidem
              optio alias odio. Natus, est! Sequi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione veritatis nisi alias quos ex
              eos vel? Delectus, dolor reprehenderit. Recusandae aliquam
              reiciendis voluptatum quidem optio alias odio. Natus, est! Sequi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis nisi alias quos ex eos vel? Delectus, dolor
              reprehenderit. Recusandae aliquam reiciendis voluptatum quidem
              optio alias odio. Natus, est! Sequi. Recusandae aliquam reiciendis
              voluptatum quidem optio alias odio. Natus, est! Sequi.
            </p>
          </div>
        </div>
      </section>
      <section className="goals-section">
        <h2>Imagine if you could...</h2>
        <GoalCards />
      </section>
      <section className="work-section">
        <div className="work-tittle-container">
          <h2>Let's work together</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            praesentium, ex fuga eaque placeat asperiores, incidunt aliquid, hic
            tempore accusamus nihil! Ea, sit. Repellat, nesciunt iure!
            Perspiciatis minima eaque exercitationem!
          </p>
        </div>
        <div className="work-cards-container">
          <WorkCard />
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-info-container">
          <h2>Want to see if we're the right place?</h2>
          <CallButton />
        </div>
      </section>
      <section className="showcase-section">
        <div className="showcase-picture">
          <PictureSarah />
        </div>
        <div className="showcase-information">
          <div className="text-container">
            <h2>Sarah is the best coach! </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              facere atque expedita, iure obcaecati ducimus repudiandae totam
              doloremque voluptatibus, animi dolorem eius. Laudantium
              consequuntur molestiae eum? In excepturi porro quibusdam
              doloremque provident aspernatur. Aspernatur deleniti, obcaecati
              quod fugiat possimus quibusdam nulla esse quaerat dolorem adipisci
              veritatis optio cupiditate magni officiis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

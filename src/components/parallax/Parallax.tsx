import React from "react";
import "./parallax.css";

const Parallax = ({}) => {
  return (
    <div id="parallax-wrapper">
      <section>
        <div className="title">
          <hgroup>
            <h1>elephant</h1>
            <h2>a short bio</h2>
          </hgroup>
        </div>
      </section>

      <section>
        <div className="p-one parallax-inner">
          <h2>endearing</h2>
        </div>
      </section>
      <section>
        <div className="content-text">
          <p>
            <span className="first-letter red">T</span>
            he elephant is Earth's largest land animal, although the Asian
            elephant is slightly smaller than its African cousin. Asian
            elephants can be identified by their smaller, rounded ears(An
            African elephant's ears resemble the continent of Africa). African
            elephants stand 3–4 m (10–13 ft) and weigh 4,000–7,000 kg
            (8,800–15,400 lb) while Asian elephants stand 2–3.5 m (7–11 ft) and
            weigh 3,000–5,000 kg (6,600–11,000 lb). In both cases, males are
            larger than females. All elephants have several distinctive
            features, the most notable of which is a long trunk or proboscis,
            used for many purposes, particularly breathing, lifting water, and
            grasping objects.
          </p>
          <div className="line-break"></div>
          <p>
            Elephant ears radiate heat to help keep these large animals cool,
            but sometimes that isn't enough. Elephants are fond of water and
            enjoy showering by sucking water into their trunks and spraying it
            all over themselves. An elephant's trunk is actually a long nose
            with many functions. It is used for smelling, breathing, trumpeting,
            drinking, and also for grabbing things—especially a potential meal.
            The trunk alone contains about 100,000 different muscles. Asian
            elephants have a fingerlike feature on the end of their trunk that
            they can use to grab small items. (African elephants have two.)
          </p>
        </div>
      </section>

      <section>
        <div className="p-two parallax-inner">
          <h2>loyal</h2>
        </div>
      </section>
      <section>
        <div className="content-text">
          <p>
            <span className="first-letter darkgreen">F</span>
            or the most part humans and elephants work well together, that isn’t
            always the case. When we hear stories of these animals being violent
            we have to remember that they are wild animals. The fact that we
            have become used to seeing them around people doesn’t mean that as a
            whole they have become domesticated. The temperament of each one as
            well as the personality is very different. In many areas of the
            world including Asia, elephants are working animals. They are well
            cared for though with days off in between to help them cope. Females
            don’t have to work once they are pregnant and there is always plenty
            of food for these animals. They have the job of moving heavy logs
            and other items in areas where there isn’t machinery to do it.
          </p>
          <div className="line-break"></div>
          <p>
            There are some heroic stories as well of elephants stepping in to
            help humans. It can be to protect them from animals including other
            elephants at times. They have been able to help them when natural
            disasters occur, moving heavy items to get to people and to rescue
            them. Most researchers aren’t surprised by these acts at all though.
            This is because they elephant is well known to being intelligent and
            capable of experiencing the same emotions as humans.
          </p>
        </div>
      </section>

      <section>
        <div className="p-three parallax-inner">
          <h2>herculean</h2>
        </div>
      </section>
      <section>
        <div className="content-text">
          <p>
            <span className="first-letter green">T</span>
            he relationship between humans and elephants has had its ups and
            downs. Some people are out to destroy them, thinking that hunting of
            these massive animals is the ultimate thrill. Others don’t care if
            they are extinct but in the mean time they will slaughter elephants
            in order to make money from the sell of their ivory tusks.
          </p>
          <div className="line-break"></div>
          <p>
            The invention of guns increased the pressure. The 19th century
            brought a fashion for big game hunting among colonialists, which
            wiped out herds across the continent of Africa. Now the remaining
            dwindling numbers face the threat of local hunters and modern
            poaching gangs, financed by Asian syndicates and armed by the
            conflicts of Africa. Elephants are the end of a 60m-year lineage –
            last of the megaherbivores. Some experts see the brutal killings of
            elephants not as a battle for a commodity, but for land. As the
            human population booms, so does demand for space. Poaching
            conveniently removes elephants from the land, leaving it open to
            development.
          </p>
        </div>
      </section>
      <section>
        <div className="p-four parallax-inner">
          <h2>amusing</h2>
        </div>
      </section>

      <footer>
        <p>
          <span className="first-letter skyblue">n</span>o one in the world
          needs an elephant tusk but an elephant
        </p>
      </footer>
    </div>
  );
};
export default Parallax;

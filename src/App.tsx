import React, {} from "react";
import "./App.css";
import Pisnicka from "./components/music/Pisnicka";
import {music} from "./helpers/music_config";
import Picture from "./components/pictures/Picture";
import {pole_obrazku} from "./helpers/picture_config";
import {rings_configurate} from "./helpers/rings_configurate";
import Ring from "./components/rings/Ring";


const App = () => {
    return (
        <main className="app">
            <nav className={"navigace"}>
                <ul className={"menu-list"}>
                    <li>
                        <a href={"#music"}>
                            <h1>Music.</h1>
                        </a>
                    </li>
                    <li>
                        <a href={"#history"}>
                            <h1>History</h1>
                        </a>
                    </li>
                    <li>
                        <a href={"#obrazky"}>
                            <h1>Interprets</h1>
                        </a>
                    </li>
                </ul>
            </nav>
            <h1>Music Bar🎶</h1>


            <section className={"music"} id={"music"}>
                {music.map((genre) => (
                    <Pisnicka
                        zdrojova_url={genre.src}
                        nazev_zanru={genre.header}
                        id_stylu={genre.id}
                        key={genre.id}
                    />
                ))}
            </section>

            <section className={"pictures"} id={"pictures"}>
                {pole_obrazku.map((obrazek) => (
                    <Picture
                        zdrojova_url={obrazek.zdrojova_url}
                        nazev_obrazku={obrazek.nazev_obrazku}
                        key={obrazek.zdrojova_url}
                    />
                ))}
            </section>


            <button className="big-button">Push Me</button>


            <h2>Biography</h2>
            <section className={"history"} id={"history"}>
                <p> Billie Eilish Pirate Baird O'Connell is an American musician, singer and actress from Los Angeles.
                    She performed hit songs such as "Bad Guy" and "No Time to Die," which was used in the James Bond
                    film of the same name. She provided ADR for Ramona and Beezus, Diary of a Wimpy Kid: Rodrick Rules
                    and X-Men: Apocalypse.</p>

                <p> bbn$ Born Alexander Gumuchian in Vancouver, he dabbled with piano and percussion as a child, but
                    favored
                    swimming over music. That changed when he injured his back in high school, dashing his professional
                    dreams. He studied college-level kinesiology to gain a better understanding of pain, which inspired
                    him to try his hand at music. Gumuchian's early songwriting involved the Broke Boy Gang, a local
                    crew who performed and recorded together for a brief period before splitting up. On his own, he
                    started composing tracks in earnest, uploading them online in 2016 as "bbnomula." With a heavy trap
                    influence and clever sense of humor, Gumuchian built an underground audience across the globe, from
                    the U.S. to China, and soon other rappers came calling for collaborations, including Minnesota's
                    Yung Gravy. The pair issued one of their first singles, "Run This Shit," in 2017. Later that year, a
                    full EP, Baby Gravy, arrived.</p>

                <p>
                    The Black Eyed Peas date back to 1988, when eighth-graders William Adams (will.i.am) and Allan
                    Pineda (apl.de.ap) met and began rapping and performing together around Los Angeles. The pair signed
                    to Ruthless Records (run by Eazy-E) in 1992, catching the attention of Eazy-E manager Jerry Heller's
                    nephew. Along with another friend of theirs, Dante Santiago, they called their trio Atban Klann
                    (ATBAN: A Tribe Beyond a Nation). Will 1X (aka will.i.am), apl.de.ap, Mookie Mook, DJ Motiv8 (aka
                    Monroe Walker), and Dante Santiago formed Atban Klann. Their debut album, Grass Roots, was never
                    released due to Ruthless Records founder Eazy-E's death.
                    After Eazy-E died in 1995, Atban Klann reformed and changed their name to Black Eyed Pods, and then
                    Black Eyed Peas. Dante Santiago was replaced with rapper, Jaime Gomez (Taboo), and Kim Hill a singer
                    which featured on a selected number of their tracks. Santiago continued to be a background singer
                    for the group. Unlike the "gangsta rap" sounds of Los Angeles-based hip hop acts at the time, the
                    trio performed with a live band and adopted a conscious musical and appearance style. After being
                    signed to Interscope Records and releasing their debut, Behind the Front (1998) the group (and their
                    accompanying live band) earned critical acclaim. One of the singles from the album was "Joints &
                    Jam", and was featured on the Bulworth soundtrack. Singer Sierra Swan joined in 1998, appearing on
                    the 1998 song "Fallin' Up", before she left in 2000. Their second album, Bridging the Gap (2000),
                    produced the singles "Weekends" featuring Esthero and "Request + Line" featuring R&B singer Macy
                    Gray. Hill left the band while producing the album, but was still featured on the album tracks for
                    "Hot" and "Tell Your Mama Come" as well as in the video for "Weekends".
                </p>

            </section>


            <section
                className={"rings"}>id={"rings"}
                {rings_configurate.map((ring) => (
                    <Ring
                        rings={ring.ring}
                        key={ring.ring}
                    />
                ))}
            </section>
        </main>
    );
};

export default App;

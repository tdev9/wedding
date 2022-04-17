import * as React from "react";
import { Section } from "../shared/section/section";
import AndiTamasImg from "../../assets/images/andi_tamas.jpg";
import "./welcome.styles.scss";
import { Programs } from "./programs/programs";

export const Welcome = React.forwardRef<HTMLDivElement>((extraParams, ref) => {
  return (
    <div className="welcome-page" ref={ref}>
      <a className="welcome-page-anchor" id="intro" />
      <div className="section-container">
        <Section title="Sziasztok!" imgSrc={AndiTamasImg}>
          <div>
            <p>
              Köszöntünk Titeket az oldalon! Reméljük velünk fogtok ünnepelni
              ezen a szép napon. Az oldalon megtaláltok egy-két plusz
              információt a Nagy Nappal kapcsolatban. Természetesen, ha valaki
              nem követi ezt az oldalt, nem fog lemaradni semmiről &#9786;
              <br />
            </p>
            <div className="quote-container">
              <blockquote>
                Az időnk, mint vágtató vadlovak suhannak át az élet végtelen
                sztyeppéin. Csupán egy fűszál vagy benne egymagad, de együtt,
                mert összetartozunk, megéljük és túléljük a végtelen dombokat.
              </blockquote>
              <cite>Kowalsky</cite>
            </div>
            <h1>Extra infók </h1>
            <p>
              A <b>szállásokat</b> délután 2-től tudjátok elfoglalni, de lesz rá
              lehetőség a templomi és a polgári szertartás között is.
            </p>
            <p>
              A <b>koszorúslányok</b> a templomnál keressék a ceremóniamestert
              (angolosan: sensei-t), Fricit, aki minden infót elmond majd
              Nektek. &#9786;
            </p>
            <p></p>
          </div>
        </Section>
      </div>
      <a className="welcome-page-anchor" id="menu" />
      <div className="carte__img ">Menü</div>
      <div className="section-container section-container--program">
        <Section className="carte">
          <h1>Leves</h1>
          <p>Tyúkhúsleves vegyes zöldséggel, főtt hússal és cérnametélttel</p>
          <h1>Főétel</h1>
          <div>
            <p>Rántott gomba, sajt, cukkini, karfiol</p>
            <p>Fokhagymás cigánypecsenye</p>
            <p>Sajttal-sonkával töltött rántott csirkemell filé</p>
            <p> Póréhagymás tejszínes-mustáros csirkemell</p>
          </div>
          <h1>Köret / Savanyúság</h1>
          <div>
            <p>Rizibizi</p>
            <p>Petrezselymes krumpli</p>
            <p>Házi vegyes savanyúság</p>
            <p>Uborkasaláta</p>
          </div>
          <h1>Éjféli menü</h1>
          <div>
            <p>Borjúpaprikás sztrapacskával</p>
            <p>Csirkepaprikás galuskával és savanyúsággal</p>
          </div>
          <h1>Üdítők</h1>
          <div>
            <p>Naturaqua ásványvizek</p>
            <p>Coca Cola, Coca Cola-zero</p>
            <p>Fanta narancs, Sprite, Gyömbér, Tonic</p>
            <p>Cappy rostos üdítők: Alma, Narancs, Őszibarack</p>
          </div>
          <h1>Sör</h1>
          <div>
            <p>Dreher csapolt világos</p>
            <p>Dreher alkoholmentes</p>
          </div>
          <h1>Borok</h1>
          <div>
            <p>Száraz fehér, rozé, vörös</p>
          </div>
          <h1>Rövidek</h1>
          <div>
            <p>Finlandia vodka, Martini bianco, Jagermeister, Unicum</p>
            <p>Prosecco Senior extra száraz, Aperol</p>
            <p>Házipálinka, Bacardi rum, Baileys, Finsbury Gin</p>
            <p>Saját pálinkák: Körte, Barack, Szilva, Szőlő</p>
          </div>
        </Section>
      </div>
      <a className="welcome-page-anchor" id="programs" />
      <div className="programs__img ">Program</div>
      <div className="section-container section-container--program">
        <Section className="program">
          <Programs />
        </Section>
      </div>

      <a className="welcome-page-anchor" id="bus" />
      <div className="bus-arrivals__img">Busz indulások</div>
      <div className="section-container bus-arrivals">
        <Section>
          <p>
            Lehetőség lesz hajnal 0:30-tól 9 fős kisbuszt a hazajutásra igénybe
            venni. A busz egészen reggelig közlekedik a környező településekre,
            illetve a dorogi szállásra. Bízunk benne, hogy mindenki jó későn,
            pontosabban korán ér majd haza/szállásra.
          </p>

          <p>
            Aki nem kívánja igénybe venni a kisbuszt, néhány környékbeli taxi
            telefonszám hasznos lehet:
            <ul>
              <li>
                Peti taxi: <a href="tel:+36303090105">+36 30 309 0105</a>
              </li>
              <li>
                Dudás Bence taxi: <a href="tel:+36703214055">+36 70 321 4055</a>
              </li>
            </ul>
          </p>
        </Section>
      </div>
    </div>
  );
});

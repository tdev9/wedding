import * as React from "react";
import { Section } from "../shared/section/section";
import AndiTamasImg from "../../assets/images/andi_tamas.jpg";
import bus from "../../assets/images/bus.jpg";
import "./welcome.styles.scss";
import cssVariables from "../variables.styles.scss";

import Church from "../../assets/icons/blue-domed-church.svg";
import Rings from "../../assets/icons/wedding-rings.svg";
import Concert from "../../assets/icons/concert.svg";
import WeddingDress from "../../assets/icons/wedding-dress.svg";
import { Portal } from "../shared/portal/portal";
import { Arrow } from "../shared/arrow/arrow";
import { useMediaQuery } from "react-responsive";
export const Welcome = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const isMaximumSmallScreen = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointSmall})`,
  });
  const isMaximumTabletScreen = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointTablet})`,
  });
  const isMaximumLargeScreen = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointLarge})`,
  });
  const isMaximumExtraLargeScreen = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointExtraLarge})`,
  });
  const isMaximum1350 = useMediaQuery({ query: `(max-width: 1350px)` });
  const isMaximum1200 = useMediaQuery({ query: `(max-width: 1200px)` });

  const arrowWidth = isMaximum1200 ? "30px" : isMaximum1350 ? "70px" : "150px";
  const mapWidth = isMaximumTabletScreen ? 300 : 500;
  const mapHeight = isMaximumTabletScreen ? 270 : 400;
  const programContent = () => {
    const [showModal, setShowModal] = React.useState("");
    return (
      <div className="pad-top-3r">
        <p>
          Itt találjátok az esküvő programját, pontos helyszínekkel, címekkel
          együtt. Térképért, illetve további információért az aláhúzott
          szövegrészre tudsz kattintani :)
        </p>
        <div className="program-item church">
          <span>
            <span className="program-item__main-word">15:00</span>: Templomi
            szertartás,{" "}
            <u className="pointer" onClick={() => setShowModal("basilica")}>
              Bazilika, Esztergom, Szent István tér 1.
            </u>
          </span>

          {showModal === "basilica" && (
            <Portal onClickPortalBackground={() => setShowModal("")}>
              <div>
                <div>
                  <h1 className="modal__title">Esztergomi Bazilika</h1>
                  <p>
                    Weboldal:{" "}
                    <a
                      href="https://www.bazilika-esztergom.hu/"
                      target="_blank"
                    >
                      https://www.bazilika-esztergom.hu
                    </a>
                    <br />
                    Cím: Esztergom, Szent István tér 1.
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24241.039972011826!2d18.730372601540157!3d47.79855034102199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a61ed6c70c465%3A0xefe4d3967f226329!2sEsztergomi%20Bazilika!5e0!3m2!1shu!2shu!4v1635360926214!5m2!1shu!2shu"
                  width={mapWidth}
                  height={mapHeight}
                  loading="lazy"
                ></iframe>
              </div>
            </Portal>
          )}
          {!isMaximumLargeScreen && (
            <div className="arrow-container">
              <Arrow
                className="arrow-church"
                numberOfItems={4}
                width={arrowWidth}
                color={cssVariables.churchColor}
                fadeConfig={{ delay: 400, fadeTime: 2500, scrollPx: 650 }}
              />
            </div>
          )}

          <div className="program-item-box church">
            <Church width="80px" />
          </div>
        </div>
        <div className="program-item rings">
          <span>
            <span className="program-item__main-word">17:00</span>: Polgári
            szertartás,{" "}
            <u className="pointer" onClick={() => setShowModal("logato")}>
              Lógató, Esztergom Külterület 0566/15 hrsz
            </u>
          </span>
          {!isMaximumLargeScreen && (
            <div className="arrow-container">
              <Arrow
                className="arrow-rings"
                color={cssVariables.ringColor}
                width={arrowWidth}
                numberOfItems={4}
                fadeConfig={{ delay: 400, fadeTime: 2500, scrollPx: 700 }}
              />
            </div>
          )}
          <div className="program-item-box rings">
            <Rings width="80px" />
          </div>
          {showModal === "logato" && (
            <Portal onClickPortalBackground={() => setShowModal("")}>
              <div>
                <div>
                  <h1 className="modal__title">Lógató</h1>
                  <p>
                    Weboldal:{" "}
                    <a href="https://logato.hu/" target="_blank">
                      https://logato.hu/
                    </a>
                    <br />
                    Cím: Esztergom Külterület 0566/15 hrsz
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57714.10518626002!2d18.753883234128754!3d47.745476325198794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a64654e479dab%3A0x8f98526bdb345f4a!2zTMOzZ2EtdMOz!5e0!3m2!1shu!2shu!4v1635188710781!5m2!1shu!2shu"
                  width={mapWidth}
                  height={mapHeight}
                  loading="lazy"
                ></iframe>
              </div>
            </Portal>
          )}
        </div>
        <div className="program-item concert">
          <span>
            <span className="program-item__main-word">
              <span className="program-item__main-word">18:00</span>
            </span>
            {": "}
            <a href="https://logato.hu/" target="_blank">
              Lógató
            </a>
            , Lakodalom, lehetőleg hajnalig :D
          </span>
          {!isMaximumLargeScreen && (
            <div className="arrow-container">
              <Arrow
                numberOfItems={4}
                color={cssVariables.concertColor}
                className="arrow-concert"
                width={arrowWidth}
                fadeConfig={{ delay: 400, fadeTime: 2500, scrollPx: 750 }}
              />
            </div>
          )}
          <div className="program-item-box concert">
            <Concert width="80px" />
          </div>
        </div>

        <div className="program-item wedding-dress">
          <span>
            <span className="program-item__main-word">0:00</span>: Menyecsketánc
          </span>
          {!isMaximumLargeScreen && (
            <div className="arrow-container">
              <Arrow
                className="arrow-wedding-dress"
                color={cssVariables.weddingDressColor}
                numberOfItems={4}
                width={arrowWidth}
                fadeConfig={{ delay: 400, fadeTime: 2500, scrollPx: 800 }}
              />
            </div>
          )}
          <div className="program-item-box wedding-dress">
            <WeddingDress width="50px" />
          </div>
        </div>
      </div>
    );
  };

  const welcomeContent = () => (
    <div>
      <p>
        Köszöntünk Titeket az oldalon! Reméljük velünk fogtok ünnepelni ezen a
        szép napon. Az oldalon megtaláltok egy-két plusz információt a Nagy
        Nappal kapcsolatban. Természetesen, ha valaki nem követi ezt az oldalt,
        nem fog lemaradni semmiről :)
        <br />
      </p>
      <div className="quote-container">
        <blockquote>
          Az időnk, mint vágtató vadlovak suhannak át az élet végtelen
          sztyeppéin. Csupán egy fűszál vagy benne egymagad, de együtt, mert
          összetartozunk, megéljük és túléljük a végtelen dombokat.
        </blockquote>
        <cite>Kowalsky</cite>
      </div>
    </div>
  );

  const busContent = () => (
    <p>
      A könnyebb hazajutás érdekében buszjáratokat indítunk a környező
      településekre, hogy mindenki tudjon tisztességesen inni. Pontos
      időpontokat és az uticélokat később feltöltjük.
    </p>
  );
  return (
    <div className="welcome-page" ref={ref}>
      <a className="welcome-page-anchor" id="intro" />
      <div className="section-container">
        <Section
          title="Sziasztok!"
          contentComponent={welcomeContent}
          imgSrc={AndiTamasImg}
        />
      </div>
      <a className="welcome-page-anchor" id="programs" />
      <div className="programs__img ">Program</div>
      <div className="section-container section-container--program">
        <Section className="program" contentComponent={programContent} />
      </div>

      <a className="welcome-page-anchor" id="bus" />
      <div className="bus-arrivals__img">Busz indulások</div>

      <div className="section-container bus-arrivals">
        <Section contentComponent={busContent} />
      </div>
    </div>
  );
});

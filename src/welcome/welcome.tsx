import * as React from "react";
import { Section } from "../shared/section/section";
import AndiTamasImg from "../../assets/images/andi_tamas.jpg";
import bus from "../../assets/images/bus.jpg";
import "./welcome.styles.scss";
import cssVariables from "../variables.styles.scss";

import { Portal } from "../shared/portal/portal";
import { Arrow } from "../shared/arrow/arrow";
import { useMediaQuery } from "react-responsive";
import { Programs } from "./programs/programs";

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
  
  const mapWidth = isMaximumTabletScreen ? 300 : 500;
  const mapHeight = isMaximumTabletScreen ? 270 : 400;

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
  const getPrograms = React.useCallback(()=> <Programs />, []);

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
        <Section className="program" contentComponent={getPrograms} />
      </div>

      <a className="welcome-page-anchor" id="bus" />
      <div className="bus-arrivals__img">Busz indulások</div>

      <div className="section-container bus-arrivals">
        <Section contentComponent={busContent} />
      </div>
    </div>
  );
});

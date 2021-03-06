import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { Arrow } from "../../shared/arrow/arrow";
import { Portal } from "../../shared/portal/portal";
import Church from "../../../assets/icons/blue-domed-church.svg";
import Rings from "../../../assets/icons/wedding-rings.svg";
import Concert from "../../../assets/icons/concert.svg";
import WeddingDress from "../../../assets/icons/wedding-dress.svg";

import cssVariables from "../../variables.styles.scss";
const BASE_FADE_CONFIG = { delay: 400, fadeTime: 2500 };
const OFFSET_PX = 150;
type ArrowContainersTopConfig = {
  church?: number;
  concert?: number;
  ring?: number;
  weddingDress?: number;
};
const ProgramsComponent: React.FC = () => {
  const [showModal, setShowModal] = React.useState("");
  const [arrowContainersTop, setArrowContainersTop] =
    React.useState<ArrowContainersTopConfig>({});
  const concertRef = React.createRef<HTMLDivElement>();
  const churchRef = React.createRef<HTMLDivElement>();
  const ringRef = React.createRef<HTMLDivElement>();
  const weddingDressRef = React.createRef<HTMLDivElement>();

  const isMaximum1200 = useMediaQuery({ query: `(max-width: 1200px)` });
  const isMaximum1350 = useMediaQuery({ query: `(max-width: 1350px)` });
  const isMaximumTabletScreen = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointTablet})`,
  });
  const isMaximumLargeScreen = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointLarge})`,
  });

  const mapWidth = isMaximumTabletScreen ? 300 : 500;
  const mapHeight = isMaximumTabletScreen ? 270 : 400;
  const arrowWidth = isMaximum1200 ? "30px" : isMaximum1350 ? "70px" : "150px";

  React.useEffect(() => {
    setArrowContainersTop({
      concert: concertRef.current?.offsetTop,
      church: churchRef.current?.offsetTop,
      weddingDress: weddingDressRef.current?.offsetTop,
      ring: ringRef.current?.offsetTop,
    });
  }, []);

  const churchFadeConfig = React.useMemo(() => {
    const top = arrowContainersTop.church;
    const scrollPx = top ? top - OFFSET_PX : 0;
    return {
      ...BASE_FADE_CONFIG,
      scrollPx: Math.max(scrollPx, 0),
    };
  }, [arrowContainersTop.church]);

  const ringFadeConfig = React.useMemo(() => {
    const top = arrowContainersTop.ring;
    const scrollPx = top ? top - OFFSET_PX : 0;
    return {
      ...BASE_FADE_CONFIG,
      scrollPx: Math.max(scrollPx, 0),
    };
  }, [arrowContainersTop.ring]);

  const weddingDressFadeConfig = React.useMemo(() => {
    const top = arrowContainersTop.weddingDress;
    const scrollPx = top ? top - OFFSET_PX : 0;
    return {
      ...BASE_FADE_CONFIG,
      scrollPx: Math.max(scrollPx, 0),
    };
  }, [arrowContainersTop.weddingDress]);

  const concertFadeConfig = React.useMemo(() => {
    const top = arrowContainersTop.concert;
    const scrollPx = top ? top - OFFSET_PX : 0;
    return {
      ...BASE_FADE_CONFIG,
      scrollPx: Math.max(scrollPx, 0),
    };
  }, [arrowContainersTop.concert]);

  const renderWeddingDressBlock = () => (
    <div className="program-item wedding-dress">
      <span>
        <span className="program-item__main-word">0:00</span>: Menyecsket??nc
      </span>
      {!isMaximumLargeScreen && (
        <div className="arrow-container" ref={weddingDressRef}>
          <Arrow
            className="arrow-wedding-dress"
            color={cssVariables.weddingDressColor}
            width={arrowWidth}
            fadeConfig={weddingDressFadeConfig}
            isTransformStartable={!!arrowContainersTop.weddingDress}
          />
        </div>
      )}
      <div className="program-item-box wedding-dress">
        <WeddingDress width="50px" />
      </div>
    </div>
  );

  const renderChurchBlock = () => (
    <div className="program-item church">
      <span>
        <span className="program-item__main-word">15:00</span>: Templomi
        szertart??s,{" "}
        <u className="pointer" onClick={() => setShowModal("basilica")}>
          Bazilika, Esztergom, Szent Istv??n t??r 1.
        </u>
      </span>

      {showModal === "basilica" && (
        <Portal onClickPortalBackground={() => setShowModal("")}>
          <div>
            <div>
              <h1 className="modal__title">Esztergomi Bazilika</h1>
              <p>
                Weboldal:{" "}
                <a href="https://www.bazilika-esztergom.hu/" target="_blank">
                  https://www.bazilika-esztergom.hu
                </a>
                <br />
                C??m: Esztergom, Szent Istv??n t??r 1.
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
        <div className="arrow-container" ref={churchRef}>
          <Arrow
            className="arrow-church"
            width={arrowWidth}
            color={cssVariables.churchColor}
            fadeConfig={churchFadeConfig}
            isTransformStartable={!!arrowContainersTop.church}
          />
        </div>
      )}

      <div className="program-item-box church">
        <Church width="80px" />
      </div>
    </div>
  );

  const renderRingBlock = () => (
    <div className="program-item rings">
      <span>
        <span className="program-item__main-word">17:00</span>: Polg??ri
        szertart??s,{" "}
        <u className="pointer" onClick={() => setShowModal("logato")}>
          L??gat??, Esztergom K??lter??let 0566/15 hrsz
        </u>
      </span>
      {!isMaximumLargeScreen && (
        <div className="arrow-container" ref={ringRef}>
          <Arrow
            className="arrow-rings"
            color={cssVariables.ringColor}
            width={arrowWidth}
            fadeConfig={ringFadeConfig}
            isTransformStartable={!!arrowContainersTop.ring}
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
              <h1 className="modal__title">L??gat??</h1>
              <p>
                Weboldal:{" "}
                <a href="https://logato.hu/" target="_blank">
                  https://logato.hu/
                </a>
                <br />
                C??m: Esztergom K??lter??let 0566/15 hrsz
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
  );

  const renderConcertBlock = () => (
    <div className="program-item concert">
      <span>
        <span className="program-item__main-word">
          <span className="program-item__main-word">18:00</span>
        </span>
        {": "}
        <a href="https://logato.hu/" target="_blank">
          L??gat??
        </a>
        , Lakodalom, lehet??leg hajnalig :D
      </span>
      {!isMaximumLargeScreen && (
        <div className="arrow-container" ref={concertRef}>
          <Arrow
            color={cssVariables.concertColor}
            className="arrow-concert"
            width={arrowWidth}
            fadeConfig={concertFadeConfig}
            isTransformStartable={!!arrowContainersTop.concert}
          />
        </div>
      )}
      <div className="program-item-box concert">
        <Concert width="80px" />
      </div>
    </div>
  );

  return (
    <div className="pad-top-3r">
      <p>
        Itt tal??lj??tok az esk??v?? programj??t, pontos helysz??nekkel, c??mekkel
        egy??tt. T??rk??p??rt, illetve tov??bbi inform??ci????rt az al??h??zott
        sz??vegr??szre tudsz kattintani :)
      </p>
      {renderChurchBlock()}
      {renderRingBlock()}
      {renderConcertBlock()}
      {renderWeddingDressBlock()}
    </div>
  );
};

export const Programs = React.memo(ProgramsComponent);

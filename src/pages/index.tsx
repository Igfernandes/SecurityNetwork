import { useEffect, useState } from "react";
import { Appresentation } from "src/components/Appresentation";
import { ClientsSay } from "src/components/ClientsSay";
import { CyberDefenses } from "src/components/CyberDefenses";
import { FeaturesSecurity } from "src/components/FeaturesSecurity";
import { InnovativeProtection } from "src/components/InnovativeProtection";
import { LatestNews } from "src/components/LatestNews";
import { OperationCenter } from "src/components/OperationCenter";
import { OurMission } from "src/components/OurMission";
import { WebsiteSecurity } from "src/components/WebsiteSecurity";
import ButtonTop from "src/components/shared/GoToTop";
//import { GoToTop } from "src/components/shared/GoToTop";

export default function Index() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      <Appresentation />
      <ButtonTop showButton={show} />
      <FeaturesSecurity />
      <OurMission />
      <WebsiteSecurity />
      <CyberDefenses />
      <OperationCenter />
      <ClientsSay />
      <InnovativeProtection />
      <LatestNews />
    </>
  );
}

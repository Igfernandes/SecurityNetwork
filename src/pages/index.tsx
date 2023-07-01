import { Appresentation } from "src/components/Appresentation";
import { ClientsSay } from "src/components/ClientsSay";
import { CyberDefenses } from "src/components/CyberDefenses";
import { FeaturesSecurity } from "src/components/FeaturesSecurity";
import { InnovativeProtection } from "src/components/InnovativeProtection";
import { LatestNews } from "src/components/LatestNews";
import { OperationCenter } from "src/components/OperationCenter";
import { OurMission } from "src/components/OurMission";
import { WebsiteSecurity } from "src/components/WebsiteSecurity";

export default function Index() {
  return (
    <>
      <Appresentation />
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

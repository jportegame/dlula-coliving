
import CommonAreasHero from "../components/banners/CommonAreasHero";
import CommonAreasGrid from "../components/cards/CommonAreasGrid";
import { siteConfig } from "../config/siteConfig";

const CommonAreasPage = () => {
  const { commonAreasHero, commonAreasGrid } = siteConfig;

  return (
    <main className="bg-black">
      <CommonAreasHero {...commonAreasHero} />
      <CommonAreasGrid {...commonAreasGrid} />
    </main>
  );
};

export default CommonAreasPage;
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CTTimeStamp from "./components/CTTimeStamp";

import CTHero from "./components/sections/CTHero";
import CTMarqueeBand from "./components/sections/CTMarqueeBand";
import CTSoforthilfe from "./components/sections/CTSoforthilfe";
import CTAktuelles from "./components/sections/CTAktuelles";
import CTLeistungen from "./components/sections/CTLeistungen";
import CTAblauf from "./components/sections/CTAblauf";
import CTSchadenarten from "./components/sections/CTSchadenarten";
import CTSchadenpositionen from "./components/sections/CTSchadenpositionen";
import CTTeamTeaser from "./components/sections/CTTeamTeaser";
import CTBigMarquee from "./components/sections/CTBigMarquee";
import CTFaqTeaser from "./components/sections/CTFaqTeaser";
import CTVideos from "./components/sections/CTVideos";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <CTHero />
        <CTMarqueeBand />
        <CTSoforthilfe />
        <CTVideos />
        <CTLeistungen />
        <CTAblauf />
        <CTSchadenarten />
        <CTSchadenpositionen />
        <CTTeamTeaser />
        <CTBigMarquee />
        <CTFaqTeaser />
        <CTAktuelles />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}

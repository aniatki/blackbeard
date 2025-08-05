import CardSpotlightComponent from "@/components/CardSpotlightComponent";
import FeaturesSectionComponent from "@/components/FeaturesSectionComponent";
import FlipWordsComponent from "@/components/FlipWordsComponent";
import FocusCardsComponent from "@/components/FocusCardsComponent";
import ImagesSliderComponent from "@/components/ImagesSliderComponent";
import InfiniteMovingCardsComponent from "@/components/InfiniteMovingCardsComponent";
import NavbarMenuComponent from "@/components/NavbarMenuComponent";
import TextHoverEffectDemo from "@/components/TextHoverEffectComponent";

export default function Home() {
  return (
    <div className="font-sans min-h-screen dark overflow-x-hidden">
      <NavbarMenuComponent />
      <ImagesSliderComponent />
      <FlipWordsComponent words={["Meet our Team", "Old is Cool", "Talk to our Team"]}/>
      <FocusCardsComponent />
      <FlipWordsComponent optionalBefore={"What our"} words={['customers', 'friends']} optionalAfter={"say"}/>
      <InfiniteMovingCardsComponent />
      <FlipWordsComponent words={['About Us', 'Our Story', 'Who Are We?']}/>
      <CardSpotlightComponent />
      <FeaturesSectionComponent/>
      <TextHoverEffectDemo />
    </div>
  );
}

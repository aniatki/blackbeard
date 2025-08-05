import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsComponent() {
  const cards = [
    {
      title: "Geovani",
      src: "https://cdn1.treatwell.net/images/view/v2.i5383445.w256.h256.xDF30C6D2/",
    },
    {
      title: "Nerea",
      src: "https://cdn1.treatwell.net/images/view/v2.i10166150.w256.h256.x884E412B/",
    },
    {
      title: "Rarysson",
      src: "https://cdn1.treatwell.net/images/view/v2.i11355510.w256.h256.x4A75852C/",
    },
    {
      title: "Léo",
      src: "https://cdn1.treatwell.net/images/view/v2.i8005406.w256.h256.x2968814C/",
    },
    {
      title: "Anibal",
      src: "https://cdn1.treatwell.net/images/view/v2.i12645174.w256.h256.xE2283EFD/",
    },
    {
      title: "Jose",
      src: "https://cdn1.treatwell.net/images/view/v2.i14080188.w256.h256.xDDF729ED/",
    },
    {
      title: "Javier",
      src: "https://cdn1.treatwell.net/images/view/v2.i14080191.w256.h256.x59ED15D5/",
    },
  ];

  return <FocusCards cards={cards}/>;
}
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  import branding from "../Carousel/img/branding.jpg";
  import management from "../Carousel/img/management.png";
  import design from "../Carousel/img/design.png";
  import seo from "../Carousel/img/seo.jpg";
  import production from "../Carousel/img/production.jpg";
  import development from "../Carousel/img/development.png";
  
  //ARREGLO que contiene la data para los slides 
  //!!ESTO SE DEBE OBTENER DEL BACKEND
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: development,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: branding,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: design,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: seo,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: management,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: production,
    },
  ];
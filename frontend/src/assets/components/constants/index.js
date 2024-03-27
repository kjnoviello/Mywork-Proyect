import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  //IMG DE SERVICIOS
  import branding from "../Carousel/img/branding.jpg";
  import management from "../Carousel/img/management.png";
  import design from "../Carousel/img/design.png";
  import seo from "../Carousel/img/seo.jpg";
  import production from "../Carousel/img/production.jpg";
  import development from "../Carousel/img/development.png";
  
  //IMG DE NAVBAR
  import img1 from "../NavInfo/img/img1.jpg"
  import img2 from "../NavInfo/img/img2.jpg"
  import img3 from "../NavInfo/img/img3.jpg"

  //ARREGLO QUE CONTIENE LA DATA DEL CAROUSEL DEL NAV
  export const dataCarousel = [{
    title:"num1",
    backgroundImage: img1,
  },{
    title:"num2",
    backgroundImage: img2,
  },{
    title:"num3",
    backgroundImage: img3,
  }];

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



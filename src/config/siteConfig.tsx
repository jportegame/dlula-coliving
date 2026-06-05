import {
  FaBed,
  FaCouch,
  FaDesktop,
  FaLeaf,
  FaShower,
  FaSnowflake,
  FaTv,
  FaUser,
  FaWifi,
} from "react-icons/fa";

export const siteConfig = {
  seo: {
    title:
      "D'Lula Coliving Medellin | Luxury Boutique Rooms for Digital Nomads",
    description:
      "Experience luxury boutique coliving in Medellin. D'Lula offers elegant private rooms, shared spaces, and a vibrant community perfect for remote workers, digital nomads, and creatives seeking connection and comfort.",
    keywords:
      "coliving medellin, boutique accommodation, digital nomads, luxury rooms, co-living, medellin apartments",
    author: "D'Lula Coliving",
    ogImage: "/dlula-logo.png",
    ogUrl: "https://dlula.com",
    twitterHandle: "@dlulacoliving",
  },
  navigation: [
    { path: "/", label: "Home", component: "MainPage" },
    { path: "/our-rooms", label: "Our Rooms", component: "OurRoomsPage" },
    {
      path: "/common-areas",
      label: "Common Areas",
      component: "CommonAreasPage",
    },
    { path: "/about", label: "About Us", component: "AboutUsPage" },
    { path: "/contact", label: "Contact Us", component: "ContactUsPage" },
  ],
  promotions: {
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSd5ZQR6AL7vaKi8docpr618cse8sEMgbFNxJWl0eKIrwns-gg/viewform?embedded=true",
  },
  contact: {
    whatsapp: "573232850861",
    whatsapplabel: "+57 323 285 0861",
    email: "dlulacoliving@gmail.com",
    social: [
      {
        icon: "facebook",
        url: "https://www.facebook.com/profile.php?id=61552256540323",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/dlulacolivingmedellin/",
      },
    ],
    additionalInfo: {
      title: "Why Choose D’Lula?",
      description:
        "D’lula is more than just a place to stay. D’Lula offers a safe and welcoming community where remote work, new friendships and unforgettable experiences all come together.",
      image: "/contact-us/why-choose-dlula.png",
    },
  },
  banner: {
    title: "D’Lula Coliving",
    description: "Boutique Coliving - Medellin - Colombia",
    image: "./livingRoomBanner.webp",
  },
  mosaicSection: {
    title: "Our Community",
    description:
      "D’Lula is a home filled with inspiring conversations, amazing adventures & genuine connection. Whether it’s morning coffee before coworking, family-style dinners or exploring the city together - everyday life here feels social, energising & intentional. A wonderful community for Digital Nomads, creatives & curious people building a life they actually enjoy in one of the best cities in the world.",
    images: [
      {
        src: "./collage/collage2.webp",
        width: 900,
        height: 1600,
      },
      {
        src: "./collage/collage3.webp",
        width: 1600,
        height: 900,
      },
      {
        src: "./collage/collage4.webp",
        width: 900,
        height: 1200,
      },
      {
        src: "./collage/collage5.webp",
        width: 900,
        height: 1200,
      },
      {
        src: "./collage/collage11.webp",
        width: 1400,
        height: 787,
      },
      {
        src: "./collage/collage9.webp",
        width: 360,
        height: 360,
      },
      {
        src: "./collage/collage10.webp",
        width: 900,
        height: 1200,
      },
      {
        src: "./collage/collage6.webp",
        width: 1200,
        height: 800,
      },
      {
        src: "./collage/collage8.webp",
        width: 900,
        height: 1200,
      },
      {
        src: "./collage/collage7.webp",
        width: 1200,
        height: 900,
      },
      {
        src: "./collage/collage12.webp",
        width: 1600,
        height: 900,
      },
      {
        src: "./collage/collage13.webp",
        width: 900,
        height: 1200,
      },
      {
        src: "./collage/collage14.webp",
        width: 1400,
        height: 787,
      },
      {
        src: "./collage/collage15.webp",
        width: 1400,
        height: 787,
      },
    ],
    layout: "columns",
    columns: 5,
    spacing: 0,
    padding: 0,
  },
  roomShowcase: {
    eyebrow: "D’Lula Rooms",
    title: "Luxury Accommodation for Digital Nomads",
    description:
      "All of our individually designed rooms have been created to ensure you have the ultimate comfort during your stay. All of our luxury rooms have a Private Bathroom, Work Desk & Ergonomic Chair, Air Conditioning, Smart TV & Fast Fiber Optic Internet. Explore Our Rooms to choose your perfect stay.",
    ctaLabel: "Explore Our Rooms",
    ctaHref: "/our-rooms",
    image: "/our-rooms/room-1/room1-main.webp",
    showArrows: false,
    imageAlt: "Luxury boutique room at D’Lula Coliving",
    seo: {
      title: "D’Lula Coliving | Elegant Boutique Rooms",
      description:
        "Stay at D’Lula Coliving and discover elegant boutique rooms designed for comfort, connection and elevated living.",
      keywords:
        "boutique coliving, D’Lula rooms, elegant stay, luxury coliving, Medellin accommodation",
    },
  },
  reviews: [
    {
      name: "Sophia",
      initial: "S",
      date: "3 weeks ago",
      text: "D’Lula felt like home from day one. The rooms are beautifully designed, always spotless, and the atmosphere is calm and welcoming. Perfect place if you want comfort while still meeting amazing people.",
      stars: 5,
    },
    {
      name: "Carlos",
      initial: "C",
      date: "1 month ago",
      text: "Una experiencia increíble. Las habitaciones son muy cómodas y elegantes, y los espacios compartidos tienen una energía muy bonita. Se siente como estar en un hotel boutique pero con comunidad.",
      stars: 5,
    },
    {
      name: "Emma",
      initial: "E",
      date: "2 weeks ago",
      text: "I absolutely loved staying at D’Lula. The design of the house is stunning, the rooms are cozy, and everything feels thoughtfully curated. One of the most peaceful stays I've had in Medellín.",
      stars: 5,
    },
    {
      name: "Andrés",
      initial: "A",
      date: "1 month ago",
      text: "D’Lula superó mis expectativas. Todo está muy bien cuidado, limpio y con una estética hermosa. Además, el ambiente es tranquilo y perfecto para descansar o trabajar remoto.",
      stars: 5,
    },
    {
      name: "Mia",
      initial: "M",
      date: "6 weeks ago",
      text: "Beautiful place, amazing location and such a warm vibe. I loved how elegant yet comfortable everything felt. Definitely one of those places you don’t want to leave.",
      stars: 5,
    },
    {
      name: "Daniel",
      initial: "D",
      date: "2 months ago",
      text: "Excelente lugar para quedarse en Medellín. Habitaciones cómodas, espacios impecables y un ambiente muy acogedor. Sin duda volvería.",
      stars: 5,
    },
    {
      name: "Olivia",
      initial: "O",
      date: "1 week ago",
      text: "D’Lula is the perfect mix between luxury and community. I loved the beautiful interiors, comfortable room, and the peaceful atmosphere throughout the house.",
      stars: 5,
    },
    {
      name: "Valentina",
      initial: "V",
      date: "5 weeks ago",
      text: "Me encantó la experiencia. El diseño del lugar es precioso, las habitaciones son súper cómodas y todo se siente muy premium sin perder esa sensación de hogar.",
      stars: 5,
    },
  ],
  footer: {
    about: {
      logo: "/logo-footer.png",
      description:
        "Our lovely community is built around connection, shared experiences & creating lifelong memories",
      social: [
        {
          icon: "facebook",
          url: "https://www.facebook.com/profile.php?id=61552256540323",
        },
        {
          icon: "instagram",
          url: "https://www.instagram.com/dlulacolivingmedellin/",
        },
      ],
    },
    contact: {
      whatsapp: "+57 323 285 0861",
      email: "dlulacoliving@gmail.com",
    },
    quickMenu: [
      { label: "Home", path: "/" },
      { label: "Our Rooms", path: "/our-rooms" },
      { label: "Common Areas", path: "/common-areas" },
      { label: "About Us", path: "/about" },
    ],
    legal: {
      year: 2026,
      text: "D’Lula Coliving",
    },
  },
  rooms: [
    {
      title: "Bedroom 1",
      shortDescription:
        "Your own peaceful space to unwind.  Enjoy the perfect balance of comfort and functionality with a stylish private bedroom featuring an ensuite bathroom, dedicated workspace  and everything you need to feel at home in Medellín.",
      longDescription:
        "Your own peaceful space to unwind.  Enjoy the perfect balance of comfort and functionality with a stylish private bedroom featuring an ensuite bathroom, dedicated workspace  and everything you need to feel at home in Medellín.",
      priceDescription: "",
      slug: "bedroom-1",
      images: [
        {
          src: "/our-rooms/room-1/room1-main.webp",
          alt: "Room 1 - Image Main",
          width: 1800,
          height: 1012,
        },
        {
          src: "/our-rooms/room-1/room1-1.webp",
          alt: "Room 1 - Image 1",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-1/room1-2.webp",
          alt: "Room 1 - Image 2",
          width: 1365,
          height: 768,
        },
        {
          src: "/our-rooms/room-1/room1-3.webp",
          alt: "Room 1 - Image 3",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-1/room1-4.webp",
          alt: "Room 1 - Image 4",
          width: 900,
          height: 1600,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
      ],
    },
    {
      title: "Bedroom 2",
      shortDescription:
        "Settle into your own cosy space which has a huge private bathroom, large workspace & thoughtful details throughout.  Everything has been designed for you to make every day living easy,  enjoyable & comfortable.",
      longDescription:
        "Settle into your own cosy space which has a huge private bathroom, large workspace & thoughtful details throughout.  Everything has been designed for you to make every day living easy,  enjoyable & comfortable.",
      slug: "bedroom-2",
      priceDescription: "",
      images: [
        {
          src: "/our-rooms/room-2/room2-main.webp",
          alt: "Room 2 - Image Main",
          width: 1600,
          height: 900,
        },
        {
          src: "/our-rooms/room-2/room2-1.webp",
          alt: "Room 2 - Image 1",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-2/room2-2.webp",
          alt: "Room 2 - Image 2",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-2/room2-3.webp",
          alt: "Room 2 - Image 3",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-2/room2-4.webp",
          alt: "Room 2 - Image 4",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-2/room2-5.webp",
          alt: "Room 2 - Image 5",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-2/room2-6.webp",
          alt: "Room 2 - Image 6",
          width: 1600,
          height: 1067,
        },
      ],
      features: [
        {
          title: "Huge Private Bathroom",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV",
          icon: <FaTv />,
        },
      ],
    },
    {
      title: "Bedroom 3",
      shortDescription:
        "Enjoy your time in Medellin in this lovely room which comes with it's own private bathroom, comfortable double bed & air conditioning. A soft, warm & welcoming colour scheme will make you feel right at home. A delightful room all round.",
      longDescription:
        "Enjoy your time in Medellin in this lovely room which comes with it's own private bathroom, comfortable double bed & air conditioning. A soft, warm & welcoming colour scheme will make you feel right at home. A delightful room all round.",
      slug: "bedroom-3",
      priceDescription: "",
      images: [
        {
          src: "/our-rooms/room-3/room3-main.webp",
          alt: "Room 3 - Image Main",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-3/room3-1.webp",
          alt: "Room 3 - Image 1",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-3/room3-2.webp",
          alt: "Room 3 - Image 2",
          width: 1067,
          height: 1600,
        },
        {
          src: "/our-rooms/room-3/room3-3.webp",
          alt: "Room 3 - Image 3",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-3/room3-4.webp",
          alt: "Room 3 - Image 4",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-3/room3-5.webp",
          alt: "Room 3 - Image 5",
          width: 1365,
          height: 768,
        },
        {
          src: "/our-rooms/room-3/room3-6.webp",
          alt: "Room 3 - Image 6",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-3/room3-7.webp",
          alt: "Room 3 - Image 7",
          width: 900,
          height: 1600,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
      ],
    },
    {
      title: "Bedroom 4",

      shortDescription:
        "One of the most loved rooms at D’Lula, featuring beautiful natural light, calming interiors and an exceptionally spacious private bathroom.",

      longDescription:
        "One of the most popular rooms at D’Lula. Guests love the natural light, calming colours and warm atmosphere that make this space feel instantly welcoming. If you appreciate a peaceful environment and an extra spacious private bathroom, Bedroom 4 is the perfect choice for your stay in Medellín.",

      priceDescription: "",

      slug: "bedroom-4",

      images: [
        {
          src: "/our-rooms/room-4/room4-main.webp",
          alt: "Room 4 - Image Main",
          width: 1600,
          height: 900,
        },
        {
          src: "/our-rooms/room-4/room4-1.webp",
          alt: "Room 4 - Image 1",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-4/room4-3.webp",
          alt: "Room 4 - Image 3",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-4/room4-4.webp",
          alt: "Room 4 - Image 4",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-4/room4-5.webp",
          alt: "Room 4 - Image 5",
          width: 1600,
          height: 900,
        },
        {
          src: "/our-rooms/room-4/room4-6.webp",
          alt: "Room 4 - Image 6",
          width: 1067,
          height: 1600,
        },
        {
          src: "/our-rooms/room-4/room4-7.webp",
          alt: "Room 4 - Image 7",
          width: 1600,
          height: 1067,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
      ],
    },
    {
      title: "Bedroom 5",

      shortDescription:
        "A warm and homely bedroom featuring a spacious work desk, calming interiors and everything needed for a comfortable stay in Medellín.",

      longDescription:
        "We absolutely love this charming, cozy and welcoming bedroom. Perfect for guests who value comfort and productivity, Bedroom 5 features an extra spacious work desk, a comfortable double bed, air conditioning and a generous private bathroom. Soft textures, calming décor and a relaxed atmosphere make this room feel effortlessly inviting from the moment you arrive.",

      priceDescription: "",

      slug: "bedroom-5",

      images: [
        {
          src: "/our-rooms/room-5/room-5-main.webp",
          alt: "Room 5 - Image Main",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-5/room-5-1.webp",
          alt: "Room 5 - Image 1",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-5/room-5-2.webp",
          alt: "Room 5 - Image 2",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-5/room-5-3.webp",
          alt: "Room 5 - Image 3",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-5/room-5-4.webp",
          alt: "Room 5 - Image 4",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-5/room-5-5.webp",
          alt: "Room 5 - Image 5",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-5/room-5-6.webp",
          alt: "Room 5 - Image 6",
          width: 1067,
          height: 1600,
        },
      ],

      features: [
        {
          title: "Private Bathroom",
          icon: <FaShower />,
        },
        {
          title: "Huge Work Desk",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
      ],
    },
    {
      title: "Bedroom 6",

      shortDescription:
        "D’Lula’s largest bedroom, designed for digital nomads who want spacious comfort, natural light and an elevated stay in Medellín.",

      longDescription:
        "Our largest room at D’Lula is often a favourite among guests. Spacious, airy and filled with beautiful natural light, Bedroom 6 offers fresh airflow, generous comfort and a refined atmosphere. It is the perfect choice for digital nomads who enjoy luxury accommodation with room to work, rest and feel completely at home.",

      priceDescription: "",

      slug: "bedroom-6",

      images: [
        {
          src: "/our-rooms/room-6/room6-main.webp",
          alt: "Room 6 - Image Main",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-6/room6-1.webp",
          alt: "Room 6 - Image 1",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-6/room6-2.webp",
          alt: "Room 6 - Image 2",
          width: 900,
          height: 1600,
        },
        {
          src: "/our-rooms/room-6/room6-3.webp",
          alt: "Room 6 - Image 3",
          width: 1600,
          height: 900,
        },
        {
          src: "/our-rooms/room-6/room6-4.webp",
          alt: "Room 6 - Image 4",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-6/room6-5.webp",
          alt: "Room 6 - Image 5",
          width: 1600,
          height: 899,
        },
        {
          src: "/our-rooms/room-6/room6-6.webp",
          alt: "Room 6 - Image 6",
          width: 1067,
          height: 1600,
        },
        {
          src: "/our-rooms/room-6/room6-7.webp",
          alt: "Room 6 - Image 7",
          width: 1600,
          height: 1067,
        },
        {
          src: "/our-rooms/room-6/room6-8.webp",
          alt: "Room 6 - Image 8",
          width: 1067,
          height: 1600,
        },
        {
          src: "/our-rooms/room-6/room6-9.webp",
          alt: "Room 6 - Image 9",
          width: 1067,
          height: 1600,
        },
      ],
      features: [
        {
          title: "Private Bathroom",
          icon: <FaShower />,
        },
        {
          title: "Work Desk & Comfy Chair",
          icon: <FaDesktop />,
        },
        {
          title: "Fast Fibre Optic Internet",
          icon: <FaWifi />,
        },
        {
          title: "Air Conditioning",
          icon: <FaSnowflake />,
        },
        {
          title: "Comfortable Double Bed",
          icon: <FaBed />,
        },
        {
          title: "Smart TV with Cable Channels",
          icon: <FaTv />,
        },
      ],
    },
  ],
  commonAreasHero: {
    eyebrow: "Common Areas",

    title: "Spaces To Connect & Inspire",

    description:
      "At D’Lula, community comes first. Our common areas are designed to bring people together, inspire new ideas and make every day feel like home.",

    image: "/common-areas/main.webp",

    imageAlt: "D'Lula common areas",

    highlights: [
      {
        icon: <FaUser />,
        title: "Community Focused",
      },
      {
        icon: <FaCouch />,
        title: "Designed For Comfort",
      },
      {
        icon: <FaWifi />,
        title: "Work & Relax Anywhere",
      },
      {
        icon: <FaLeaf />,
        title: "Surrounded By Nature",
      },
    ],
  },
  commonAreasGrid: {
    eyebrow: "Explore The House",
    title: "Every space has a purpose",
    description:
      "From slow mornings in the kitchen to productive afternoons in the coworking area, D’Lula’s shared spaces are created to make everyday living feel effortless.",
    areas: [
      {
        slug: "coworking",
        title: "Coworking",
        shortDescription:
          "A calm and inspiring environment thoughtfully designed for focus, creativity and remote work.",
        description:
          "Stay productive in a quiet and beautifully designed space created for digital nomads, remote workers and moments of deep focus. Whether you're working, studying or creating, D’Lula’s coworking area is designed to make productivity feel natural.",
        coverImage: "/common-areas/coworking/coworking-2.webp",
        imageAlt: "D'Lula coworking space",
        images: [
          {
            src: "/common-areas/coworking/coworking-1.webp",
            alt: "Coworking - Image 1",
            width: 1067,
            height: 1600,
          },
          {
            src: "/common-areas/coworking/coworking-2.webp",
            alt: "Coworking - Image 2",
            width: 1073,
            height: 1600,
          },
          {
            src: "/common-areas/coworking/coworking-3.webp",
            alt: "Coworking - Image 3",
            width: 1600,
            height: 899,
          },
          {
            src: "/common-areas/coworking/coworking-4.webp",
            alt: "Coworking - Image 4",
            width: 1600,
            height: 899,
          },
        ],
      },
      {
        slug: "house",

        title: "The House",

        shortDescription:
          "A beautifully curated home where comfort, design and community come together.",

        description:
          "More than just a place to stay, D’Lula is a thoughtfully designed home created to inspire connection, comfort and everyday well-being. Explore the shared spaces, warm atmosphere and elegant details that make the house feel truly special.",

        coverImage: "/common-areas/house/house-1.webp",

        imageAlt: "D'Lula house",

        images: [
          {
            src: "/common-areas/house/house-1.webp",
            alt: "House - Image 1",
            width: 1600,
            height: 1067,
          },
          {
            src: "/common-areas/house/house-2.webp",
            alt: "House - Image 2",
            width: 1600,
            height: 1067,
          },
          {
            src: "/common-areas/house/house-3.webp",
            alt: "House - Image 3",
            width: 900,
            height: 1600,
          },
          {
            src: "/common-areas/house/house-5.webp",
            alt: "House - Image 5",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/house/house-6.webp",
            alt: "House - Image 6",
            width: 1067,
            height: 1600,
          },
          {
            src: "/common-areas/house/house-7.webp",
            alt: "House - Image 7",
            width: 1600,
            height: 899,
          },
        ],
      },
      {
        slug: "kitchen",

        title: "The Kitchen",

        shortDescription:
          "A warm and beautifully designed kitchen made for slow mornings, shared meals and meaningful moments.",

        description:
          "At D’Lula, the kitchen is more than a functional space — it’s where conversations begin, recipes are shared and everyday moments become memorable. Fully equipped and thoughtfully designed, it invites guests to cook, gather and feel at home.",

        coverImage: "/common-areas/kitchen/kitchen-1.webp",

        imageAlt: "D'Lula kitchen",

        images: [
          {
            src: "/common-areas/kitchen/kitchen-1.webp",
            alt: "Kitchen - Image 1",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/kitchen/kitchen-3.webp",
            alt: "Kitchen - Image 3",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/kitchen/kitchen-4.webp",
            alt: "Kitchen - Image 4",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/kitchen/kitchen-5.webp",
            alt: "Kitchen - Image 5",
            width: 1600,
            height: 899,
          },
          {
            src: "/common-areas/kitchen/kitchen-6.webp",
            alt: "Kitchen - Image 6",
            width: 1600,
            height: 899,
          },
          {
            src: "/common-areas/kitchen/kitchen-7.webp",
            alt: "Kitchen - Image 7",
            width: 1067,
            height: 1600,
          },
          {
            src: "/common-areas/kitchen/kitchen-9.webp",
            alt: "Kitchen - Image 9",
            width: 1548,
            height: 870,
          },
          {
            src: "/common-areas/kitchen/kitchen-10.webp",
            alt: "Kitchen - Image 10",
            width: 1600,
            height: 1067,
          },
          {
            src: "/common-areas/kitchen/kitchen-11.webp",
            alt: "Kitchen - Image 11",
            width: 1600,
            height: 1067,
          },
        ],
      },
      {
        slug: "living-room",

        title: "The Living Room",

        shortDescription:
          "A welcoming space designed for slow moments, meaningful conversations and everyday comfort.",

        description:
          "The Living Room is the heart of connection at D’Lula — a beautifully curated space to relax, unwind and share moments with others. Whether reading, enjoying a coffee or spending time in good company, it’s designed to feel warm, inspiring and effortlessly comfortable.",

        coverImage: "/common-areas/living-room/livingroom-1.webp",

        imageAlt: "D'Lula living room",

        images: [
          {
            src: "/common-areas/living-room/livingroom-1.webp",
            alt: "Living Room - Image 1",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/living-room/livingroom-2.webp",
            alt: "Living Room - Image 2",
            width: 900,
            height: 1600,
          },
          {
            src: "/common-areas/living-room/livingroom-3.webp",
            alt: "Living Room - Image 3",
            width: 1600,
            height: 899,
          },
          {
            src: "/common-areas/living-room/livingroom-4.webp",
            alt: "Living Room - Image 4",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/living-room/livingroom-5.webp",
            alt: "Living Room - Image 5",
            width: 1600,
            height: 900,
          },
          {
            src: "/common-areas/living-room/livingroom-6.webp",
            alt: "Living Room - Image 6",
            width: 1067,
            height: 1600,
          },
          {
            src: "/common-areas/living-room/livingroom-7.webp",
            alt: "Living Room - Image 7",
            width: 1067,
            height: 1600,
          },
        ],
      },
    ],
  },
  commonAreas: {
    title: "Our Common Areas",
    description:
      "Designed with community in mind. D’Lula’s shared spaces create a warm and social atmosphere where guests can work, connect and enjoy the experience of living together.",
    images: [
      {
        src: "/common-areas/coworking/coworking-2.webp",
        width: 1696,
        height: 2528,
      },
      {
        src: "/common-areas/house/house-1.webp",
        width: 5184,
        height: 3456,
      },
      {
        src: "/common-areas/house/house-7.webp",
        width: 6192,
        height: 3480,
      },
      {
        src: "/common-areas/kitchen/kitchen-1.webp",
        width: 2730,
        height: 1536,
      },
      {
        src: "/common-areas/kitchen/kitchen-4.webp",
        width: 2730,
        height: 1536,
      },
      {
        src: "/common-areas/house/house-3.webp",
        alt: "House - Image 3",
        width: 1536,
        height: 2730,
      },
      {
        src: "/common-areas/house/house-5.webp",
        alt: "House - Image 5",
        width: 2089,
        height: 1175,
      },
      {
        src: "/common-areas/living-room/livingroom-1.webp",
        width: 2730,
        height: 1536,
      },
      {
        src: "/common-areas/living-room/livingroom-4.webp",
        width: 2730,
        height: 1536,
      },
      {
        src: "/common-areas/living-room/livingroom-7.webp",
        width: 3456,
        height: 5184,
      },
    ],
    layout: "columns",
    columns: 5,
    spacing: 0,
    padding: 0,
  },
  aboutUs: {
    callToAction: "Are You Thinking About Making Medellín Your Next Home?",
    description:
      "We have an amazing community here in Medellin - a lovely mix of locals, expats & nomads. If you are looking for a safe & welcoming environment where you will find community as soon as you walk through the doors, then D'Lula Coliving is definitely for you!",
    info: [
      {
        title: "Running Club",
        image: "/about-us/running.webp",
        content: [
          {
            title: "Join the Running Club",
            description1: (
              <>
                Running in Medellín is one of the best ways to explore the city
                while staying fit. Our running club welcomes all fitness levels,
                whether you’re a beginner or an experienced runner. Enjoy the
                beautiful parks, scenic routes, and camaraderie as we run
                through the city together.{" "}
                <strong className="font-bold">Come run with us!</strong>
              </>
            ),
            description2: (
              <>
                We organize weekly runs in different parts of the city. Join us
                for a fun and challenging experience, meet new friends, and
                enjoy the outdoors! Whether it’s early morning or evening,
                there’s always a spot for you in the D’Lula Running Club.{" "}
                <strong className="font-bold">
                  Let’s run and have fun together.
                </strong>
              </>
            ),
            callToAction: {
              text: "Join the Running Club",
              link: "https://chat.whatsapp.com/GsywlXkbuuaIYrBTPNm7zE",
            },
            image: "/about-us/running.webp",
          },
        ],
      },

      {
        title: "Hikes",
        image: "/about-us/hikes.webp",
        content: [
          {
            title: "Explore Medellín’s Nature",
            description1: (
              <>
                Medellín is surrounded by breathtaking mountains and beautiful
                hiking trails. Our hiking group explores the city’s nature,
                offering hikes for all levels, from easy walks to more
                challenging hikes. We aim to explore the stunning natural beauty
                of the region while bonding with others in the D’Lula community.{" "}
                <strong className="font-bold">Join us on our next hike!</strong>
              </>
            ),
            description2: (
              <>
                Whether you want to explore lush forests, visit waterfalls, or
                take in panoramic city views, there’s a hike for you. Come
                discover the hidden gems of Medellín and enjoy fresh air,
                stunning views and great company.{" "}
                <strong className="font-bold">Let’s explore together!</strong>
              </>
            ),
            callToAction: {
              text: "Join the Hiking Group",
              link: "https://chat.whatsapp.com/GsWXMOHO6Je6dvCrEvY5Wq",
            },
            image: "/about-us/hikes/trail.jpg",
          },
        ],
      },
      {
        title: "Volunteer",
        image: "/about-us/volunteer.webp",
        content: [
          {
            title: "Volunteer In Medellin",
            description1: (
              <>
                Every Thursday evening, our community comes together to give
                back by volunteering in El Centro, helping provide food and
                support to people experiencing homelessness. It’s a meaningful
                way to connect with the local community, meet incredible people,
                and experience a different side of Medellín.
              </>
            ),
            description2: (
              <>
                We can also help connect you with other volunteer opportunities
                based on your interests and passions.
              </>
            ),
            image: "/about-us/volunteer.webp",
          },
        ],
      },
      {
        title: "Experiences",
        image: "/about-us/experiences.webp",
        content: [
          {
            title: "Unforgettable Medellín Experiences",
            description1: (
              <>
                Looking to make the most of your time in Medellín? We can help
                organise unforgettable experiences including coffee farm tours,
                paragliding adventures, Guatapé day trips, mirador & sunset
                tours, helicopter rides over Guatapé, and so much more.
              </>
            ),
            description2: (
              <>
                Whether you’re chasing adventure, culture, nature, or incredible
                views, there’s always something exciting waiting for you.
              </>
            ),
            image: "/about-us/experiences.webp",
          },
        ],
      },
      {
        title: "Community",
        image: "/about-us/community.webp",
        content: [
          {
            title: "D'Lula’s Community Spirit",
            description1: (
              <>
                At D’Lula, community is at the heart of everything we do. We
                bring together people from all over the world to create a space
                where everyone can feel at home. We offer a variety of
                activities to help you connect with others, whether it’s through
                group dinners, outdoor activities, or just socializing in the
                shared spaces.{" "}
                <strong className="font-bold">Join our community today!</strong>
              </>
            ),
            description2: (
              <>
                From weekly events to spontaneous meet-ups, D’Lula is the place
                to form lasting friendships and create unforgettable memories.
                Whether you’re a digital nomad, a traveler, or just looking for
                a place to belong, we welcome you to our community.{" "}
                <strong className="font-bold">
                  Let’s build this community together!
                </strong>
              </>
            ),
            image: "/about-us/community/spirit.jpg",
          },
        ],
      },
    ],
  },
  pages: {
    mainPage: {
      reviewsTitle: "What Our Guests Say",
    },
    aboutUsPage: {
      banner: {
        title: "About D'Lula",
        subtitle:
          "We created D'Lula for Digital Nomads who are looking for luxury accommodation, community & fun activities in the City of Eternal Spring",
      },
      intro: {
        eyebrow: "Our Essence",
        title: "Are You Thinking About Making Medellín Your Next Home?",
        description:
          "We have an amazing community here in Medellin - a lovely mix of locals, expats & nomads. If you are looking for a safe & welcoming environment where you will find community as soon as you walk through the doors, then D'Lula Coliving is definitely for you!",
      },
      section: {
        eyebrow: "Discover D'Lula",
        title: "A curated way of living",
      },
      finalCta: {
        eyebrow: "D'Lula Coliving",
        title: "Live beautifully, stay comfortably",
        description:
          "A place where thoughtful design, warm hospitality and everyday comfort come together in a refined coliving experience.",
      },
    },
    ourRoomsPage: {
      banner: {
        title: "Our Rooms",
        subtitle: "Luxury Accommodation",
      },
      intro: {
        description:
          "Experience beautifully designed rooms that combine luxury, style & elegance with everything you need for the perfect stay in Medellin. ",
      },
    },
    contactUsPage: {
      banner: {
        title: "Contact D'Lula",
        subtitle:
          "We would love to welcome you into our boutique coliving experience",
      },
      contactSection: {
        eyebrow: "Get in touch",
        title: "Contact Information",
      },
      socialSection: {
        eyebrow: "Social",
        title: "Follow Us",
        followLabel: "Follow us on",
      },
      additionalSection: {
        eyebrow: "D'Lula Experience",
      },
    },
    roomDetailsPage: {
      bannerSubtitle:
        "A boutique stay designed for comfort, elegance and inspired living.",
      intro: {
        eyebrow: "D'Lula Rooms",
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Every detail, beautifully curated",
      },
      features: {
        eyebrow: "Amenities",
        title: "Room Features",
      },
      bookButton: "Book Now",
      notFound: {
        title: "Room not found",
        subtitle: "Please return to our rooms page",
      },
    },
  },
  common: {
    navbar: {
      bookButton: "BOOK NOW",
    },
    footer: {
      aboutTitle: "About us",
      quickLinksTitle: "Quick Links",
      allRightsReserved: "All rights reserved",
    },
  },
};

/**
 * ARRIS ARCHITECTS - Centralized Projects Database
 * Supports dynamic rendering on project-detail.html
 */
const ARRIS_PROJECTS = {
  // 1. Devgn Cinex Bellona (Cinemas, Thane) - Exact match to user reference screenshot
  'devgn-cinex-bellona': {
    id: 'devgn-cinex-bellona',
    title: 'Devgn Cinex Bellona',
    sec: 'SEC. 2019',
    category: 'Cinemas',
    location: 'Thane',
    year: '2026',
    heroImage: 'images/Devgn Cinex Bellona/2.jpeg',
    storyImage: 'images/Devgn Cinex Bellona/1.jpeg',
    description: "Inspired by Art Deco elegance, the interiors of this Devgn Cinemas flagship property in Mumbai celebrates bold geometry, rich symmetry, and metallic accents, layered with retro nostalgia—marquee signage, plush velvet seating, vintage posters, and patterned carpets. This fusion creates an atmosphere where every corner echoes the romance of yesterday's cinema while resonating with today's audience.",
    specs: {
      location: 'Thane',
      scope: 'Cinema, Interiors',
      siteArea: '5 screens, 953 seats',
      status: '2026',
    },
    gallery: [
      {
        "url": "images/Devgn Cinex Bellona/1.jpeg",
        "alt": "Devgn Cinex Bellona Entry"
      },
      {
        "url": "images/Devgn Cinex Bellona/2.jpeg",
        "alt": "Devgn Cinex Bellona Main Concourse"
      },
      {
        "url": "images/Devgn Cinex Bellona/11.jpg",
        "alt": "Devgn Cinex Bellona Ceiling Detail"
      },
      {
        "url": "images/Devgn Cinex Bellona/6.jpg",
        "alt": "Devgn Cinex Bellona Arched Auditorium Hall"
      },
      {
        "url": "images/Devgn Cinex Bellona/9.jpg",
        "alt": "Devgn Cinex Bellona Concession Stand"
      },
      {
        "url": "images/Devgn Cinex Bellona/4.jpeg",
        "alt": "Devgn Cinex Bellona VIP Insignia Lounge"
      }
    ],
    related: ['rajhans-precia-cinemas', 'devgn-cinex-ahmedabad', 'devgn-cinex-elan'],
    cardImage: 'images/Devgn Cinex Bellona/4.jpeg'
  },

  // 2. Rajhans Skylar (Commercial, Surat) - Exact match to user reference screenshot
  'rajhans-skylar': {
    id: 'rajhans-skylar',
    title: 'Rajhans Skylar',
    sec: 'SEC. 2019',
    category: 'Commercial',
    location: 'Surat',
    year: '2026',
    heroImage: 'images/Rajhans Skylar Commercial/Cam_01.jpg',
    storyImage: 'images/Rajhans Skylar Commercial/Interior_Atrium_Cam13.jpg',
    description: "This project brings together contemporary interior spaces with a thoughtfully designed landscape that complements the overall built environment. Our scope focused on the atrium, lobby spaces, gym, café and other key interior areas, creating cohesive and inviting spaces through considered materials and detailing. The landscape integrates lush planting with carefully placed sculptural elements that soften the effect of the built form, creating a more welcoming and engaging experience around the building. Together, the interiors and landscape create a refined environment that balances functionality, visual identity and a sense of openness.",
    specs: {
      location: 'Surat',
      scope: 'Commercial, Interiors, Landscape, F&B',
      siteArea: '1,32,720, sq.ft',
      status: '2026',
    },
    gallery: [
      {
        "url": "images/Rajhans Skylar Commercial/Cam_01.jpg",
        "alt": "Rajhans Skylar Iconic Elevation"
      },
      {
        "url": "images/Rajhans Skylar Commercial/Interior_Atrium_Cam13.jpg",
        "alt": "Rajhans Skylar Central Atrium"
      },
      {
        "url": "images/Rajhans Skylar Commercial/Interior_Reception_Cam04.jpg",
        "alt": "Rajhans Skylar Grand Reception Lobby"
      },
      {
        "url": "images/Rajhans Skylar Commercial/Cam_03.jpg",
        "alt": "Rajhans Skylar Landscaped Commercial Promenade"
      },
      {
        "url": "images/Rajhans Skylar Commercial/Cam_04.jpg",
        "alt": "Rajhans Skylar Modern Facade"
      },
      {
        "url": "images/Rajhans Skylar Commercial/Cam_05.jpg",
        "alt": "Rajhans Skylar Architectural Detail"
      }
    ],
    related: ['times-tower-new', 'rajhans-precia', 'rajhans-precia-cinemas'],
    cardImage: 'images/Rajhans Skylar Commercial/Cam_01.jpg'
  },

  // 3. DPS Hazaribaug (Schools, Hazaribaug)
  'dps-hazaribaug': {
    id: 'dps-hazaribaug',
    title: 'DPS Hazaribaug',
    sec: 'SEC. 2026',
    category: 'Schools',
    location: 'Hazaribaug',
    year: '2026',
    heroImage: 'images/homepage/project 2.jpg.jpeg',
    storyImage: 'images/DPS Hazaribaug/_U2A2008.jpg',
    description: "DPS Hazaribaug presents a strong architectural presence defined by its rhythmic facade and bold vertical frames. The building overlooks a generous sports ground, creating a clear visual connection between the academic spaces and the active campus landscape. Its formal geometry and restrained material palette lend the campus a sense of timelessness, authority, and institutional character.",
    specs: {
      location: 'Hazaribaug',
      scope: 'Architecture, School, Interiors',
      siteArea: '1,16,975 sq.ft',
      status: '2026',
    },
    gallery: [
      {
        "url": "images/DPS Hazaribaug/_U2A2047.jpg",
        "alt": "DPS Hazaribaug Main Academic Block"
      },
      {
        "url": "images/DPS Hazaribaug/_U2A2008.jpg",
        "alt": "DPS Hazaribaug Central Courtyard & Shaded Pavilions"
      },
      {
        "url": "images/DPS Hazaribaug/_U2A2062.jpg",
        "alt": "DPS Hazaribaug Campus Learning Wings"
      },
      {
        "url": "images/DPS Hazaribaug/_U2A2065.jpg",
        "alt": "DPS Hazaribaug Institutional Entrance & Lawn"
      },
      {
        "url": "images/DPS Hazaribaug/_U2A2154.jpg",
        "alt": "DPS Hazaribaug Covered Walkway"
      },
      {
        "url": "images/DPS Hazaribaug/_U2A2200.jpg",
        "alt": "DPS Hazaribaug Campus Overview"
      }
    ],
    related: ['ahs-hazaribaug', 'ib-suncity', 'times-tower-new'],
    cardImage: 'images/Rectangle 62.png'
  },

  // 4. Aldona Villa (Residential, Goa)
  'aldona-villa': {
    id: 'aldona-villa',
    title: 'Aldona Villa',
    sec: 'SEC. 2024',
    category: 'Residential',
    location: 'Aldona, Goa',
    year: 'ongoing',
    heroImage: 'images/Aldona Villa/1_8.jpg',
    storyImage: 'images/Aldona Villa/10 FINAL_2.jpg',
    description: "The villa, designed for a nuclear urban family, offers a serene escape in Aldona, a picturesque village along the Mapusa river, renowned for its tranquility and lush landscapes. The design harmonizes with the natural environment, minimizing impact on the site while embracing the site's natural contours. A central concept of fluidity and continuity guides the layout, where spaces flow seamlessly, eliminating corners and walls to encourage movement and interaction. Open courtyards and green pockets foster a connection between the indoors and nature, enhancing the overall aesthetic while creating a nurturing, communal atmosphere.",
    specs: {
      location: 'Aldona, Goa',
      scope: 'Architecture, Residential, Interiors',
      siteArea: '8180 sq.ft',
      status: 'Ongoing',
    },
    gallery: [
      {
        "url": "images/Aldona Villa/1_8.jpg",
        "alt": "Aldona Villa Riverside Elevation"
      },
      {
        "url": "images/Aldona Villa/4_5.jpg",
        "alt": "Aldona Villa Architecture & Landscape",
        "position": "left center"
      },
      {
        "url": "images/Aldona Villa/10 FINAL_2.jpg",
        "alt": "Aldona Villa Pool View"
      },
      {
        "url": "images/Aldona Villa/11_7.jpg",
        "alt": "Aldona Villa Exterior Evening"
      },
      {
        "url": "images/Aldona Villa/LR-1_7.jpg",
        "alt": "Aldona Villa Living Room"
      },
      {
        "url": "images/Aldona Villa/BED-1-2_3.jpg",
        "alt": "Aldona Villa Master Bedroom"
      }
    ],
    related: ['bottle-house', 'hazaribaug-bungalow', 'dps-hazaribaug'],
    cardImage: 'images/projects/aldona_villa.png'
  },

  // 5. Times Tower New (Commercial, Mumbai)
  'times-tower-new': {
    id: 'times-tower-new',
    title: 'Times Tower New',
    sec: 'SEC. 2019',
    category: 'Commercial',
    location: 'Mumbai',
    year: '2019',
    heroImage: 'images/Times Tower New/E_PHX2662_LR.jpg',
    storyImage: 'images/Times Tower New/E_PHX2667_LR.jpg',
    description: "Times Tower New is a contemporary commercial office interior designed to create a refined and dynamic workplace environment. The design brings together warm wood finishes, glass partitions, textured surfaces and integrated lighting to balance a formal corporate character with comfortable collaborative spaces. Carefully curated furniture, artwork, and colour accents add warmth and identity across the boardrooms, lounges, reception and meeting areas. The result is a cohesive workplace that combines functionality and sophistication.",
    specs: {
      location: 'Mumbai',
      scope: 'Commercial, Interiors',
      siteArea: '9800 sq.ft',
      status: '2019',
    },
    gallery: [
      {
        "url": "images/Times Tower New/E_PHX2574_LR.jpg",
        "alt": "Times Tower New Executive Boardroom"
      },
      {
        "url": "images/Times Tower New/E_PHX2740_LR.jpg",
        "alt": "Times Tower New Open Lounge with Copper Ductwork"
      },
      {
        "url": "images/Times Tower New/E_PHX2712_LR.jpg",
        "alt": "Times Tower New Executive Cabin"
      },
      {
        "url": "images/Times Tower New/E_PHX2729_LR.jpg",
        "alt": "Times Tower New Director's Lounge"
      },
      {
        "url": "images/Times Tower New/E_PHX2662_LR.jpg",
        "alt": "Times Tower New Corporate Office"
      },
      {
        "url": "images/Times Tower New/E_PHX2667_LR.jpg",
        "alt": "Times Tower New Modern Workspace"
      }
    ],
    related: ['rajhans-skylar', 'rajhans-precia', 'rajhans-precia-cinemas'],
    cardImage: 'images/Times Tower New/E_PHX2662_LR.jpg'
  },

  // 6. Devgn Cinex Ahmedabad (Cinemas, Ahmedabad)
  'devgn-cinex-ahmedabad': {
    id: 'devgn-cinex-ahmedabad',
    title: 'Devgn Cinex Ahmedabad',
    sec: 'SEC. 2022',
    category: 'Cinemas',
    location: 'Ahmedabad',
    year: '2022',
    heroImage: 'images/Devgn Cinex Ahmedabad/01.jpg',
    storyImage: 'images/Devgn Cinex Ahmedabad/02.jpg',
    description: "Named after actor Ajay Devgn, the owner, this cinema is one of the most premium and luxurious properties of the 'Devgn Cinema' chain with state-of-the-art features and amenities for Ahmedabad's movie-goers to enjoy. This multiplex is filled with comfort, luxury, and a homely feeling all of which is enveloped by filmy, 'Bollywood'-inspired interiors.",
    specs: {
      location: 'Ahmedabad',
      scope: 'Cinema, Interiors',
      siteArea: '4 screens, 719 seats',
      status: '2022',
    },
    gallery: [
      {
        "url": "images/Devgn Cinex Ahmedabad/01.jpg",
        "alt": "Devgn Cinex Ahmedabad Grand Foyer"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/02.jpg",
        "alt": "Devgn Cinex Ahmedabad Concourse Lounge"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/06.jpg",
        "alt": "Devgn Cinex Ahmedabad Auditorium Seating"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/09.jpg",
        "alt": "Devgn Cinex Ahmedabad VIP Lounge"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/17.jpg",
        "alt": "Devgn Cinex Ahmedabad Cinema Experience"
      },
      {
        "url": "images/Devgn Cinex Ahmedabad/21.jpg",
        "alt": "Devgn Cinex Ahmedabad Premium Seating"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-elan', 'rajhans-precia-cinemas'],
    cardImage: 'images/Devgn Cinex Ahmedabad/01.jpg'
  },

  // 7. IB Suncity (Schools, Gurugram)
  'ib-suncity': {
    id: 'ib-suncity',
    title: 'IB Suncity',
    sec: 'SEC. 2020',
    category: 'Schools',
    location: 'Gurugram',
    year: '2020',
    heroImage: 'images/IB Suncity/Suncity School-5.jpg',
    storyImage: 'images/IB Suncity/Suncity School-13.jpg',
    description: "Instead of a traditional classroom structure, coming from an industrial way of thinking about schools, the space was organized so as to have a positive impact on how you behave, move around and learn. A learning journey is thus created, from early years to high school, utilizing the IB resources and supporting the school's vision for team-teaching, flexible learning groups and individualized timetables. Ample space around each student also complies with the IB rules unlike shared desk seating.",
    specs: {
      location: 'Gurugram',
      scope: 'Architecture, School, Interiors',
      siteArea: '15,500 sq.ft',
      status: '2020',
    },
    gallery: [
      {
        "url": "images/IB Suncity/Suncity School-5.jpg",
        "alt": "IB Suncity Campus Exterior"
      },
      {
        "url": "images/IB Suncity/Suncity School-13.jpg",
        "alt": "IB Suncity Main Academic Courtyard"
      },
      {
        "url": "images/IB Suncity/Suncity School-19.jpg",
        "alt": "IB Suncity Learning Spaces"
      },
      {
        "url": "images/IB Suncity/Suncity School-7.jpg",
        "alt": "IB Suncity Sports & Outdoor Grounds"
      },
      {
        "url": "images/IB Suncity/Suncity School-1.jpg",
        "alt": "IB Suncity Modern Facade"
      },
      {
        "url": "images/IB Suncity/Suncity School-10.jpg",
        "alt": "IB Suncity Educational Wing"
      }
    ],
    related: ['dps-hazaribaug', 'ahs-hazaribaug', 'times-tower-new'],
    cardImage: 'images/projects/ib_suncity.png'
  },

  // 8. AHS Hazaribaug (Schools, Hazaribaug)
  'ahs-hazaribaug': {
    id: 'ahs-hazaribaug',
    title: 'AHS Hazaribaug',
    sec: 'SEC. 2025',
    category: 'Schools',
    location: 'Hazaribaug',
    year: 'ongoing',
    heroImage: 'images/AHS Hazaribaug/DSC06724.JPG.jpg',
    heroPosition: 'top',
    storyImage: 'images/AHS Hazaribaug/DSC06574.jpg',
    description: "The design for this school is based off the 7 senses supporting a child's sensory development leading to an inter and intra-personal growth. The solid standing entrance frames are set against subdued curved forms in the landscape. The intermingling of the 3 solid frames carves out a combination of indoor and outdoor spaces in between them. These symbolize the journey of a child amidst the education system, eventually coming out as an extremely evolved version of themselves.",
    specs: {
      location: 'Hazaribaug',
      scope: 'Architecture, School, Interiors',
      siteArea: '1,80,000 sq.ft',
      status: 'Ongoing',
    },
    gallery: [
      {
        "url": "images/AHS Hazaribaug/IMG_20190412_104900.jpg",
        "alt": "AHS Hazaribaug Campus Overview"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06574.jpg",
        "alt": "AHS Hazaribaug Main Academic Block"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06712.jpg",
        "alt": "AHS Hazaribaug Academic Building"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06622.jpg",
        "alt": "AHS Hazaribaug School Courtyard"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06691.jpg",
        "alt": "AHS Hazaribaug Campus Pathway"
      },
      {
        "url": "images/AHS Hazaribaug/DSC06591.jpg",
        "alt": "AHS Hazaribaug Institutional Facade"
      }
    ],
    related: ['dps-hazaribaug', 'ib-suncity', 'times-tower-new'],
    cardImage: 'images/AHS Hazaribaug/DSC06724.JPG.jpg'
  },

  // 9. LA Trichy (Cinemas, Trichy)
  'la-trichy': {
    id: 'la-trichy',
    title: 'LA Trichy',
    sec: 'SEC. 2026',
    category: 'Cinemas',
    location: 'Trichy',
    year: '2026',
    heroImage: 'images/LA Trichy/1.jpg',
    storyImage: 'images/LA Trichy/2.jpg',
    description: "The interior design represents flow through both physical forms and movements through the space. The seamless transition between the ancillary spaces and theatres is brought to life through meticulously designed curves, versatile use of marble and contrasting materials for a dynamic visual effect.",
    specs: {
      location: 'Trichy',
      scope: 'Cinema, Interiors',
      siteArea: '6 screens, 1530 seats',
      status: '2026',
    },
    gallery: [
      {
        "url": "images/LA Trichy/1.jpg",
        "alt": "LA Trichy Multiplex Entrance"
      },
      {
        "url": "images/LA Trichy/3.jpg",
        "alt": "LA Trichy Screen Auditorium Hall"
      },
      {
        "url": "images/LA Trichy/4.jpg",
        "alt": "LA Trichy Luxury Concourse"
      },
      {
        "url": "images/LA Trichy/5.jpg",
        "alt": "LA Trichy VIP Cinema Lounge"
      },
      {
        "url": "images/LA Trichy/6.jpg",
        "alt": "LA Trichy Premium Lounge"
      },
      {
        "url": "images/LA Trichy/7.jpg",
        "alt": "LA Trichy Modern Architecture"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-ahmedabad', 'devgn-cinex-elan'],
    cardImage: 'images/LA Trichy/1.jpg'
  },

  // 10. Bottle House (Residential, Raipur)
  'bottle-house': {
    id: 'bottle-house',
    title: 'Bottle House',
    sec: 'SEC. 2025',
    category: 'Residential',
    location: 'Raipur',
    year: '2025',
    heroImage: 'images/Bottle house/2.jpg',
    storyImage: 'images/Bottle house/BOTTLE HOUSE 3.jpg',
    description: "This contemporary residence is a harmonious blend of modern architectural expression and luxury. Defined by geometric forms, a rich interplay of stone, warm wood, and expansive glazing, the design creates an identity without imposing on the existing surroundings. Thoughtfully integrated courtyards, landscaped pockets, and seamless indoor-outdoor transitions bring nature into the everyday living experience. A 'bottle' as a central concept was an interesting guideline owing to the family's ancestral relationship with the bottle manufacturing business.",
    specs: {
      location: 'Raipur, Chhattisgarh',
      scope: 'Architecture, Residential, Interiors',
      siteArea: '4000 sq.ft',
      status: '2025',
    },
    gallery: [
      {
        "url": "images/Bottle house/1.jpg",
        "alt": "Bottle House Iconic Facade"
      },
      {
        "url": "images/Bottle house/2.jpg",
        "alt": "Bottle House Modern Architecture"
      },
      {
        "url": "images/Bottle house/BOTTLE HOUSE 3.jpg",
        "alt": "Bottle House Curvilinear Design"
      },
      {
        "url": "images/Bottle house/D5_Scene 11_20240216_153737.jpg",
        "alt": "Bottle House Garden View"
      },
      {
        "url": "images/Bottle house/D5_Scene 12_20240216_153922.jpg",
        "alt": "Bottle House Interior Pavilion"
      },
      {
        "url": "images/Bottle house/D5_Scene 13_20240216_155330.jpg",
        "alt": "Bottle House Night View"
      }
    ],
    related: ['aldona-villa', 'hazaribaug-bungalow', 'dps-hazaribaug'],
    cardImage: 'images/Bottle house/2.jpg'
  },

  // 11. Hazaribaug Bungalow (Residential, Hazaribaug)
  'hazaribaug-bungalow': {
    id: 'hazaribaug-bungalow',
    title: 'Hazaribaug Bungalow',
    sec: 'SEC. 2024',
    category: 'Residential',
    location: 'Hazaribaug',
    year: 'ongoing',
    heroImage: 'images/Hazaribaug Bungalow/Scene 1_1.jpg',
    storyImage: 'images/Hazaribaug Bungalow/FORMAL LIVING ROOM.jpg',
    description: "Rooted in the serene landscape of Hazaribagh, this residence is envisioned as a contemporary sanctuary that seamlessly blends modern architecture with the tranquility of nature. Defined by clean geometric forms, expansive glazing and a warm palette of natural materials, the design creates a dialogue between indoor and outdoor living. Thoughtfully curated interiors, landscaped courtyards and intimate gathering spaces bring together understated luxury and everyday comfort. The result is a home that celebrates the art of refined living.",
    specs: {
      location: 'Hazaribaug',
      scope: 'Architecture, Residential, Interiors',
      siteArea: '32,720 sq.ft',
      status: 'Ongoing',
    },
    gallery: [
      {
        "url": "images/Hazaribaug Bungalow/Scene 1_1.jpg",
        "alt": "Hazaribaug Bungalow Front Elevation"
      },
      {
        "url": "images/Hazaribaug Bungalow/FORMAL LIVING ROOM.jpg",
        "alt": "Hazaribaug Bungalow Formal Living Room"
      },
      {
        "url": "images/Hazaribaug Bungalow/DINING.jpg",
        "alt": "Hazaribaug Bungalow Dining Lounge"
      },
      {
        "url": "images/Hazaribaug Bungalow/CANOPY.jpg",
        "alt": "Hazaribaug Bungalow Garden Canopy"
      },
      {
        "url": "images/Hazaribaug Bungalow/ENTRY 1.jpg",
        "alt": "Hazaribaug Bungalow Entrance Gateway"
      },
      {
        "url": "images/Hazaribaug Bungalow/GATE 2.jpg",
        "alt": "Hazaribaug Bungalow Perimeter Wall"
      }
    ],
    related: ['aldona-villa', 'bottle-house', 'dps-hazaribaug'],
    cardImage: 'images/projects/hazaribaug_bungalow.png'
  },

  // 12. Devgn Cinex Elan (Cinemas, Gurugram)
  'devgn-cinex-elan': {
    id: 'devgn-cinex-elan',
    title: 'Devgn Cinex Elan',
    sec: 'SEC. 2024',
    category: 'Cinemas',
    location: 'Gurugram',
    year: '2024',
    heroImage: 'images/Devgn Cinex Elan/02.jpg',
    storyImage: 'images/Devgn Cinex Elan/03.jpg',
    description: "This cinema experience is a delightful fusion of luxury and community connection which embraces the drama and grandeur of storytelling. The narrative here balances the cutting-edge modernity of a global metropolis and the deep cultural threads that tie it back to India's cinematic tradition.",
    specs: {
      location: 'Gurugram',
      scope: 'Cinema, Interiors',
      siteArea: '5 screens, 889 seats',
      status: '2024',
    },
    gallery: [
      {
        "url": "images/Devgn Cinex Elan/02.jpg",
        "alt": "Devgn Cinex Elan Multiplex Concourse"
      },
      {
        "url": "images/Devgn Cinex Elan/03.jpg",
        "alt": "Devgn Cinex Elan Boutique Cinema Entrance"
      },
      {
        "url": "images/Devgn Cinex Elan/07.jpg",
        "alt": "Devgn Cinex Elan Auditorium"
      },
      {
        "url": "images/Devgn Cinex Elan/08.jpg",
        "alt": "Devgn Cinex Elan Ticket Lounge"
      },
      {
        "url": "images/Devgn Cinex Elan/10.jpg",
        "alt": "Devgn Cinex Elan Concession Area"
      },
      {
        "url": "images/Devgn Cinex Elan/11.jpg",
        "alt": "Devgn Cinex Elan VIP Seating"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-ahmedabad', 'rajhans-precia-cinemas'],
    cardImage: 'images/Devgn Cinex Elan/02.jpg'
  },

  // 13. Rajhans Precia (Commercial, Surat)
  'rajhans-precia': {
    id: 'rajhans-precia',
    title: 'Rajhans Precia',
    sec: 'SEC. 2024',
    category: 'Commercial',
    location: 'Surat',
    year: '2024',
    heroImage: 'images/Rajhans Precia/DJI_20250120213924_0431_D.jpg',
    storyImage: 'images/Rajhans Precia/KZP00127.jpg',
    description: "Conceived as a landmark entertainment destination, this 14-screen multiplex brings together contemporary architecture and state-of-the-art amenities to redefine the cinematic experience in Surat. The design strikes a balance between bold architectural expression and refined interiors, creating a seamless journey from arrival to the big screen. Reflecting Surat's evolution into a thriving urban and commercial hub, the project embodies the city's growing appetite for world-class leisure and lifestyle destinations.",
    specs: {
      location: 'Surat',
      scope: 'Architecture, Commercial, Cinema, Interiors',
      siteArea: '3,00,000 sq.ft',
      status: '2024',
    },
    gallery: [
      {
        "url": "images/Rajhans Precia/DJI_20250120213924_0431_D.jpg",
        "alt": "Rajhans Precia Aerial Night View"
      },
      {
        "url": "images/Rajhans Precia/KZP00127.jpg",
        "alt": "Rajhans Precia Concession Lounge"
      },
      {
        "url": "images/Rajhans Precia/KZP00285.jpg",
        "alt": "Rajhans Precia Cinema Lobby Architecture"
      },
      {
        "url": "images/Rajhans Precia/KZP00350.jpg",
        "alt": "Rajhans Precia Atrium Promenade"
      },
      {
        "url": "images/Rajhans Precia/KZP00183.jpg",
        "alt": "Rajhans Precia Modern Interiors"
      },
      {
        "url": "images/Rajhans Precia/KZP00451.jpg",
        "alt": "Rajhans Precia Premium Retail"
      }
    ],
    related: ['times-tower-new', 'rajhans-skylar', 'rajhans-precia-cinemas'],
    cardImage: 'images/Rajhans Precia/DJI_20250120213924_0431_D.jpg'
  },
  // Rajhans Precia (Cinemas, Surat) - Dedicated Cinema Details Page
  'rajhans-precia-cinemas': {
    id: 'rajhans-precia-cinemas',
    title: 'Rajhans Precia',
    sec: 'SEC. 2024',
    category: 'Cinemas',
    location: 'Surat',
    year: '2024',
    heroImage: 'images/Rajhans Precia/KZP00451.jpg',
    storyImage: 'images/Rajhans Precia/KZP00409.jpg',
    description: "Inspired by Art Deco elegance, the interior of this Devgn Cinemas flagship property in Mumbai combines bold geometry, rich symmetry, and metallic accents, layered with cinematic glow features signage, plush velvet seating, vintage posters, and patterned carpets. The space creates an atmosphere where every corner echoes the romance of yesterday's cinema while resonating with today's audience.",
    specs: {
      location: 'Surat',
      scope: 'Cinemas, Interiors',
      siteArea: '32,000 sqft',
      status: '2024',
    },
    gallery: [
      {
        "url": "images/Rajhans Precia/KZP00518.jpg",
        "alt": "Rajhans Precia Cinema Auditorium"
      },
      {
        "url": "images/Rajhans Precia/KZP00183.jpg",
        "alt": "Rajhans Precia Modern Ceiling Architecture"
      },
      {
        "url": "images/Rajhans Precia/KZP00127.jpg",
        "alt": "Rajhans Precia Concession & Ticket Lounge"
      },
      {
        "url": "images/Rajhans Precia/KZP00285.jpg",
        "alt": "Rajhans Precia Cinema Concourse"
      },
      {
        "url": "images/Rajhans Precia/KZP00350.jpg",
        "alt": "Rajhans Precia Atrium Promenade"
      },
      {
        "url": "images/Rajhans Precia/KZP00409.jpg",
        "alt": "Rajhans Precia Premium Seating"
      }
    ],
    related: ['devgn-cinex-bellona', 'devgn-cinex-ahmedabad', 'devgn-cinex-elan'],
    cardImage: 'images/Rajhans Precia/KZP00451.jpg'
  },

};

// Global / Module export support
if (typeof window !== 'undefined') {
  window.ARRIS_PROJECTS = ARRIS_PROJECTS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ARRIS_PROJECTS;
}

const projectsData = [
  {
    id: "hotelier-neptun",
    tag: "institutional",
    title: "Reabilitare obiectiv Neptun",
    description:
      "Soluții proiectate pentru controlul accesului, supraveghere video, rețea date-voce, detecție la efracție și sonorizare, oferind siguranță, confort și securitate în mediul hotelier.",
    category: "Hotelier",
    author: {
      name: "Echipa Bransha",
    },
    date: "15 mai 2025",
    readTime: "3 min",
    coverImage: "/hotelier.webp",
    sections: [
      {
        id: "detalii-proiect",
        title: "Soluții implementate",
        content:
          "Proiectul de reabilitare a obiectivului Neptun a inclus soluții complete pentru controlul accesului, supraveghere video, rețea date-voce, detecție la efracție și sonorizare, oferind un mediu sigur și confortabil pentru clienți.",
      },
      {
        id: "valori",
        title: "Valori principale",
        content: "• SIGURANȚĂ • CONFORT • SECURITATE",
      },
    ],
  },
  {
    id: "industrial-exonia",
    tag: "industrial",
    title: "Hala Exonia",
    description:
      "Instalații electrice complete pentru siguranță, control și confort: iluminat, prize, efracție, acces, incendiu și supraveghere video.",
    category: "Industrial",
    author: {
      name: "Echipa Bransha",
    },
    date: "15 mai 2025",
    readTime: "3 min",
    coverImage: "/industrial.webp",
    sections: [
      {
        id: "instalatii",
        title: "Instalații electrice complete",
        content:
          "Sistemele au fost proiectate pentru a asigura eficiență maximă, protecție împotriva incidentelor și control inteligent al infrastructurii industriale.",
      },
      {
        id: "valori",
        title: "Valori principale",
        content: "• SECURITATE • EFICIENȚĂ • SIGURANȚĂ",
      },
    ],
  },
  {
    id: "educational-colegiul-eminescu",
    tag: "educational",
    title: "Reabilitare Energetică – Colegiul Național Mihai Eminescu",
    description:
      "Instalații electrice, sanitare și termice proiectate pentru confort, funcționalitate și un mediu modern de învățare.",
    category: "Educational",
    author: {
      name: "Echipa Bransha",
    },
    date: "15 mai 2025",
    readTime: "3 min",
    coverImage: "/educational.webp",
    sections: [
      {
        id: "modernizare",
        title: "Soluții pentru educație modernă",
        content:
          "Proiectul a integrat sisteme eficiente energetic și echipamente moderne, oferind un mediu confortabil și sigur pentru elevi și cadre didactice.",
      },
      {
        id: "valori",
        title: "Valori principale",
        content: "• EFICIENȚĂ • CONFORT • SIGURANȚĂ",
      },
    ],
  },
  {
    id: "spitalicesc-sfanta-maria",
    tag: "spitalicesc",
    title:
      "Extindere și dotare UPU - Spitalul de Urgență pentru Copii Sfânta Maria Iași",
    description:
      "Instalații electrice (iluminat, prize), control acces, date-voce, detecție incendiu, supraveghere video și sonorizare pentru siguranță și eficiență maximă.",
    category: "Spitalicesc",
    author: {
      name: "Echipa Bransha",
    },
    date: "15 mai 2025",
    readTime: "3 min",
    coverImage: "/spitalicesc.webp",
    sections: [
      {
        id: "dotari",
        title: "Sisteme integrate pentru sănătate",
        content:
          "Proiectul a vizat creșterea eficienței operaționale și siguranței pacienților prin soluții electrice avansate și infrastructură de control acces, supraveghere și comunicare.",
      },
      {
        id: "valori",
        title: "Valori principale",
        content: "• EFICIENȚĂ • SECURITATE • SIGURANȚĂ",
      },
    ],
  },

  // {
  //   id: "automatizare-inteligenta",
  //   tag: "test",
  //   title: "Automatizarea inteligentă a clădirilor: tendințe actuale",
  //   description:
  //     "Descoperă cum soluțiile Bransha transformă spațiile rezidențiale și comerciale în medii inteligente, eficiente și sigure.",
  //   category: "Smart Building",
  //   author: {
  //     name: "Echipa Bransha",
  //
  //   },
  //   date: "15 mai 2025",
  //   readTime: "4 min",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   sections: [
  //     {
  //       id: "introducere-problema",
  //       title: "Problema securității în integrarea IoT",
  //       content:
  //         "Într-un studiu realizat despre IoT (Internet Of Things) și felul de integrare al acestuia în Casele Inteligente, cea mai mare problemă pe care au ridicat-o dezvoltatorii o reprezintă securitatea.",
  //     },
  //     {
  //       id: "studiu-2015",
  //       title: "Studiul Essence și Strategy Analytics (2015)",
  //       content:
  //         "În primele 6 luni din 2015, Essence împreună cu Strategy Analytics, o firmă de cercetare de vârf din acest domeniu, a realizat un studiu pe un eșantion mare de clienți pentru a afla preferințele și practicile acestora pentru domeniul caselor inteligente.",
  //     },
  //   ],
  // },
  // {
  //   id: "consultanta-it",
  //   tag: "test",
  //   title: "Consultanță IT pentru afaceri moderne",
  //   description:
  //     "Află cum BTG România oferă servicii de consultanță IT și transformare digitală pentru companiile din diverse industrii.",
  //   category: "Consultanță IT",
  //   author: {
  //     name: "Echipa BTG România",
  //
  //   },
  //   date: "10 mai 2025",
  //   readTime: "5 min",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   sections: [
  //     {
  //       id: "introducere-problema",
  //       title: "Problema securității în integrarea IoT",
  //       content:
  //         "Într-un studiu realizat despre IoT (Internet Of Things) și felul de integrare al acestuia în Casele Inteligente, cea mai mare problemă pe care au ridicat-o dezvoltatorii o reprezintă securitatea.",
  //     },
  //     {
  //       id: "studiu-2015",
  //       title: "Studiul Essence și Strategy Analytics (2015)",
  //       content:
  //         "În primele 6 luni din 2015, Essence împreună cu Strategy Analytics, o firmă de cercetare de vârf din acest domeniu, a realizat un studiu pe un eșantion mare de clienți pentru a afla preferințele și practicile acestora pentru domeniul caselor inteligente.",
  //     },
  //   ],
  // },
  // {
  //   id: "spatii-inteligente",
  //   tag: "test",
  //   title: "Spații inteligente pentru un viitor sustenabil",
  //   description:
  //     "Bransha dezvoltă soluții inovatoare pentru clădiri inteligente, contribuind la un mediu mai sustenabil și confortabil.",
  //   category: "Inovație",
  //   author: {
  //     name: "Echipa Bransha",
  //
  //   },
  //   date: "5 mai 2025",
  //   readTime: "6 min",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?q=80&w=3306&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   sections: [
  //     {
  //       id: "introducere-problema",
  //       title: "Problema securității în integrarea IoT",
  //       content:
  //         "Într-un studiu realizat despre IoT (Internet Of Things) și felul de integrare al acestuia în Casele Inteligente, cea mai mare problemă pe care au ridicat-o dezvoltatorii o reprezintă securitatea.",
  //     },
  //     {
  //       id: "studiu-2015",
  //       title: "Studiul Essence și Strategy Analytics (2015)",
  //       content:
  //         "În primele 6 luni din 2015, Essence împreună cu Strategy Analytics, o firmă de cercetare de vârf din acest domeniu, a realizat un studiu pe un eșantion mare de clienți pentru a afla preferințele și practicile acestora pentru domeniul caselor inteligente.",
  //     },
  //   ],
  // },
  // {
  //   id: "strategii-de-marketing",
  //   tag: "test",
  //   title: "Strategii de marketing pentru era digitală",
  //   description:
  //     "BTG România oferă consultanță în marketing strategic, ajutând afacerile să se adapteze la noile tendințe digitale.",
  //   category: "Marketing",
  //   author: {
  //     name: "Echipa BTG România",
  //
  //   },
  //   date: "28 aprilie 2025",
  //   readTime: "7 min",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   sections: [
  //     {
  //       id: "introducere-problema",
  //       title: "Problema securității în integrarea IoT",
  //       content:
  //         "Într-un studiu realizat despre IoT (Internet Of Things) și felul de integrare al acestuia în Casele Inteligente, cea mai mare problemă pe care au ridicat-o dezvoltatorii o reprezintă securitatea.",
  //     },
  //     {
  //       id: "studiu-2015",
  //       title: "Studiul Essence și Strategy Analytics (2015)",
  //       content:
  //         "În primele 6 luni din 2015, Essence împreună cu Strategy Analytics, o firmă de cercetare de vârf din acest domeniu, a realizat un studiu pe un eșantion mare de clienți pentru a afla preferințele și practicile acestora pentru domeniul caselor inteligente.",
  //     },
  //   ],
  // },
  // {
  //   id: "integrarea-sistemelor",
  //   tag: "test",
  //   title: "Integrarea sistemelor HVAC în clădiri inteligente",
  //   description:
  //     "Află cum Bransha integrează sisteme HVAC eficiente în proiectele de clădiri inteligente pentru un confort sporit.",
  //   category: "Tehnologie",
  //   author: {
  //     name: "Echipa Bransha",
  //
  //   },
  //   date: "22 aprilie 2025",
  //   readTime: "5 min",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=3746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   sections: [
  //     {
  //       id: "introducere-problema",
  //       title: "Problema securității în integrarea IoT",
  //       content:
  //         "Într-un studiu realizat despre IoT (Internet Of Things) și felul de integrare al acestuia în Casele Inteligente, cea mai mare problemă pe care au ridicat-o dezvoltatorii o reprezintă securitatea.",
  //     },
  //     {
  //       id: "studiu-2015",
  //       title: "Studiul Essence și Strategy Analytics (2015)",
  //       content:
  //         "În primele 6 luni din 2015, Essence împreună cu Strategy Analytics, o firmă de cercetare de vârf din acest domeniu, a realizat un studiu pe un eșantion mare de clienți pentru a afla preferințele și practicile acestora pentru domeniul caselor inteligente.",
  //     },
  //   ],
  // },
  // {
  //   id: "dezvoltarea-aplicatiilor",
  //   tag: "test",
  //   title: "Dezvoltarea aplicațiilor mobile pentru clădiri inteligente",
  //   description:
  //     "BTG România dezvoltă aplicații mobile care permit controlul facil al funcțiilor din clădirile inteligente.",
  //   category: "Dezvoltare",
  //   author: {
  //     name: "Echipa BTG România",
  //
  //   },
  //   date: "15 aprilie 2025",
  //   readTime: "6 min",
  //   coverImage:
  //     "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?q=80&w=3593&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   sections: [
  //     {
  //       id: "introducere-problema",
  //       title: "Problema securității în integrarea IoT",
  //       content:
  //         "Într-un studiu realizat despre IoT (Internet Of Things) și felul de integrare al acestuia în Casele Inteligente, cea mai mare problemă pe care au ridicat-o dezvoltatorii o reprezintă securitatea.",
  //     },
  //     {
  //       id: "studiu-2015",
  //       title: "Studiul Essence și Strategy Analytics (2015)",
  //       content:
  //         "În primele 6 luni din 2015, Essence împreună cu Strategy Analytics, o firmă de cercetare de vârf din acest domeniu, a realizat un studiu pe un eșantion mare de clienți pentru a afla preferințele și practicile acestora pentru domeniul caselor inteligente.",
  //     },
  //   ],
  // },
];

export default projectsData;

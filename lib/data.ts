  // Define types for better type safety
  export type Player = {
    number: string;
    name: string;
    position: string;
    image?: string;
    year?: string;
  }

  export type Roster = {
    varsity: Player[];
    jv: Player[];
    froshSoph: Player[];
  }

  export type Game = {
    opponent: string;
    date: string;
    time: string;
    location: string;
    isHome: boolean;
    status: "Win" | "Loss" | "Tie" | "Upcoming" | "Canceled";
    score?: string;
    team?: "varsity" | "jv" | "froshSoph";
  }

  export type ScheduleData = {
    varsity: Game[];
    jv: Game[];
    froshSoph: Game[];
  }

  // Updated player data with single letter position abbreviations
  export const playerData: Roster = {
    varsity: [
      {
        number: "00",
        name: "BEN ORME",
        position: "GK",
        image: "/Ben Orme.png",
        year: "Senior"
      },
      {
        number: "1",
        name: "JACK PETERSEN",
        position: "GK",
        image: "/Jack Petersen.png",
        year: "Sophomore"
      },
      {
        number: "2",
        name: "HARPER DAILY",
        position: "D",
        image: "/Harper Daily.png",
        year: "Senior"
      },
      {
        number: "3",
        name: "CARTER BARTHOLOMEW",
        position: "F",
        image: "/Carter Bartholomew.png",
        year: "Sophomore"
      },
      {
        number: "6",
        name: "ADAM BRADSHAW",
        position: "D",
        image: "/Adam Bradshaw.png",
        year: "Junior"
      },
      {
        number: "7",
        name: "YAHIR CARRASCO",
        position: "D",
        image: "/Yahir Carrasco.png",
        year: "Junior"
      },
      {
        number: "11",
        name: "MILO FINCH",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Junior"
      },
      {
        number: "16",
        name: "KEVIN MARIN",
        position: "F",
        image: "/Kevin Marin.png",
        year: "Freshman"
      },
      {
        number: "18",
        name: "NIXON RAPIER",
        position: "M",
        image: "/Nixon Rapier.png",
        year: "Senior"
      },
      {
        number: "19",
        name: "GEO TIENDA",
        position: "F",
        image: "/Geo Tienda.png",
        year: "Senior"
      },
      {
        number: "22",
        name: "RAYMON HERNANDEZ",
        position: "M",
        image: "/Raymon Hernandez.png",
        year: "Junior"
      },
      {
        number: "24",
        name: "TONY QUINTERO",
        position: "M",
        image: "/Tony Quintero.png",
        year: "Junior"
      },
      {
        number: "25",
        name: "LUKE DODD",
        position: "F",
        image: "/Luke Dodd.png",
        year: "Junior"
      },
      {
        number: "66",
        name: "CADE RAPIER",
        position: "D",
        image: "/Cade Rapier.png",
        year: "Sophomore"
      },
      {
        number: "99",
        name: "ISAAC HOPKINS",
        position: "M",
        image: "/Isaac Hopkins.png",
        year: "Junior"
      },
      {
        number: "99",
        name: "JEFFREY PRICE",
        position: "D",
        image: "/Jeffrey Price.png",
        year: "Senior"
      },
      {
        number: "99",
        name: "MAX ROGERS",
        position: "D",
        image: "/Max Rogers.png",
        year: "Senior"
      },
      {
        number: "99",
        name: "ANDREW WEST",
        position: "M",
        image: "/Andrew West.png",
        year: "Junior"
      },
      {
        number: "99",
        name: "JONATHON ZAFRA",
        position: "F",
        image: "/Jonathon Zafra.png",
        year: "Junior"
      }
    ],
    jv: [
      {
        number: "1",
        name: "ADAM CHRISTENSEN",
        position: "GK",
        image: "/Adam Christensen.png",
        year: "Junior"
      },
      {
        number: "2",
        name: "ALEK HAJDO",
        position: "D",
        image: "/Alek Hajdo.png",
        year: "Junior"
      },
      {
        number: "3",
        name: "BEN SMITH",
        position: "D",
        image: "/Ben Smith.png",
        year: "Sophomore"
      },
      {
        number: "4",
        name: "BRENNAN MERRELL",
        position: "M",
        image: "/Brennan Merrell.png",
        year: "Junior"
      },
      {
        number: "5",
        name: "CHASE STRAW",
        position: "M",
        image: "/Chase Straw.png",
        year: "Sophomore"
      },
      {
        number: "6",
        name: "JACK DODD",
        position: "F",
        image: "/Jack Dodd.png",
        year: "Junior"
      },
      {
        number: "7",
        name: "JACK FOWLER",
        position: "D",
        image: "/Jack Fowler.png",
        year: "Sophomore"
      },
      {
        number: "8",
        name: "JACOBY FOOTE",
        position: "M",
        image: "/Jacoby Foote.png",
        year: "Junior"
      },
      {
        number: "9",
        name: "KAI SHEFFER",
        position: "F",
        image: "/Kai Sheffer.png",
        year: "Sophomore"
      },
      {
        number: "10",
        name: "KORBIN GURULE",
        position: "M",
        image: "/Korbin Gurule.png",
        year: "Junior"
      },
      {
        number: "11",
        name: "MALAKAI BODEN",
        position: "D",
        image: "/Malakai Bowden.png",
        year: "Sophomore"
      },
      {
        number: "12",
        name: "MAX ANDRADE",
        position: "M",
        image: "/Max Andrade.png",
        year: "Junior"
      },
      {
        number: "13",
        name: "PHOENIX MARK",
        position: "F",
        image: "/Phoenix Mark.png",
        year: "Sophomore"
      },
      {
        number: "14",
        name: "TOFFER BARTHOLOMEW",
        position: "D",
        image: "/Toffer Bartholomew.png",
        year: "Junior"
      },
      {
        number: "15",
        name: "TREY STEVENSON",
        position: "M",
        image: "/Trey Stevenson.png",
        year: "Sophomore"
      },
      {
        number: "16",
        name: "VICTOR SANTOS",
        position: "F",
        image: "/Victor Santos.png",
        year: "Junior"
      },
      {
        number: "17",
        name: "WILLIAM QUARENBERG",
        position: "D",
        image: "/William Quarnberg.png",
        year: "Sophomore"
      },
      {
        number: "18",
        name: "ZAHIR PRIEGO",
        position: "M",
        image: "/Zahir Priego.png",
        year: "Junior"
      }
    ],
    froshSoph: [
      {
        number: "1",
        name: "LOGAN ABBOTT",
        position: "GK",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "2",
        name: "NOLAN BANKS",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "3",
        name: "COOPER BARTHOLOMEW",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "4",
        name: "JACE BROBERG",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "5",
        name: "JACKSON EARL",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "6",
        name: "JENS FOLKMAN",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "7",
        name: "MAREK HAJDO",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "8",
        name: "GABRIEL HOERTER",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "9",
        name: "AMMON JENKINS",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "10",
        name: "LOGAN JENSEN",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "11",
        name: "CAMERON JUDD",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "12",
        name: "ETHAN LOPEZ",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "13",
        name: "BECKHAM MORRILL",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "14",
        name: "BALLARD MYERS",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "15",
        name: "CARTER NILSSON",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "16",
        name: "BRICK ROBERTSON",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "17",
        name: "KENDRICK ROSALES",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "18",
        name: "DAX ROSANDER",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "19",
        name: "JONATHAN TIENDA",
        position: "F",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "20",
        name: "WYATT HART",
        position: "D",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      },
      {
        number: "21",
        name: "SAM ROSANDER",
        position: "M",
        image: "/SHS_Logo_Profile.png",
        year: "Freshman"
      },
      {
        number: "22",
        name: "CONNOR WHITNEY",
        position: "GK",
        image: "/SHS_Logo_Profile.png",
        year: "Sophomore"
      }
    ]
  };

  // Updated schedule data with separate schedules for Varsity, JV, and Fresh/Soph
  export const scheduleData: ScheduleData = {
    varsity: [
      {
        opponent: "Payson",
        date: "March 4, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Win 4-0",
        team: "varsity"
      },
      {
        opponent: "Mountain View",
        date: "March 6, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Snow Canyon",
        date: "March 8, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Cyprus",
        date: "March 11, 2025",
        time: "7:00 PM",
        location: "Cyprus High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Maple Mountain",
        date: "March 13, 2025",
        time: "7:00 PM",
        location: "Maple Mountain High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Timpanogos",
        date: "March 18, 2025",
        time: "7:00 PM",
        location: "Timpanogos High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Timpview",
        date: "March 20, 2025",
        time: "7:00 PM",
        location: "Timpview High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Salem Hills",
        date: "March 25, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Wasatch",
        date: "March 27, 2025",
        time: "7:00 PM",
        location: "Wasatch High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Spanish Fork",
        date: "April 8, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Cedar Valley",
        date: "April 10, 2025",
        time: "7:00 PM",
        location: "Cedar Valley High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Maple Mountain",
        date: "April 15, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "BYE",
        date: "April 17, 2025",
        time: "N/A",
        location: "N/A",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Timpview",
        date: "April 22, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Salem Hills",
        date: "April 24, 2025",
        time: "7:00 PM",
        location: "Salem Hills High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Wasatch",
        date: "April 29, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Spanish Fork",
        date: "May 1, 2025",
        time: "7:00 PM",
        location: "Spanish Fork High School",
        isHome: false,
        status: "Upcoming",
        team: "varsity"
      },
      {
        opponent: "Cedar Valley",
        date: "May 6, 2025",
        time: "7:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "varsity"
      },
    ],
    jv: [
      {
        opponent: "Payson",
        date: "March 4, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Win 5-0",
        team: "jv"
      },
      {
        opponent: "Mountain View",
        date: "March 6, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Snow Canyon",
        date: "March 8, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Cyprus",
        date: "March 11, 2025",
        time: "5:00 PM",
        location: "Cyprus High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Maple Mountain",
        date: "March 13, 2025",
        time: "5:00 PM",
        location: "Maple Mountain High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Timpanogos",
        date: "March 18, 2025",
        time: "5:00 PM",
        location: "Timpanogos High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Timpview",
        date: "March 20, 2025",
        time: "5:00 PM",
        location: "Timpview High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Salem Hills",
        date: "March 25, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Wasatch",
        date: "March 27, 2025",
        time: "5:00 PM",
        location: "Wasatch High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Spanish Fork",
        date: "April 8, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Cedar Valley",
        date: "April 10, 2025",
        time: "5:00 PM",
        location: "Cedar Valley High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Maple Mountain",
        date: "April 15, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "BYE",
        date: "April 17, 2025",
        time: "N/A",
        location: "N/A",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Timpview",
        date: "April 22, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Salem Hills",
        date: "April 24, 2025",
        time: "5:00 PM",
        location: "Salem Hills High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Wasatch",
        date: "April 29, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Spanish Fork",
        date: "May 1, 2025",
        time: "5:00 PM",
        location: "Spanish Fork High School",
        isHome: false,
        status: "Upcoming",
        team: "jv"
      },
      {
        opponent: "Cedar Valley",
        date: "May 6, 2025",
        time: "5:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "jv"
      },
    ],
    froshSoph: [
      {
        opponent: "Maple Mountain",
        date: "March 13, 2025",
        time: "4:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Timpview",
        date: "March 20, 2025",
        time: "4:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Salem Hills",
        date: "March 25, 2025",
        time: "4:00 PM",
        location: "Salem Hills High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Wasatch",
        date: "March 27, 2025",
        time: "4:00 PM",
        location: "Wasatch High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Spanish Fork",
        date: "April 8, 2025",
        time: "4:00 PM",
        location: "Spanish Fork High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Cedar Valley",
        date: "April 10, 2025",
        time: "4:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Maple Mountain",
        date: "April 15, 2025",
        time: "4:00 PM",
        location: "Maple Mountain High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Timpview",
        date: "April 22, 2025",
        time: "4:00 PM",
        location: "Timpview High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Salem Hills",
        date: "April 24, 2025",
        time: "4:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Wasatch",
        date: "April 29, 2025",
        time: "4:00 PM",
        location: "Red Devil Field",
        isHome: true,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Spanish Fork",
        date: "May 1, 2025",
        time: "4:00 PM",
        location: "Spanish Fork High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
      {
        opponent: "Cedar Valley",
        date: "May 6, 2025",
        time: "4:00 PM",
        location: "Cedar Valley High School",
        isHome: false,
        status: "Upcoming",
        team: "froshSoph"
      },
    ]
  };


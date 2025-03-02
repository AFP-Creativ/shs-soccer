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
  varsityJv: Game[];
  froshSoph: Game[];
}

// Updated player data with single letter position abbreviations
export const playerData: Roster = {
  varsity: [
    {
      number: "1",
      name: "ADAM BRADSHAW",
      position: "GK",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "2",
      name: "ANDREW WEST",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "3",
      name: "CADE RAPIER",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "4",
      name: "CARTER BARTHOLOMEW",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "5",
      name: "GEO TIENDA",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "6",
      name: "HARPER DAILY",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "7",
      name: "ISAAC HOPKINS",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "8",
      name: "JEFFREY PRICE",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "9",
      name: "JONATHON ZAFRA",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "10",
      name: "KEVIN MARIN",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "11",
      name: "LUKE DODD",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "12",
      name: "MAX ROGERS",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "13",
      name: "MILO FINCH",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "14",
      name: "NIXON RAPIER",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "15",
      name: "RAYMON HERNANDEZ",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "16",
      name: "TONY QUINTERO",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "17",
      name: "YAHIR CARRASCO",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "18",
      name: "BEN ORME",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Senior"
    },
    {
      number: "19",
      name: "JACK PETERSEN",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Junior"
    }
  ],
  jv: [
    {
      number: "1",
      name: "ADAM CHRISTENSEN",
      position: "GK",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "2",
      name: "ALEK HAJDO",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "3",
      name: "BEN SMITH",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "4",
      name: "BRENNAN MERRELL",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "5",
      name: "CHASE STRAW",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "6",
      name: "JACK DODD",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "7",
      name: "JACK FOWLER",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "8",
      name: "JACOBY FOOTE",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "9",
      name: "KAI SHEFFER",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "10",
      name: "KORBIN GURULE",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "11",
      name: "MALAKAI BODEN",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "12",
      name: "MAX ANDRADE",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "13",
      name: "PHOENIX MARK",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "14",
      name: "TOFFER BARTHOLOMEW",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "15",
      name: "TREY STEVENSON",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "16",
      name: "VICTOR SANTOS",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Junior"
    },
    {
      number: "17",
      name: "WILLIAM QUARENBERG",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "18",
      name: "ZAHIR PRIEGO",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Junior"
    }
  ],
  froshSoph: [
    {
      number: "1",
      name: "LOGAN ABBOTT",
      position: "GK",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "2",
      name: "NOLAN BANKS",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "3",
      name: "COOPER BARTHOLOMEW",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "4",
      name: "JACE BROBERG",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "5",
      name: "JACKSON EARL",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "6",
      name: "JENS FOLKMAN",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "7",
      name: "MAREK HAJDO",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "8",
      name: "GABRIEL HOERTER",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "9",
      name: "AMMON JENKINS",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "10",
      name: "LOGAN JENSEN",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "11",
      name: "CAMERON JUDD",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "12",
      name: "ETHAN LOPEZ",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "13",
      name: "BECKHAM MORRILL",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "14",
      name: "BALLARD MYERS",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "15",
      name: "CARTER NILSSON",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "16",
      name: "BRICK ROBERTSON",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "17",
      name: "KENDRICK ROSALES",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "18",
      name: "DAX ROSANDER",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "19",
      name: "JONATHAN TIENDA",
      position: "F",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "20",
      name: "WYATT HART",
      position: "D",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    },
    {
      number: "21",
      name: "SAM ROSANDER",
      position: "M",
      image: "/placeholder-user.jpg",
      year: "Freshman"
    },
    {
      number: "22",
      name: "CONNOR WHITNEY",
      position: "GK",
      image: "/placeholder-user.jpg",
      year: "Sophomore"
    }
  ]
};

// Updated schedule data with separate schedules for Varsity/JV and Fresh/Soph
export const scheduleData: ScheduleData = {
  varsityJv: [
    {
      opponent: "Payson",
      date: "March 4, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Mountain View",
      date: "March 6, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Snow Canyon",
      date: "March 8, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Cyprus",
      date: "March 11, 2025",
      time: "7:00 PM",
      location: "Cyprus High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Maple Mountain",
      date: "March 13, 2025",
      time: "7:00 PM",
      location: "Maple Mountain High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Timpanogos",
      date: "March 18, 2025",
      time: "7:00 PM",
      location: "Timpanogos High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Timpview",
      date: "March 20, 2025",
      time: "7:00 PM",
      location: "Timpview High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Salem Hills",
      date: "March 25, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Wasatch",
      date: "March 27, 2025",
      time: "7:00 PM",
      location: "Wasatch High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Spanish Fork",
      date: "April 8, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Cedar Valley",
      date: "April 10, 2025",
      time: "7:00 PM",
      location: "Cedar Valley High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Maple Mountain",
      date: "April 15, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "BYE",
      date: "April 17, 2025",
      time: "N/A",
      location: "N/A",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Timpview",
      date: "April 22, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Salem Hills",
      date: "April 24, 2025",
      time: "7:00 PM",
      location: "Salem Hills High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Wasatch",
      date: "April 29, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Spanish Fork",
      date: "May 1, 2025",
      time: "7:00 PM",
      location: "Spanish Fork High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Cedar Valley",
      date: "May 6, 2025",
      time: "7:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
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
    },
    {
      opponent: "Timpview",
      date: "March 20, 2025",
      time: "4:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Salem Hills",
      date: "March 25, 2025",
      time: "4:00 PM",
      location: "Salem Hills High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Wasatch",
      date: "March 27, 2025",
      time: "4:00 PM",
      location: "Wasatch High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Spanish Fork",
      date: "April 8, 2025",
      time: "4:00 PM",
      location: "Spanish Fork High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Cedar Valley",
      date: "April 10, 2025",
      time: "4:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Maple Mountain",
      date: "April 15, 2025",
      time: "4:00 PM",
      location: "Maple Mountain High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Timpview",
      date: "April 22, 2025",
      time: "4:00 PM",
      location: "Timpview High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Salem Hills",
      date: "April 24, 2025",
      time: "4:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Wasatch",
      date: "April 29, 2025",
      time: "4:00 PM",
      location: "Red Devil Field",
      isHome: true,
      status: "Upcoming",
    },
    {
      opponent: "Spanish Fork",
      date: "May 1, 2025",
      time: "4:00 PM",
      location: "Spanish Fork High School",
      isHome: false,
      status: "Upcoming",
    },
    {
      opponent: "Cedar Valley",
      date: "May 6, 2025",
      time: "4:00 PM",
      location: "Cedar Valley High School",
      isHome: false,
      status: "Upcoming",
    },
  ]
};


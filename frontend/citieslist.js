const citieslist = [
  {
    name: "Alexandria",
    pop: 3811516,
    country: "Egypt",
  },
  {
    name: "Ahmedabad",
    pop: 3719710,
    country: "India",
  },
  {
    name: "Abidjan",
    pop: 3677115,
    country: "Ivory Coast",
  },
  {
    name: "Ankara",
    pop: 3517182,
    country: "Turkey",
  },
  {
    name: "Addis Ababa",
    pop: 2757729,
    country: "Ethiopia",
  },
  {
    name: "Al Mawsil al Jadidah",
    pop: 2065597,
    country: "Iraq",
  },
  {
    name: "Al Basrah al Qadimah",
    pop: 2015483,
    country: "Iraq",
  },
  {
    name: "Almaty",
    pop: 2000900,
    country: "Kazakhstan",
  },
  {
    name: "Algiers",
    pop: 1977663,
    country: "Algeria",
  },
  {
    name: "Accra",
    pop: 1963264,
    country: "Ghana",
  },
  {
    name: "Aleppo",
    pop: 1602264,
    country: "Syria",
  },
  {
    name: "Asuncion",
    pop: 1482200,
    country: "Paraguay",
  },
  {
    name: "Agra",
    pop: 1430055,
    country: "India",
  },
  {
    name: "Antananarivo",
    pop: 1391433,
    country: "Madagascar",
  },
  {
    name: "Amman",
    pop: 1275857,
    country: "Jordan",
  },
  {
    name: "Adana",
    pop: 1248988,
    country: "Turkey",
  },
  {
    name: "Adelaide",
    pop: 1225235,
    country: "Australia",
  },
  {
    name: "Anshan",
    pop: 1199275,
    country: "China",
  },
  {
    name: "Amritsar",
    pop: 1092450,
    country: "India",
  },
  {
    name: "Allahabad",
    pop: 1073438,
    country: "India",
  },
  {
    name: "Aurangabad",
    pop: 1016441,
    country: "India",
  },
  {
    name: "Austin",
    pop: 931830,
    country: "United States",
  },
  {
    name: "Abobo",
    pop: 900000,
    country: "Ivory Coast",
  },
  {
    name: "Abu Ghurayb",
    pop: 900000,
    country: "Iraq",
  },
  {
    name: "Aba",
    pop: 897560,
    country: "Nigeria",
  },
  {
    name: "Ahvaz",
    pop: 841145,
    country: "Iran",
  },
  {
    name: "Arequipa",
    pop: 841130,
    country: "Peru",
  },
  {
    name: "Anyang",
    pop: 781129,
    country: "China",
  },
  {
    name: "Antalya",
    pop: 758188,
    country: "Turkey",
  },
  {
    name: "Aligarh",
    pop: 753207,
    country: "India",
  },
  {
    name: "Amsterdam",
    pop: 741636,
    country: "Netherlands",
  },
  {
    name: "Ashgabat",
    pop: 727700,
    country: "Turkmenistan",
  },
  {
    name: "Alvaro Obregon",
    pop: 726664,
    country: "Mexico",
  },
  {
    name: "As Sulaymaniyah",
    pop: 723170,
    country: "Iraq",
  },
  {
    name: "Aguascalientes",
    pop: 722250,
    country: "Mexico",
  },
  {
    name: "Agadir",
    pop: 698310,
    country: "Morocco",
  },
  {
    name: "Acapulco de Juarez",
    pop: 673479,
    country: "Mexico",
  },
  {
    name: "Athens",
    pop: 664046,
    country: "Greece",
  },
  {
    name: "Ansan-si",
    pop: 650728,
    country: "South Korea",
  },
  {
    name: "Al Ahmadi",
    pop: 637411,
    country: "Kuwait",
  },
  {
    name: "Anyang-si",
    pop: 634367,
    country: "South Korea",
  },
  {
    name: "Al Hudaydah",
    pop: 617871,
    country: "Yemen",
  },
  {
    name: "Amravati",
    pop: 603837,
    country: "India",
  },
  {
    name: "Abu Dhabi",
    pop: 603492,
    country: "United Arab Emirates",
  },
  {
    name: "Abeokuta",
    pop: 593100,
    country: "Nigeria",
  },
  {
    name: "Abuja",
    pop: 590400,
    country: "Nigeria",
  },
  {
    name: "Asmara",
    pop: 563930,
    country: "Eritrea",
  },
  {
    name: "Albuquerque",
    pop: 559121,
    country: "United States",
  },
  {
    name: "Aden",
    pop: 550602,
    country: "Yemen",
  },
  {
    name: "Antipolo",
    pop: 549543,
    country: "Philippines",
  },
  {
    name: "Ajmer",
    pop: 517911,
    country: "India",
  },
  {
    name: "Azadshahr",
    pop: 514102,
    country: "Iran",
  },
  {
    name: "Aparecida de Goiania",
    pop: 510770,
    country: "Brazil",
  },
  {
    name: "Asansol",
    pop: 504271,
    country: "India",
  },
  {
    name: "Arak",
    pop: 503647,
    country: "Iran",
  },
  {
    name: "Astrakhan",
    pop: 502533,
    country: "Russia",
  },
  {
    name: "Aracaju",
    pop: 490175,
    country: "Brazil",
  },
  {
    name: "Atlanta",
    pop: 463878,
    country: "United States",
  },
  {
    name: "Antwerpen",
    pop: 459805,
    country: "Belgium",
  },
  {
    name: "Amagasaki",
    pop: 442173,
    country: "Japan",
  },
  {
    name: "Ananindeua",
    pop: 433956,
    country: "Brazil",
  },
  {
    name: "Al Mahallah al Kubra",
    pop: 431052,
    country: "Egypt",
  },
  {
    name: "Akola",
    pop: 428857,
    country: "India",
  },
  {
    name: "Al Kharj",
    pop: 425300,
    country: "Saudi Arabia",
  },
  {
    name: "Ado-Ekiti",
    pop: 424340,
    country: "Nigeria",
  },
  {
    name: "Akure",
    pop: 420594,
    country: "Nigeria",
  },
  {
    name: "Asyut",
    pop: 420585,
    country: "Egypt",
  },
  {
    name: "Al Mansurah",
    pop: 420195,
    country: "Egypt",
  },
  {
    name: "Auckland",
    pop: 417910,
    country: "New Zealand",
  },
  {
    name: "Azcapotzalco",
    pop: 414711,
    country: "Mexico",
  },
  {
    name: "Ardabil",
    pop: 410753,
    country: "Iran",
  },
  {
    name: "Al Ain",
    pop: 408733,
    country: "United Arab Emirates",
  },
  {
    name: "Al Hoceima",
    pop: 395644,
    country: "Morocco",
  },
  {
    name: "Arlington",
    pop: 388125,
    country: "United States",
  },
  {
    name: "Abomey-Calavi",
    pop: 385755,
    country: "Benin",
  },
  {
    name: "Abadan",
    pop: 370180,
    country: "Iran",
  },
  {
    name: "Ahmadnagar",
    pop: 367140,
    country: "India",
  },
  {
    name: "Al Qadarif",
    pop: 363945,
    country: "Sudan",
  },
  {
    name: "Atasehir",
    pop: 361615,
    country: "Turkey",
  },
  {
    name: "Aurora",
    pop: 359407,
    country: "United States",
  },
  {
    name: "Anqing",
    pop: 358661,
    country: "China",
  },
  {
    name: "Asahikawa",
    pop: 356612,
    country: "Japan",
  },
  {
    name: "Arkhangel'sk",
    pop: 356051,
    country: "Russia",
  },
  {
    name: "Ambon",
    pop: 355596,
    country: "Indonesia",
  },
  {
    name: "Anshun",
    pop: 351936,
    country: "China",
  },
  {
    name: "Anaheim",
    pop: 350742,
    country: "United States",
  },
  {
    name: "Astana",
    pop: 345604,
    country: "Kazakhstan",
  },
  {
    name: "Arusha",
    pop: 341136,
    country: "Tanzania",
  },
  {
    name: "Ambattur",
    pop: 341049,
    country: "India",
  },
  {
    name: "Aksu",
    pop: 340020,
    country: "China",
  },
  {
    name: "Alicante",
    pop: 334757,
    country: "Spain",
  },
  {
    name: "Al 'Amarah",
    pop: 323302,
    country: "Iraq",
  },
  {
    name: "Akita",
    pop: 320069,
    country: "Japan",
  },
  {
    name: "Anapolis",
    pop: 319587,
    country: "Brazil",
  },
  {
    name: "Ad Diwaniyah",
    pop: 318801,
    country: "Iraq",
  },
  {
    name: "Andijon",
    pop: 318419,
    country: "Uzbekistan",
  },
  {
    name: "Armenia",
    pop: 315328,
    country: "Colombia",
  },
  {
    name: "Al Kut",
    pop: 315162,
    country: "Iraq",
  },
  {
    name: "Antofagasta",
    pop: 309832,
    country: "Chile",
  },
  {
    name: "Al Fayyum",
    pop: 306393,
    country: "Egypt",
  },
  {
    name: "Angeles City",
    pop: 299391,
    country: "Philippines",
  },
  {
    name: "Anchorage",
    pop: 298695,
    country: "United States",
  },
  {
    name: "Aomori",
    pop: 298394,
    country: "Japan",
  },
  {
    name: "Akashi",
    pop: 297279,
    country: "Japan",
  },
  {
    name: "Al Hufuf",
    pop: 293179,
    country: "Saudi Arabia",
  },
  {
    name: "Al Mubarraz",
    pop: 290802,
    country: "Saudi Arabia",
  },
  {
    name: "Al Hillah",
    pop: 289709,
    country: "Iraq",
  },
  {
    name: "Adapazari",
    pop: 286787,
    country: "Turkey",
  },
  {
    name: "Alto Barinas",
    pop: 284289,
    country: "Venezuela",
  },
  {
    name: "Alwar",
    pop: 283228,
    country: "India",
  },
  {
    name: "Ar Rayyan",
    pop: 272465,
    country: "Qatar",
  },
  {
    name: "Aizawl",
    pop: 265331,
    country: "India",
  },
  {
    name: "Aachen",
    pop: 265208,
    country: "Germany",
  },
  {
    name: "Aktobe",
    pop: 262457,
    country: "Kazakhstan",
  },
  {
    name: "Aral",
    pop: 260000,
    country: "China",
  },
  {
    name: "Augsburg",
    pop: 259196,
    country: "Germany",
  },
  {
    name: "Altona",
    pop: 250192,
    country: "Germany",
  },
  {
    name: "Avadi",
    pop: 250044,
    country: "India",
  },
  {
    name: "A Coruna",
    pop: 246056,
    country: "Spain",
  },
  {
    name: "Angarsk",
    pop: 243158,
    country: "Russia",
  },
  {
    name: "Aswan",
    pop: 241261,
    country: "Egypt",
  },
  {
    name: "Anantapur",
    pop: 240442,
    country: "India",
  },
  {
    name: "Arhus",
    pop: 237551,
    country: "Denmark",
  },
  {
    name: "Al Jubayl",
    pop: 237274,
    country: "Saudi Arabia",
  },
  {
    name: "Atani",
    pop: 230000,
    country: "Nigeria",
  },
  {
    name: "Atsugi",
    pop: 229199,
    country: "Japan",
  },
  {
    name: "Al Minya",
    pop: 227150,
    country: "Egypt",
  },
  {
    name: "Ajman",
    pop: 226172,
    country: "United Arab Emirates",
  },
  {
    name: "Ashdod",
    pop: 224656,
    country: "Israel",
  },
  {
    name: "Adiyaman",
    pop: 223744,
    country: "Turkey",
  },
  {
    name: "Arrah",
    pop: 223676,
    country: "India",
  },
  {
    name: "Ageoshimo",
    pop: 219401,
    country: "Japan",
  },
  {
    name: "Amarnath",
    pop: 217780,
    country: "India",
  },
  {
    name: "Alor Setar",
    pop: 217368,
    country: "Malaysia",
  },
  {
    name: "Archway",
    pop: 215667,
    country: "United Kingdom",
  },
  {
    name: "Abha",
    pop: 210886,
    country: "Saudi Arabia",
  },
  {
    name: "Arroyo Naranjo",
    pop: 210053,
    country: "Cuba",
  },
  {
    name: "Antakya",
    pop: 210000,
    country: "Turkey",
  },
  {
    name: "Arlington",
    pop: 207627,
    country: "United States",
  },
  {
    name: "Annaba",
    pop: 206570,
    country: "Algeria",
  },
  {
    name: "Alcala de Henares",
    pop: 204574,
    country: "Spain",
  },
  {
    name: "Agartala",
    pop: 203264,
    country: "India",
  },
  {
    name: "Atsiaman",
    pop: 202932,
    country: "Ghana",
  },
  {
    name: "Al Khums",
    pop: 201943,
    country: "Libya",
  },
  {
    name: "Aurora",
    pop: 200661,
    country: "United States",
  },
  {
    name: "Az Zawiyah",
    pop: 200000,
    country: "Libya",
  },
  {
    name: "Armavir",
    pop: 199548,
    country: "Russia",
  },
  {
    name: "Amol",
    pop: 199382,
    country: "Iran",
  },
  {
    name: "Amarillo",
    pop: 198645,
    country: "United States",
  },
  {
    name: "Arnavutkoey",
    pop: 198165,
    country: "Turkey",
  },
  {
    name: "Akron",
    pop: 197542,
    country: "United States",
  },
  {
    name: "Aberdeen",
    pop: 196670,
    country: "United Kingdom",
  },
  {
    name: "Americana",
    pop: 196022,
    country: "Brazil",
  },
  {
    name: "Al Fallujah",
    pop: 190159,
    country: "Iraq",
  },
  {
    name: "Almeria",
    pop: 188810,
    country: "Spain",
  },
  {
    name: "Antsirabe",
    pop: 186253,
    country: "Madagascar",
  },
  {
    name: "Ad-Damazin",
    pop: 186051,
    country: "Sudan",
  },
  {
    name: "Arica",
    pop: 185999,
    country: "Chile",
  },
  {
    name: "Anda",
    pop: 181271,
    country: "China",
  },
  {
    name: "Atyrau",
    pop: 180000,
    country: "Kazakhstan",
  },
  {
    name: "Amadora",
    pop: 178858,
    country: "Portugal",
  },
  {
    name: "Anjo",
    pop: 178402,
    country: "Japan",
  },
  {
    name: "Ar Raqqah",
    pop: 177636,
    country: "Syria",
  },
  {
    name: "Alleppey",
    pop: 176783,
    country: "India",
  },
  {
    name: "Almere Stad",
    pop: 176432,
    country: "Netherlands",
  },
  {
    name: "Amroha",
    pop: 176253,
    country: "India",
  },
  {
    name: "Aracatuba",
    pop: 170024,
    country: "Brazil",
  },
  {
    name: "Albacete",
    pop: 169716,
    country: "Spain",
  },
  {
    name: "Arad",
    pop: 169065,
    country: "Romania",
  },
  {
    name: "Araraquara",
    pop: 168468,
    country: "Brazil",
  },
  {
    name: "Angers",
    pop: 168279,
    country: "France",
  },
  {
    name: "Alcorcon",
    pop: 167967,
    country: "Spain",
  },
  {
    name: "Awka",
    pop: 167738,
    country: "Nigeria",
  },
  {
    name: "Abakan",
    pop: 167289,
    country: "Russia",
  },
  {
    name: "Arapiraca",
    pop: 166562,
    country: "Brazil",
  },
  {
    name: "Adoni",
    pop: 163631,
    country: "India",
  },
  {
    name: "Aydin",
    pop: 163022,
    country: "Turkey",
  },
  {
    name: "Anbu",
    pop: 162964,
    country: "China",
  },
  {
    name: "Ashikaga",
    pop: 159671,
    country: "Japan",
  },
  {
    name: "Admiralteisky",
    pop: 157897,
    country: "Russia",
  },
  {
    name: "Ambato",
    pop: 154369,
    country: "Ecuador",
  },
  {
    name: "Alandur",
    pop: 153775,
    country: "India",
  },
  {
    name: "Angra dos Reis",
    pop: 153635,
    country: "Brazil",
  },
  {
    name: "Alexandria",
    pop: 153511,
    country: "United States",
  },
  {
    name: "As Samawah",
    pop: 152890,
    country: "Iraq",
  },
  {
    name: "Aksaray",
    pop: 152201,
    country: "Turkey",
  },
  {
    name: "Abbotsford",
    pop: 151683,
    country: "Canada",
  },
  {
    name: "Astoria",
    pop: 150165,
    country: "United States",
  },
  {
    name: "Arganzuela",
    pop: 148797,
    country: "Spain",
  },
  {
    name: "Arar",
    pop: 148540,
    country: "Saudi Arabia",
  },
  {
    name: "Astanajapura",
    pop: 148047,
    country: "Indonesia",
  },
  {
    name: "As Salimiyah",
    pop: 147649,
    country: "Kuwait",
  },
  {
    name: "Aktau",
    pop: 147443,
    country: "Kazakhstan",
  },
  {
    name: "Aix-en-Provence",
    pop: 146821,
    country: "France",
  },
  {
    name: "Ambala",
    pop: 146787,
    country: "India",
  },
  {
    name: "Afyonkarahisar",
    pop: 146136,
    country: "Turkey",
  },
  {
    name: "Acheng",
    pop: 144665,
    country: "China",
  },
  {
    name: "Acarigua",
    pop: 143704,
    country: "Venezuela",
  },
  {
    name: "Amiens",
    pop: 143086,
    country: "France",
  },
  {
    name: "Arnhem",
    pop: 141674,
    country: "Netherlands",
  },
  {
    name: "Al'met'yevsk",
    pop: 140437,
    country: "Russia",
  },
  {
    name: "Ayacucho",
    pop: 140033,
    country: "Peru",
  },
  {
    name: "Amersfoort",
    pop: 139914,
    country: "Netherlands",
  },
  {
    name: "Altay",
    pop: 139341,
    country: "China",
  },
  {
    name: "Anand",
    pop: 138009,
    country: "India",
  },
  {
    name: "Apeldoorn",
    pop: 136670,
    country: "Netherlands",
  },
  {
    name: "Ajdabiya",
    pop: 134358,
    country: "Libya",
  },
  {
    name: "Adiwerna",
    pop: 134188,
    country: "Indonesia",
  },
  {
    name: "Abakaliki",
    pop: 134102,
    country: "Nigeria",
  },
  {
    name: "Ankang",
    pop: 132654,
    country: "China",
  },
  {
    name: "Abiko",
    pop: 131771,
    country: "Japan",
  },
  {
    name: "Al Bab",
    pop: 130745,
    country: "Syria",
  },
  {
    name: "Abohar",
    pop: 130603,
    country: "India",
  },
  {
    name: "Al Ajaylat",
    pop: 130546,
    country: "Libya",
  },
  {
    name: "Acilia-Castel Fusano-Ostia Antica",
    pop: 129362,
    country: "Italy",
  },
  {
    name: "Andong",
    pop: 129319,
    country: "South Korea",
  },
  {
    name: "Arish",
    pop: 128855,
    country: "Egypt",
  },
  {
    name: "Al Manaqil",
    pop: 128297,
    country: "Sudan",
  },
  {
    name: "Asaka",
    pop: 128058,
    country: "Japan",
  },
  {
    name: "Alhambra",
    pop: 127764,
    country: "United States",
  },
  {
    name: "Amaigbo",
    pop: 127300,
    country: "Nigeria",
  },
  {
    name: "Angren",
    pop: 126957,
    country: "Uzbekistan",
  },
  {
    name: "Anmore",
    pop: 126456,
    country: "Canada",
  },
  {
    name: "Al Jadid",
    pop: 126386,
    country: "Libya",
  },
  {
    name: "Agadez",
    pop: 124324,
    country: "Niger",
  },
  {
    name: "Alagoinhas",
    pop: 122688,
    country: "Brazil",
  },
  {
    name: "Az Zubayr",
    pop: 122676,
    country: "Iraq",
  },
  {
    name: "Amherst",
    pop: 122366,
    country: "United States",
  },
  {
    name: "Aalborg",
    pop: 122219,
    country: "Denmark",
  },
  {
    name: "Abilene",
    pop: 121721,
    country: "United States",
  },
  {
    name: "Alberton",
    pop: 121536,
    country: "South Africa",
  },
  {
    name: "Allentown",
    pop: 120207,
    country: "United States",
  },
  {
    name: "Abbottabad",
    pop: 120000,
    country: "Pakistan",
  },
  {
    name: "Ain Oussera",
    pop: 118687,
    country: "Algeria",
  },
  {
    name: "Adilabad",
    pop: 118526,
    country: "India",
  },
  {
    name: "Achinsk",
    pop: 117634,
    country: "Russia",
  },
  {
    name: "Anaco",
    pop: 117596,
    country: "Venezuela",
  },
  {
    name: "Ann Arbor",
    pop: 117070,
    country: "United States",
  },
  {
    name: "Athens",
    pop: 116714,
    country: "United States",
  },
  {
    name: "Azamgarh",
    pop: 116644,
    country: "India",
  },
  {
    name: "Ahmadpur East",
    pop: 116579,
    country: "Pakistan",
  },
  {
    name: "Algeciras",
    pop: 116209,
    country: "Spain",
  },
  {
    name: "Alchevs'k",
    pop: 116000,
    country: "Ukraine",
  },
  {
    name: "Arvada",
    pop: 115368,
    country: "United States",
  },
  {
    name: "Alanya",
    pop: 112969,
    country: "Turkey",
  },
  {
    name: "Apopa",
    pop: 112158,
    country: "El Salvador",
  },
  {
    name: "Ashoknagar Kalyangarh",
    pop: 111475,
    country: "India",
  },
  {
    name: "Araucaria",
    pop: 111302,
    country: "Brazil",
  },
  {
    name: "Achalpur",
    pop: 111278,
    country: "India",
  },
  {
    name: "Atibaia",
    pop: 110968,
    country: "Brazil",
  },
  {
    name: "Antioch",
    pop: 110542,
    country: "United States",
  },
  {
    name: "Ambur",
    pop: 109873,
    country: "India",
  },
  {
    name: "Araruama",
    pop: 109637,
    country: "Brazil",
  },
  {
    name: "Arzamas",
    pop: 109479,
    country: "Russia",
  },
  {
    name: "An Nuhud",
    pop: 108008,
    country: "Sudan",
  },
  {
    name: "Atbara",
    pop: 107930,
    country: "Sudan",
  },
  {
    name: "Alcobendas",
    pop: 107514,
    country: "Spain",
  },
  {
    name: "Araras",
    pop: 107463,
    country: "Brazil",
  },
  {
    name: "As Suwayq",
    pop: 107143,
    country: "Oman",
  },
  {
    name: "Apucarana",
    pop: 107085,
    country: "Brazil",
  },
  {
    name: "Al Hawamidiyah",
    pop: 106841,
    country: "Egypt",
  },
  {
    name: "Ashkelon",
    pop: 105995,
    country: "Israel",
  },
  {
    name: "Arjawinangun",
    pop: 105845,
    country: "Indonesia",
  },
  {
    name: "Ain Beida",
    pop: 105765,
    country: "Algeria",
  },
  {
    name: "Azare",
    pop: 105687,
    country: "Nigeria",
  },
  {
    name: "Anqiu",
    pop: 105665,
    country: "China",
  },
  {
    name: "Araguaina",
    pop: 105019,
    country: "Brazil",
  },
  {
    name: "Al Faw",
    pop: 104569,
    country: "Iraq",
  },
  {
    name: "Abengourou",
    pop: 104020,
    country: "Ivory Coast",
  },
  {
    name: "Akademicheskoe",
    pop: 103304,
    country: "Russia",
  },
  {
    name: "Artem",
    pop: 102300,
    country: "Russia",
  },
  {
    name: "Assis",
    pop: 101597,
    country: "Brazil",
  },
  {
    name: "Argenteuil",
    pop: 101475,
    country: "France",
  },
  {
    name: "Abu Kabir",
    pop: 100684,
    country: "Egypt",
  },
  {
    name: "Anyama",
    pop: 100653,
    country: "Ivory Coast",
  },
  {
    name: "Airoli",
    pop: 100000,
    country: "India",
  },
  {
    name: "Alamar",
    pop: 100000,
    country: "Cuba",
  },
  {
    name: "Amreli",
    pop: 99742,
    country: "India",
  },
  {
    name: "Akhmim",
    pop: 99446,
    country: "Egypt",
  },
  {
    name: "Al Matariyah",
    pop: 99357,
    country: "Egypt",
  },
  {
    name: "Acharnes",
    pop: 99346,
    country: "Greece",
  },
  {
    name: "Apatzingan",
    pop: 99010,
    country: "Mexico",
  },
  {
    name: "Alief",
    pop: 98725,
    country: "United States",
  },
  {
    name: "Albany",
    pop: 98469,
    country: "United States",
  },
  {
    name: "Andria",
    pop: 98342,
    country: "Italy",
  },
  {
    name: "Akbarabad",
    pop: 98342,
    country: "Iran",
  },
  {
    name: "Al Qatif",
    pop: 98259,
    country: "Saudi Arabia",
  },
  {
    name: "Allen",
    pop: 98143,
    country: "United States",
  },
  {
    name: "Asan",
    pop: 97749,
    country: "South Korea",
  },
  {
    name: "Ariana",
    pop: 97687,
    country: "Tunisia",
  },
  {
    name: "Arapongas",
    pop: 97512,
    country: "Brazil",
  },
  {
    name: "Al Muharraq",
    pop: 97458,
    country: "Bahrain",
  },
  {
    name: "Amalner",
    pop: 97369,
    country: "India",
  },
  {
    name: "Azimpur",
    pop: 96641,
    country: "Bangladesh",
  },
  {
    name: "Araguari",
    pop: 96565,
    country: "Brazil",
  },
  {
    name: "Aurangabad",
    pop: 95929,
    country: "India",
  },
  {
    name: "Aqaba",
    pop: 95048,
    country: "Jordan",
  },
  {
    name: "As Salamiyah",
    pop: 94887,
    country: "Syria",
  },
  {
    name: "Alkmaar",
    pop: 94853,
    country: "Netherlands",
  },
  {
    name: "Ahar",
    pop: 94348,
    country: "Iran",
  },
  {
    name: "Al Harithah",
    pop: 92395,
    country: "Iraq",
  },
  {
    name: "Arden-Arcade",
    pop: 92186,
    country: "United States",
  },
  {
    name: "Agri",
    pop: 92022,
    country: "Turkey",
  },
  {
    name: "Aligudarz",
    pop: 91041,
    country: "Iran",
  },
  {
    name: "Ajax",
    pop: 90167,
    country: "Canada",
  },
  {
    name: "Alvand",
    pop: 90000,
    country: "Iran",
  },
  {
    name: "Ancona",
    pop: 89994,
    country: "Italy",
  },
  {
    name: "Avignon",
    pop: 89769,
    country: "France",
  },
  {
    name: "Almirante Tamandare",
    pop: 89499,
    country: "Brazil",
  },
  {
    name: "Ashiya",
    pop: 88573,
    country: "Japan",
  },
  {
    name: "Alaghsas",
    pop: 88561,
    country: "Niger",
  },
  {
    name: "Asheville",
    pop: 88512,
    country: "United States",
  },
  {
    name: "Al Bahah",
    pop: 88419,
    country: "Saudi Arabia",
  },
  {
    name: "Arayat",
    pop: 87987,
    country: "Philippines",
  },
  {
    name: "Ath Thawrah",
    pop: 87880,
    country: "Syria",
  },
  {
    name: "Arifwala",
    pop: 87360,
    country: "Pakistan",
  },
  {
    name: "Alegrete",
    pop: 87236,
    country: "Brazil",
  },
  {
    name: "Angono",
    pop: 87199,
    country: "Philippines",
  },
  {
    name: "Ad Douiem",
    pop: 87068,
    country: "Sudan",
  },
  {
    name: "Akot",
    pop: 86917,
    country: "India",
  },
  {
    name: "Asnieres-sur-Seine",
    pop: 86742,
    country: "France",
  },
  {
    name: "Atlixco",
    pop: 86690,
    country: "Mexico",
  },
  {
    name: "Al Farwaniyah",
    pop: 86525,
    country: "Kuwait",
  },
  {
    name: "Apartado",
    pop: 86438,
    country: "Colombia",
  },
  {
    name: "Alhambra",
    pop: 85551,
    country: "United States",
  },
  {
    name: "Attock City",
    pop: 85479,
    country: "Pakistan",
  },
  {
    name: "Aruppukkottai",
    pop: 85369,
    country: "India",
  },
  {
    name: "Al Marj",
    pop: 85315,
    country: "Libya",
  },
  {
    name: "Amsterdam-Zuidoost",
    pop: 84811,
    country: "Netherlands",
  },
  {
    name: "Aflou",
    pop: 84683,
    country: "Algeria",
  },
  {
    name: "Akhisar",
    pop: 84659,
    country: "Turkey",
  },
  {
    name: "Ambarawa",
    pop: 84379,
    country: "Indonesia",
  },
  {
    name: "Anakapalle",
    pop: 84357,
    country: "India",
  },
  {
    name: "Aviles",
    pop: 84242,
    country: "Spain",
  },
  {
    name: "Al Fqih Ben Calah",
    pop: 84072,
    country: "Morocco",
  },
  {
    name: "Ahwatukee Foothills",
    pop: 83464,
    country: "United States",
  },
  {
    name: "Antsiranana",
    pop: 82937,
    country: "Madagascar",
  },
  {
    name: "Amasya",
    pop: 82896,
    country: "Turkey",
  },
  {
    name: "Ash Shatrah",
    pop: 82732,
    country: "Iraq",
  },
  {
    name: "Algorta",
    pop: 82624,
    country: "Spain",
  },
  {
    name: "Araxa",
    pop: 82595,
    country: "Brazil",
  },
  {
    name: "Anzhero-Sudzhensk",
    pop: 82526,
    country: "Russia",
  },
  {
    name: "Ashmun",
    pop: 82507,
    country: "Egypt",
  },
  {
    name: "Abomey",
    pop: 82154,
    country: "Benin",
  },
  {
    name: "Azov",
    pop: 82133,
    country: "Russia",
  },
  {
    name: "Abreu e Lima",
    pop: 81959,
    country: "Brazil",
  },
  {
    name: "Agboville",
    pop: 81770,
    country: "Ivory Coast",
  },
  {
    name: "Ar Rass",
    pop: 81728,
    country: "Saudi Arabia",
  },
  {
    name: "Al Hasakah",
    pop: 81539,
    country: "Syria",
  },
  {
    name: "Avare",
    pop: 81285,
    country: "Brazil",
  },
  {
    name: "Avondale",
    pop: 80684,
    country: "United States",
  },
  {
    name: "Atakpame",
    pop: 80683,
    country: "Togo",
  },
  {
    name: "Aulnay-sous-Bois",
    pop: 80615,
    country: "France",
  },
  {
    name: "As Salt",
    pop: 80189,
    country: "Jordan",
  },
  {
    name: "Anantnag",
    pop: 79821,
    country: "India",
  },
  {
    name: "Amstelveen",
    pop: 79639,
    country: "Netherlands",
  },
  {
    name: "Ar Rifa'",
    pop: 79550,
    country: "Bahrain",
  },
  {
    name: "Arakkonam",
    pop: 79080,
    country: "India",
  },
  {
    name: "Agulu",
    pop: 79021,
    country: "Nigeria",
  },
  {
    name: "Alameda",
    pop: 78630,
    country: "United States",
  },
  {
    name: "Arona",
    pop: 78614,
    country: "Spain",
  },
  {
    name: "Al Hayy",
    pop: 78272,
    country: "Iraq",
  },
  {
    name: "Alafaya",
    pop: 78113,
    country: "United States",
  },
  {
    name: "Abaetetuba",
    pop: 78050,
    country: "Brazil",
  },
  {
    name: "Alekseyevka",
    pop: 78000,
    country: "Russia",
  },
  {
    name: "Aalst",
    pop: 77534,
    country: "Belgium",
  },
  {
    name: "Apalit",
    pop: 77418,
    country: "Philippines",
  },
  {
    name: "Agua Prieta",
    pop: 77254,
    country: "Mexico",
  },
  {
    name: "Amozoc de Mota",
    pop: 77106,
    country: "Mexico",
  },
  {
    name: "Auburn",
    pop: 77006,
    country: "United States",
  },
  {
    name: "Arraijan",
    pop: 76815,
    country: "Panama",
  },
  {
    name: "Arnsberg",
    pop: 76612,
    country: "Germany",
  },
  {
    name: "Antibes",
    pop: 76393,
    country: "France",
  },
  {
    name: "Arezzo",
    pop: 76346,
    country: "Italy",
  },
  {
    name: "Arlington Heights",
    pop: 75926,
    country: "United States",
  },
  {
    name: "Azzaba",
    pop: 75317,
    country: "Algeria",
  },
  {
    name: "Ar Ramtha",
    pop: 74901,
    country: "Jordan",
  },
  {
    name: "Alvand",
    pop: 74889,
    country: "Iran",
  },
  {
    name: "Albany",
    pop: 74843,
    country: "United States",
  },
  {
    name: "Aylesbury",
    pop: 74748,
    country: "United Kingdom",
  },
  {
    name: "Ankleshwar",
    pop: 74742,
    country: "India",
  },
  {
    name: "Antonio Enes",
    pop: 74624,
    country: "Mozambique",
  },
  {
    name: "Al Bayda'",
    pop: 74594,
    country: "Libya",
  },
  {
    name: "Asbest",
    pop: 74583,
    country: "Russia",
  },
  {
    name: "Aramoko-Ekiti",
    pop: 74491,
    country: "Nigeria",
  },
  {
    name: "Abeche",
    pop: 74188,
    country: "Chad",
  },
  {
    name: "Appleton",
    pop: 74139,
    country: "United States",
  },
  {
    name: "Ambajogai",
    pop: 74114,
    country: "India",
  },
  {
    name: "Aku",
    pop: 73742,
    country: "Nigeria",
  },
  {
    name: "Al Buraymi",
    pop: 73670,
    country: "Oman",
  },
  {
    name: "Asaba",
    pop: 73374,
    country: "Nigeria",
  },
  {
    name: "Aguachica",
    pop: 73360,
    country: "Colombia",
  },
  {
    name: "Araure",
    pop: 73054,
    country: "Venezuela",
  },
  {
    name: "Ambikapur",
    pop: 72821,
    country: "India",
  },
  {
    name: "Almelo",
    pop: 72725,
    country: "Netherlands",
  },
  {
    name: "Ain Touta",
    pop: 72280,
    country: "Algeria",
  },
  {
    name: "Ash Shafa",
    pop: 72190,
    country: "Saudi Arabia",
  },
  {
    name: "Apple Valley",
    pop: 72174,
    country: "United States",
  },
  {
    name: "Aruja",
    pop: 72077,
    country: "Brazil",
  },
  {
    name: "Afikpo",
    pop: 71866,
    country: "Nigeria",
  },
  {
    name: "Amatitlan",
    pop: 71836,
    country: "Guatemala",
  },
  {
    name: "Apomu",
    pop: 71656,
    country: "Nigeria",
  },
  {
    name: "Alfenas",
    pop: 71406,
    country: "Brazil",
  },
  {
    name: "Agios Dimitrios",
    pop: 71294,
    country: "Greece",
  },
  {
    name: "Abu Tij",
    pop: 71257,
    country: "Egypt",
  },
  {
    name: "Anlu",
    pop: 71198,
    country: "China",
  },
  {
    name: "Aubervilliers",
    pop: 70914,
    country: "France",
  },
  {
    name: "Altamira",
    pop: 70888,
    country: "Brazil",
  },
  {
    name: "Alytus",
    pop: 70747,
    country: "Lithuania",
  },
  {
    name: "Antanifotsy",
    pop: 70626,
    country: "Madagascar",
  },
  {
    name: "Auraiya",
    pop: 70508,
    country: "India",
  },
  {
    name: "Alphen aan den Rijn",
    pop: 70251,
    country: "Netherlands",
  },
  {
    name: "Adler",
    pop: 70200,
    country: "Russia",
  },
  {
    name: "Alcala de Guadaira",
    pop: 70155,
    country: "Spain",
  },
  {
    name: "Ayvalik",
    pop: 70002,
    country: "Turkey",
  },
  {
    name: "Aigaleo",
    pop: 69946,
    country: "Greece",
  },
  {
    name: "Abhar",
    pop: 69889,
    country: "Iran",
  },
  {
    name: "Arba Minch",
    pop: 69622,
    country: "Ethiopia",
  },
  {
    name: "Arauca",
    pop: 69264,
    country: "Colombia",
  },
  {
    name: "Anseong",
    pop: 69255,
    country: "South Korea",
  },
  {
    name: "Abnub",
    pop: 68749,
    country: "Egypt",
  },
  {
    name: "Aschaffenburg",
    pop: 68551,
    country: "Germany",
  },
  {
    name: "Ain Fakroun",
    pop: 68433,
    country: "Algeria",
  },
  {
    name: "Al Qusiyah",
    pop: 68394,
    country: "Egypt",
  },
  {
    name: "Al Jammaliyah",
    pop: 68381,
    country: "Egypt",
  },
  {
    name: "Al Fahahil",
    pop: 68290,
    country: "Kuwait",
  },
  {
    name: "Attili",
    pop: 68196,
    country: "India",
  },
  {
    name: "Artemisa",
    pop: 68073,
    country: "Cuba",
  },
  {
    name: "Ardesen",
    pop: 67965,
    country: "Turkey",
  },
  {
    name: "Altamura",
    pop: 67821,
    country: "Italy",
  },
  {
    name: "Al Kharijah",
    pop: 67700,
    country: "Egypt",
  },
  {
    name: "Agbor",
    pop: 67610,
    country: "Nigeria",
  },
  {
    name: "Al Manzalah",
    pop: 67486,
    country: "Egypt",
  },
  {
    name: "Araria",
    pop: 67474,
    country: "India",
  },
  {
    name: "Aalen",
    pop: 67085,
    country: "Germany",
  },
  {
    name: "Anjar",
    pop: 66888,
    country: "India",
  },
  {
    name: "Aleksin",
    pop: 66885,
    country: "Russia",
  },
  {
    name: "Ambovombe",
    pop: 66818,
    country: "Madagascar",
  },
  {
    name: "Akbou",
    pop: 66654,
    country: "Algeria",
  },
  {
    name: "Aflao",
    pop: 66546,
    country: "Ghana",
  },
  {
    name: "Algueirao",
    pop: 66250,
    country: "Portugal",
  },
  {
    name: "Alba Iulia",
    pop: 66085,
    country: "Romania",
  },
  {
    name: "Atascocita",
    pop: 65844,
    country: "United States",
  },
  {
    name: "Al Marsa",
    pop: 65640,
    country: "Tunisia",
  },
  {
    name: "Afgooye",
    pop: 65461,
    country: "Somalia",
  },
  {
    name: "Alipur Duar",
    pop: 65232,
    country: "India",
  },
  {
    name: "Aquiraz",
    pop: 65116,
    country: "Brazil",
  },
  {
    name: "Ames",
    pop: 65060,
    country: "United States",
  },
  {
    name: "Adigrat",
    pop: 65000,
    country: "Ethiopia",
  },
  {
    name: "Ashoknagar",
    pop: 64722,
    country: "India",
  },
  {
    name: "Ahlat",
    pop: 64695,
    country: "Turkey",
  },
  {
    name: "Aksehir",
    pop: 64446,
    country: "Turkey",
  },
  {
    name: "Alessandria",
    pop: 64178,
    country: "Italy",
  },
  {
    name: "Aleksandrov",
    pop: 64088,
    country: "Russia",
  },
  {
    name: "Awsim",
    pop: 63862,
    country: "Egypt",
  },
  {
    name: "Al Fashn",
    pop: 63793,
    country: "Egypt",
  },
  {
    name: "As Safirah",
    pop: 63708,
    country: "Syria",
  },
  {
    name: "Alpharetta",
    pop: 63693,
    country: "United States",
  },
  {
    name: "Ain Sefra",
    pop: 63420,
    country: "Algeria",
  },
  {
    name: "Auchi",
    pop: 62907,
    country: "Nigeria",
  },
  {
    name: "Arni",
    pop: 62858,
    country: "India",
  },
  {
    name: "Ashford",
    pop: 62787,
    country: "United Kingdom",
  },
  {
    name: "Afragola",
    pop: 62775,
    country: "Italy",
  },
  {
    name: "Al Khankah",
    pop: 62434,
    country: "Egypt",
  },
  {
    name: "Al Fujayrah",
    pop: 62415,
    country: "United Arab Emirates",
  },
  {
    name: "Armadale",
    pop: 62296,
    country: "Australia",
  },
  {
    name: "Abepura",
    pop: 62248,
    country: "Indonesia",
  },
  {
    name: "Assen",
    pop: 62237,
    country: "Netherlands",
  },
  {
    name: "Auburn",
    pop: 62059,
    country: "United States",
  },
  {
    name: "Adzope",
    pop: 61884,
    country: "Ivory Coast",
  },
  {
    name: "Al Qurayn",
    pop: 61730,
    country: "Egypt",
  },
  {
    name: "Antratsyt",
    pop: 61600,
    country: "Ukraine",
  },
  {
    name: "Alcoy",
    pop: 61552,
    country: "Spain",
  },
  {
    name: "Aldershot",
    pop: 61339,
    country: "United Kingdom",
  },
  {
    name: "Asti",
    pop: 61254,
    country: "Italy",
  },
  {
    name: "Apatity",
    pop: 61186,
    country: "Russia",
  },
  {
    name: "Abu Qurqas",
    pop: 61182,
    country: "Egypt",
  },
  {
    name: "Al Manshah",
    pop: 61134,
    country: "Egypt",
  },
  {
    name: "Anuradhapura",
    pop: 60943,
    country: "Sri Lanka",
  },
  {
    name: "Al Mithnab",
    pop: 60870,
    country: "Saudi Arabia",
  },
  {
    name: "Arambagh",
    pop: 60639,
    country: "India",
  },
  {
    name: "Akim Oda",
    pop: 60604,
    country: "Ghana",
  },
  {
    name: "Adelaide Hills",
    pop: 60394,
    country: "Australia",
  },
  {
    name: "Atlantis",
    pop: 60266,
    country: "South Africa",
  },
  {
    name: "Antony",
    pop: 59845,
    country: "France",
  },
  {
    name: "Agia Paraskevi",
    pop: 59704,
    country: "Greece",
  },
  {
    name: "Asadabad",
    pop: 59617,
    country: "Iran",
  },
  {
    name: "Altamira",
    pop: 59536,
    country: "Mexico",
  },
  {
    name: "Azua",
    pop: 59139,
    country: "Dominican Republic",
  },
  {
    name: "Arrecife",
    pop: 59127,
    country: "Spain",
  },
  {
    name: "As Suwayda'",
    pop: 59052,
    country: "Syria",
  },
  {
    name: "Ardakan",
    pop: 58834,
    country: "Iran",
  },
  {
    name: "Attur",
    pop: 58702,
    country: "India",
  },
  {
    name: "Arsen'yev",
    pop: 58700,
    country: "Russia",
  },
  {
    name: "Arcadia",
    pop: 58408,
    country: "United States",
  },
  {
    name: "Aracruz",
    pop: 58271,
    country: "Brazil",
  },
  {
    name: "Ar Rumaythiyah",
    pop: 58135,
    country: "Kuwait",
  },
  {
    name: "Ariquemes",
    pop: 58096,
    country: "Brazil",
  },
  {
    name: "Acambaro",
    pop: 57972,
    country: "Mexico",
  },
  {
    name: "Anxiang",
    pop: 57769,
    country: "China",
  },
  {
    name: "Ash Shamiyah",
    pop: 57661,
    country: "Iraq",
  },
  {
    name: "Albu Kamal",
    pop: 57572,
    country: "Syria",
  },
  {
    name: "Al Hindiyah",
    pop: 57490,
    country: "Iraq",
  },
  {
    name: "Ain Temouchent",
    pop: 57354,
    country: "Algeria",
  },
  {
    name: "Arcoverde",
    pop: 57163,
    country: "Brazil",
  },
  {
    name: "Anamur",
    pop: 57128,
    country: "Turkey",
  },
  {
    name: "Abadeh",
    pop: 56988,
    country: "Iran",
  },
  {
    name: "Avila",
    pop: 56855,
    country: "Spain",
  },
  {
    name: "Ankeny",
    pop: 56764,
    country: "United States",
  },
  {
    name: "Asaka",
    pop: 56736,
    country: "Uzbekistan",
  },
  {
    name: "Al Qanatir al Khayriyah",
    pop: 56302,
    country: "Egypt",
  },
  {
    name: "Ambilobe",
    pop: 56000,
    country: "Madagascar",
  },
  {
    name: "Arua",
    pop: 55585,
    country: "Uganda",
  },
  {
    name: "At Tall",
    pop: 55561,
    country: "Syria",
  },
  {
    name: "Amuntai",
    pop: 55560,
    country: "Indonesia",
  },
  {
    name: "Anan",
    pop: 55421,
    country: "Japan",
  },
  {
    name: "Anjiang",
    pop: 55421,
    country: "China",
  },
  {
    name: "Anderson",
    pop: 55305,
    country: "United States",
  },
  {
    name: "Ahlen",
    pop: 55280,
    country: "Germany",
  },
  {
    name: "Abyek",
    pop: 55128,
    country: "Iran",
  },
  {
    name: "Abancay",
    pop: 55111,
    country: "Peru",
  },
  {
    name: "Anjangaon",
    pop: 54999,
    country: "India",
  },
  {
    name: "Al Khafji",
    pop: 54857,
    country: "Saudi Arabia",
  },
  {
    name: "Al Mayadin",
    pop: 54534,
    country: "Syria",
  },
  {
    name: "Ad Dawadimi",
    pop: 54474,
    country: "Saudi Arabia",
  },
  {
    name: "Ajaccio",
    pop: 54364,
    country: "France",
  },
  {
    name: "Allapattah",
    pop: 54289,
    country: "United States",
  },
  {
    name: "Aveiro",
    pop: 54162,
    country: "Portugal",
  },
  {
    name: "Aranjuez",
    pop: 54055,
    country: "Spain",
  },
  {
    name: "Altuf'yevskiy",
    pop: 54000,
    country: "Russia",
  },
  {
    name: "Azul",
    pop: 53941,
    country: "Argentina",
  },
  {
    name: "Acton",
    pop: 53689,
    country: "United Kingdom",
  },
  {
    name: "Anapa",
    pop: 53600,
    country: "Russia",
  },
  {
    name: "Acerra",
    pop: 53578,
    country: "Italy",
  },
  {
    name: "Arles",
    pop: 53431,
    country: "France",
  },
  {
    name: "Ajodhya",
    pop: 53293,
    country: "India",
  },
  {
    name: "Ar Rastan",
    pop: 53152,
    country: "Syria",
  },
  {
    name: "Az Zulfi",
    pop: 53144,
    country: "Saudi Arabia",
  },
  {
    name: "Alexandroupoli",
    pop: 52979,
    country: "Greece",
  },
  {
    name: "Aversa",
    pop: 52830,
    country: "Italy",
  },
  {
    name: "Adilcevaz",
    pop: 52781,
    country: "Turkey",
  },
  {
    name: "Amalapuram",
    pop: 52690,
    country: "India",
  },
  {
    name: "Amora",
    pop: 52577,
    country: "Portugal",
  },
  {
    name: "Albi",
    pop: 52409,
    country: "France",
  },
  {
    name: "Andradina",
    pop: 52406,
    country: "Brazil",
  },
  {
    name: "Ain Defla",
    pop: 52276,
    country: "Algeria",
  },
  {
    name: "Albany",
    pop: 52175,
    country: "United States",
  },
  {
    name: "Arandas",
    pop: 52175,
    country: "Mexico",
  },
  {
    name: "Asenovgrad",
    pop: 52170,
    country: "Bulgaria",
  },
  {
    name: "Albany Park",
    pop: 52079,
    country: "United States",
  },
  {
    name: "Ar Riqqah",
    pop: 52068,
    country: "Kuwait",
  },
  {
    name: "Arcot",
    pop: 51943,
    country: "India",
  },
  {
    name: "At Tall al Kabir",
    pop: 51569,
    country: "Egypt",
  },
  {
    name: "Amparafaravola",
    pop: 51519,
    country: "Madagascar",
  },
  {
    name: "Arganda",
    pop: 51489,
    country: "Spain",
  },
  {
    name: "Agustin Codazzi",
    pop: 51478,
    country: "Colombia",
  },
  {
    name: "Apple Valley",
    pop: 51221,
    country: "United States",
  },
  {
    name: "Acayucan",
    pop: 50934,
    country: "Mexico",
  },
  {
    name: "Al Miqdadiyah",
    pop: 50698,
    country: "Iraq",
  },
  {
    name: "Arjona",
    pop: 50405,
    country: "Colombia",
  },
  {
    name: "Abu Road",
    pop: 50262,
    country: "India",
  },
  {
    name: "Al Khaburah",
    pop: 50223,
    country: "Oman",
  },
  {
    name: "Anju",
    pop: 50196,
    country: "North Korea",
  },
  {
    name: "Aliso Viejo",
    pop: 50195,
    country: "United States",
  },
  {
    name: "Aonla",
    pop: 50011,
    country: "India",
  },
  {
    name: "Arashiyama",
    pop: 50000,
    country: "Japan",
  },
  {
    name: "Akademgorodok",
    pop: 50000,
    country: "Russia",
  },
  {
    name: "Al-Hamdaniya",
    pop: 50000,
    country: "Iraq",
  },
];

export default citieslist;

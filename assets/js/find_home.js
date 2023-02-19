// Whew, this JS is a bit complex. Lemme walk you through it

let servers = [];
let starSpeed = 0.1;

var userRegion;
var userCity;
var userCountry;
var userTimeZone;

var timeZoneCityToCountry = {
  "Andorra": "Andorra",
  "Dubai": "United Arab Emirates",
  "Kabul": "Afghanistan",
  "Tirane": "Albania",
  "Yerevan": "Armenia",
  "Casey": "Antarctica",
  "Davis": "Antarctica",
  "Mawson": "Antarctica",
  "Palmer": "Antarctica",
  "Rothera": "Antarctica",
  "Troll": "Antarctica",
  "Vostok": "Antarctica",
  "Buenos_Aires": "Argentina",
  "Cordoba": "Argentina",
  "Salta": "Argentina",
  "Jujuy": "Argentina",
  "Tucuman": "Argentina",
  "Catamarca": "Argentina",
  "La_Rioja": "Argentina",
  "San_Juan": "Argentina",
  "Mendoza": "Argentina",
  "San_Luis": "Argentina",
  "Rio_Gallegos": "Argentina",
  "Ushuaia": "Argentina",
  "Pago_Pago": "Samoa (American)",
  "Vienna": "Austria",
  "Lord_Howe": "Australia",
  "Macquarie": "Australia",
  "Hobart": "Australia",
  "Melbourne": "Australia",
  "Sydney": "Australia",
  "Broken_Hill": "Australia",
  "Brisbane": "Australia",
  "Lindeman": "Australia",
  "Adelaide": "Australia",
  "Darwin": "Australia",
  "Perth": "Australia",
  "Eucla": "Australia",
  "Baku": "Azerbaijan",
  "Barbados": "Barbados",
  "Dhaka": "Bangladesh",
  "Brussels": "Belgium",
  "Sofia": "Bulgaria",
  "Bermuda": "Bermuda",
  "Brunei": "Brunei",
  "La_Paz": "Bolivia",
  "Noronha": "Brazil",
  "Belem": "Brazil",
  "Fortaleza": "Brazil",
  "Recife": "Brazil",
  "Araguaina": "Brazil",
  "Maceio": "Brazil",
  "Bahia": "Brazil",
  "Sao_Paulo": "Brazil",
  "Campo_Grande": "Brazil",
  "Cuiaba": "Brazil",
  "Santarem": "Brazil",
  "Porto_Velho": "Brazil",
  "Boa_Vista": "Brazil",
  "Manaus": "Brazil",
  "Eirunepe": "Brazil",
  "Rio_Branco": "Brazil",
  "Thimphu": "Bhutan",
  "Minsk": "Belarus",
  "Belize": "Belize",
  "St_Johns": "Canada",
  "Halifax": "Canada",
  "Glace_Bay": "Canada",
  "Moncton": "Canada",
  "Goose_Bay": "Canada",
  "Toronto": "Canada",
  "Nipigon": "Canada",
  "Thunder_Bay": "Canada",
  "Iqaluit": "Canada",
  "Pangnirtung": "Canada",
  "Winnipeg": "Canada",
  "Rainy_River": "Canada",
  "Resolute": "Canada",
  "Rankin_Inlet": "Canada",
  "Regina": "Canada",
  "Swift_Current": "Canada",
  "Edmonton": "Canada",
  "Cambridge_Bay": "Canada",
  "Yellowknife": "Canada",
  "Inuvik": "Canada",
  "Dawson_Creek": "Canada",
  "Fort_Nelson": "Canada",
  "Whitehorse": "Canada",
  "Dawson": "Canada",
  "Vancouver": "Canada",
  "Cocos": "Cocos (Keeling) Islands",
  "Zurich": "Switzerland",
  "Abidjan": "Côte d'Ivoire",
  "Rarotonga": "Cook Islands",
  "Santiago": "Chile",
  "Punta_Arenas": "Chile",
  "Easter": "Chile",
  "Shanghai": "China",
  "Urumqi": "China",
  "Bogota": "Colombia",
  "Costa_Rica": "Costa Rica",
  "Havana": "Cuba",
  "Cape_Verde": "Cape Verde",
  "Christmas": "Christmas Island",
  "Nicosia": "Cyprus",
  "Famagusta": "Cyprus",
  "Prague": "Czech Republic",
  "Berlin": "Germany",
  "Copenhagen": "Denmark",
  "Santo_Domingo": "Dominican Republic",
  "Algiers": "Algeria",
  "Guayaquil": "Ecuador",
  "Galapagos": "Ecuador",
  "Tallinn": "Estonia",
  "Cairo": "Egypt",
  "El_Aaiun": "Western Sahara",
  "Madrid": "Spain",
  "Ceuta": "Spain",
  "Canary": "Spain",
  "Helsinki": "Finland",
  "Fiji": "Fiji",
  "Stanley": "Falkland Islands",
  "Chuuk": "Micronesia",
  "Pohnpei": "Micronesia",
  "Kosrae": "Micronesia",
  "Faroe": "Faroe Islands",
  "Paris": "France",
  "London": "Britain (UK)",
  "Tbilisi": "Georgia",
  "Cayenne": "French Guiana",
  "Gibraltar": "Gibraltar",
  "Nuuk": "Greenland",
  "Danmarkshavn": "Greenland",
  "Scoresbysund": "Greenland",
  "Thule": "Greenland",
  "Athens": "Greece",
  "South_Georgia": "South Georgia & the South Sandwich Islands",
  "Guatemala": "Guatemala",
  "Guam": "Guam",
  "Bissau": "Guinea-Bissau",
  "Guyana": "Guyana",
  "Hong_Kong": "Hong Kong",
  "Tegucigalpa": "Honduras",
  "Port-au-Prince": "Haiti",
  "Budapest": "Hungary",
  "Jakarta": "Indonesia",
  "Pontianak": "Indonesia",
  "Makassar": "Indonesia",
  "Jayapura": "Indonesia",
  "Dublin": "Ireland",
  "Jerusalem": "Israel",
  "Kolkata": "India",
  "Calcutta": "India",
  "Chagos": "British Indian Ocean Territory",
  "Baghdad": "Iraq",
  "Tehran": "Iran",
  "Reykjavik": "Iceland",
  "Rome": "Italy",
  "Jamaica": "Jamaica",
  "Amman": "Jordan",
  "Tokyo": "Japan",
  "Nairobi": "Kenya",
  "Bishkek": "Kyrgyzstan",
  "Tarawa": "Kiribati",
  "Kanton": "Kiribati",
  "Kiritimati": "Kiribati",
  "Pyongyang": "Korea (North)",
  "Seoul": "Korea (South)",
  "Almaty": "Kazakhstan",
  "Qyzylorda": "Kazakhstan",
  "Qostanay": "Kazakhstan",
  "Aqtobe": "Kazakhstan",
  "Aqtau": "Kazakhstan",
  "Atyrau": "Kazakhstan",
  "Oral": "Kazakhstan",
  "Beirut": "Lebanon",
  "Colombo": "Sri Lanka",
  "Monrovia": "Liberia",
  "Vilnius": "Lithuania",
  "Luxembourg": "Luxembourg",
  "Riga": "Latvia",
  "Tripoli": "Libya",
  "Casablanca": "Morocco",
  "Monaco": "Monaco",
  "Chisinau": "Moldova",
  "Majuro": "Marshall Islands",
  "Kwajalein": "Marshall Islands",
  "Yangon": "Myanmar (Burma)",
  "Ulaanbaatar": "Mongolia",
  "Hovd": "Mongolia",
  "Choibalsan": "Mongolia",
  "Macau": "Macau",
  "Martinique": "Martinique",
  "Malta": "Malta",
  "Mauritius": "Mauritius",
  "Maldives": "Maldives",
  "Mexico_City": "Mexico",
  "Cancun": "Mexico",
  "Merida": "Mexico",
  "Monterrey": "Mexico",
  "Matamoros": "Mexico",
  "Mazatlan": "Mexico",
  "Chihuahua": "Mexico",
  "Ojinaga": "Mexico",
  "Hermosillo": "Mexico",
  "Tijuana": "Mexico",
  "Bahia_Banderas": "Mexico",
  "Kuala_Lumpur": "Malaysia",
  "Kuching": "Malaysia",
  "Maputo": "Mozambique",
  "Windhoek": "Namibia",
  "Noumea": "New Caledonia",
  "Norfolk": "Norfolk Island",
  "Lagos": "Nigeria",
  "Managua": "Nicaragua",
  "Amsterdam": "Netherlands",
  "Oslo": "Norway",
  "Kathmandu": "Nepal",
  "Nauru": "Nauru",
  "Niue": "Niue",
  "Auckland": "New Zealand",
  "Chatham": "New Zealand",
  "Panama": "Panama",
  "Lima": "Peru",
  "Tahiti": "French Polynesia",
  "Marquesas": "French Polynesia",
  "Gambier": "French Polynesia",
  "Port_Moresby": "Papua New Guinea",
  "Bougainville": "Papua New Guinea",
  "Manila": "Philippines",
  "Karachi": "Pakistan",
  "Warsaw": "Poland",
  "Miquelon": "St Pierre & Miquelon",
  "Pitcairn": "Pitcairn",
  "Puerto_Rico": "Puerto Rico",
  "Gaza": "Palestine",
  "Hebron": "Palestine",
  "Lisbon": "Portugal",
  "Madeira": "Portugal",
  "Azores": "Portugal",
  "Palau": "Palau",
  "Asuncion": "Paraguay",
  "Qatar": "Qatar",
  "Reunion": "Réunion",
  "Bucharest": "Romania",
  "Belgrade": "Serbia",
  "Kaliningrad": "Russia",
  "Moscow": "Russia",
  "Simferopol": "Russia",
  "Kirov": "Russia",
  "Volgograd": "Russia",
  "Astrakhan": "Russia",
  "Saratov": "Russia",
  "Ulyanovsk": "Russia",
  "Samara": "Russia",
  "Yekaterinburg": "Russia",
  "Omsk": "Russia",
  "Novosibirsk": "Russia",
  "Barnaul": "Russia",
  "Tomsk": "Russia",
  "Novokuznetsk": "Russia",
  "Krasnoyarsk": "Russia",
  "Irkutsk": "Russia",
  "Chita": "Russia",
  "Yakutsk": "Russia",
  "Khandyga": "Russia",
  "Vladivostok": "Russia",
  "Ust-Nera": "Russia",
  "Magadan": "Russia",
  "Sakhalin": "Russia",
  "Srednekolymsk": "Russia",
  "Kamchatka": "Russia",
  "Anadyr": "Russia",
  "Riyadh": "Saudi Arabia",
  "Guadalcanal": "Solomon Islands",
  "Mahe": "Seychelles",
  "Khartoum": "Sudan",
  "Stockholm": "Sweden",
  "Singapore": "Singapore",
  "Paramaribo": "Suriname",
  "Juba": "South Sudan",
  "Sao_Tome": "Sao Tome & Principe",
  "El_Salvador": "El Salvador",
  "Damascus": "Syria",
  "Grand_Turk": "Turks & Caicos Is",
  "Ndjamena": "Chad",
  "Kerguelen": "French Southern & Antarctic Lands",
  "Bangkok": "Thailand",
  "Dushanbe": "Tajikistan",
  "Fakaofo": "Tokelau",
  "Dili": "East Timor",
  "Ashgabat": "Turkmenistan",
  "Tunis": "Tunisia",
  "Tongatapu": "Tonga",
  "Istanbul": "Turkey",
  "Funafuti": "Tuvalu",
  "Taipei": "Taiwan",
  "Kiev": "Ukraine",
  "Uzhgorod": "Ukraine",
  "Zaporozhye": "Ukraine",
  "Wake": "US minor outlying islands",
  "New_York": "United States",
  "Detroit": "United States",
  "Louisville": "United States",
  "Monticello": "United States",
  "Indianapolis": "United States",
  "Vincennes": "United States",
  "Winamac": "United States",
  "Marengo": "United States",
  "Petersburg": "United States",
  "Vevay": "United States",
  "Chicago": "United States",
  "Tell_City": "United States",
  "Knox": "United States",
  "Menominee": "United States",
  "Center": "United States",
  "New_Salem": "United States",
  "Beulah": "United States",
  "Denver": "United States",
  "Boise": "United States",
  "Phoenix": "United States",
  "Los_Angeles": "United States",
  "Anchorage": "United States",
  "Juneau": "United States",
  "Sitka": "United States",
  "Metlakatla": "United States",
  "Yakutat": "United States",
  "Nome": "United States",
  "Adak": "United States",
  "Honolulu": "United States",
  "Montevideo": "Uruguay",
  "Samarkand": "Uzbekistan",
  "Tashkent": "Uzbekistan",
  "Caracas": "Venezuela",
  "Ho_Chi_Minh": "Vietnam",
  "Efate": "Vanuatu",
  "Wallis": "Wallis & Futuna",
  "Apia": "Samoa (western)",
  "Johannesburg": "South Africa",
  "Antigua": "Antigua & Barbuda",
  "Anguilla": "Anguilla",
  "Luanda": "Angola",
  "McMurdo": "Antarctica",
  "DumontDUrville": "Antarctica",
  "Syowa": "Antarctica",
  "Aruba": "Aruba",
  "Mariehamn": "Åland Islands",
  "Sarajevo": "Bosnia & Herzegovina",
  "Ouagadougou": "Burkina Faso",
  "Bahrain": "Bahrain",
  "Bujumbura": "Burundi",
  "Porto-Novo": "Benin",
  "St_Barthelemy": "St Barthelemy",
  "Kralendijk": "Caribbean NL",
  "Nassau": "Bahamas",
  "Gaborone": "Botswana",
  "Blanc-Sablon": "Canada",
  "Atikokan": "Canada",
  "Creston": "Canada",
  "Kinshasa": "Congo (Dem. Rep.)",
  "Lubumbashi": "Congo (Dem. Rep.)",
  "Bangui": "Central African Rep.",
  "Brazzaville": "Congo (Rep.)",
  "Douala": "Cameroon",
  "Curacao": "Curaçao",
  "Busingen": "Germany",
  "Djibouti": "Djibouti",
  "Dominica": "Dominica",
  "Asmara": "Eritrea",
  "Addis_Ababa": "Ethiopia",
  "Libreville": "Gabon",
  "Grenada": "Grenada",
  "Guernsey": "Guernsey",
  "Accra": "Ghana",
  "Banjul": "Gambia",
  "Conakry": "Guinea",
  "Guadeloupe": "Guadeloupe",
  "Malabo": "Equatorial Guinea",
  "Zagreb": "Croatia",
  "Isle_of_Man": "Isle of Man",
  "Jersey": "Jersey",
  "Phnom_Penh": "Cambodia",
  "Comoro": "Comoros",
  "St_Kitts": "St Kitts & Nevis",
  "Kuwait": "Kuwait",
  "Cayman": "Cayman Islands",
  "Vientiane": "Laos",
  "St_Lucia": "St Lucia",
  "Vaduz": "Liechtenstein",
  "Maseru": "Lesotho",
  "Podgorica": "Montenegro",
  "Marigot": "St Martin (French)",
  "Antananarivo": "Madagascar",
  "Skopje": "North Macedonia",
  "Bamako": "Mali",
  "Saipan": "Northern Mariana Islands",
  "Nouakchott": "Mauritania",
  "Montserrat": "Montserrat",
  "Blantyre": "Malawi",
  "Niamey": "Niger",
  "Muscat": "Oman",
  "Kigali": "Rwanda",
  "St_Helena": "St Helena",
  "Ljubljana": "Slovenia",
  "Longyearbyen": "Svalbard & Jan Mayen",
  "Bratislava": "Slovakia",
  "Freetown": "Sierra Leone",
  "San_Marino": "San Marino",
  "Dakar": "Senegal",
  "Mogadishu": "Somalia",
  "Lower_Princes": "St Maarten (Dutch)",
  "Mbabane": "Eswatini",
  "Lome": "Togo",
  "Port_of_Spain": "Trinidad & Tobago",
  "Dar_es_Salaam": "Tanzania",
  "Kampala": "Uganda",
  "Midway": "US minor outlying islands",
  "Vatican": "Vatican City",
  "St_Vincent": "St Vincent",
  "Tortola": "Virgin Islands (UK)",
  "St_Thomas": "Virgin Islands (US)",
  "Aden": "Yemen",
  "Mayotte": "Mayotte",
  "Lusaka": "Zambia",
  "Harare": "Zimbabwe"
}

// So, when the page fully loads..
window.addEventListener('load', async () => {
  // Add event listener to the "Begin" button.
  document.getElementById('begin-btn').addEventListener('click', async () => {

    document.getElementById('begin-btn').disabled = 'disabled';

    // Replace static Earth image in stage 1 with spinning Earth.
    const stage1Globe = document.getElementById('stage-1-globe');
    await loadImage(stage1Globe, stage1Globe.getAttribute('data-src'))

    // Load in stars.js
    await loadCDN('assets/js/stars.js?hash');

    // Add background music
    document.getElementById('audio-player-container').innerHTML += `
    <audio src="assets/mp3/humming.mp3" id="hummingAudio" autoplay loop>
        <p>If you are reading this, it is because your browser does not support the audio element.</p>
    </audio>`;
    const hummingAudio = document.getElementById('hummingAudio');
    hummingAudio.volume = 0.5;

    // These CodePens are lifesavers:
    // https://codepen.io/idorenyinudoh/pen/GRjBXER
    // https://codepen.io/shahednasser/pen/XWgbGBN
    const soundButton = document.getElementsByClassName('sound-button')[0],
      volumeSlider = document.getElementById('volume-slider'),
      outputContainer = document.getElementById('volume-output');

    // Adds event listeners to mute button & volume slider.
    soundButton.addEventListener('click', (e) => {
      // Toggles mute.
      hummingAudio.muted = !hummingAudio.muted;
      if (hummingAudio.muted)
        // Adds class so stage 2 audio can check whether the muted button was ticked or not.
        soundButton.classList.add('muted');
      else soundButton.classList.remove('muted');
      // Modifies the image/alt text depending on state.
      const soundButtonImg =
        document.getElementsByClassName('sound-button-img')[0];
      soundButtonImg.src = hummingAudio.muted
        ? 'assets/img/stage1/muted.svg'
        : 'assets/img/stage1/unmuted.svg';
      soundButtonImg.alt = hummingAudio.muted ? 'Sound muted' : 'Sound unmuted';
    });

    // Adds event listener to volume slider.
    volumeSlider.addEventListener('input', (e) => {
      const value = e.target.value;

      // Modifies output text & volume of audio.
      outputContainer.textContent = value;
      hummingAudio.volume = value / 100;
    });

    // THEN hide the modal window.
    const modalWindow =
      document.getElementsByClassName('begin-modal-window')[0];
    modalWindow.style.visibility = 'hidden';
    modalWindow.style.opacity = 0;
    modalWindow.style['pointer-events'] = 'none';
  });
});

// The page has fully loaded. Now what?
// We add an event listener to the "Find your new home button".

document
  .getElementsByClassName('find-home-button')[0]
  .addEventListener('click', async () => {
    document.getElementsByClassName('find-home-button')[0].disabled = 'disabled';

    // ..Then we'll change the globe gif to a faster one, to tell the user something more is happening
    const globeImg = document.getElementsByClassName('globe')[0];
    await loadImage(globeImg, 'assets/img/stage1/Rotating_earth_animated_transparent_fast.webp');
    
    // Increase speed of stars to signify we are travelling to the next stage at a fast pace
    starSpeed = 0.6;

    // We'll first change the text of the find home button, to tell the user we're doing something
    const findHomeBtn = document.getElementsByClassName('find-home-button')[0];
    findHomeBtn.textContent = 'Finding your brotherhood..';

    // We'll disable it so they cannot trigger this 5000 times and break anything
    findHomeBtn.disabled = true;

    // Call the find-bros API to fetch the: closest server, and a list of all of the other servers.

    let region_code = '',
      country = 'us';

    try {
      servers = await fetchPlus('servers.json?hash', {}, 5)
    } catch (e) {
      console.error(e);
      findHomeBtn.innerText = `Server list fetching error: ${e} ${e.stack}`;
      await sleep(3000);
      return;
    }

    try {;
      let res = await fetchPlus('https://ipapi.co/json', {}, 10);
      let CountryCode = res.country_code

      if (res) {
        if (res.region_code) {
          region_code = res.region_code.toLowerCase();
          country = CountryCode.toLowerCase();
        } 
        
      } else {
        console.error("Error with getting IP info:", res);
      }        
    } catch (e) {
      console.error(e);

      if (Intl) {
        userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        var tzArr = userTimeZone.split("/");
        userRegion = tzArr[0];
        userCity = tzArr[tzArr.length - 1];
        userCountry = timeZoneCityToCountry[userCity];

        country = userCountry

        console.log({userRegion, userCity, userCountry})
      }
      else {
        const userLanguage = navigator.language;
        const NavUserCountryCode = userLanguage.substr(userLanguage.length - 2);
        console.log(NavUserCountryCode);
        findHomeBtn.innerText = `Location fetching error: ${e} ${e.stack} \n Gonna use the navigator api`;
  
        country = NavUserCountryCode.toLowerCase();
      }
    }

    const geoServer =
      servers.find((s) => s.cc === `${country}-${region_code}`) || // First find exact match by country-region
      servers.find((s) => s.cc === country) || // Else find exact match by country
      servers.find((s) => s.cc.split('-')[0] === country) ||
      servers.find((s) => s.match === country) || // Then find by matching if no results
      null; // No server then

    // If there's a server for the country it was requested from:
    if (geoServer) {
      // Set the current country to that
      await setCurrentCountry(
        geoServer.country,
        geoServer.cc,
        geoServer.invite,
        false
      );

      // Preload the server list into a local array, if they want to select a different country
      for (const server of servers) {
        servers[server.match.toLowerCase()] = server;
      }

      // If there is no server for the country it was requested from..
    } else {
      document.getElementsByClassName('country-wrapper')[0].style.display =
        'none';
      // encourage them to make one
      document.getElementsByClassName(
        'no-country-found-wrapper'
      )[0].style.display = 'inline-flex';
    }

    // Then, we'll prepare to fade out the stage 1 page...

    await sleep(2000);

    // Decrease star speed to indicate we have arrived
    starSpeed = 0.01;

    // Set the stage 1 wrapper to fade out
    const stage1Wrapper = document.getElementById('stage-1');
    stage1Wrapper.classList.toggle('fade-out');
    await sleep(2000);
    stage1Wrapper.style.display = 'none';

    // Remove the current background audio element
    const hummingAudio = document.getElementById('hummingAudio');
    hummingAudio.remove();

    // Change the stage 2 globe image to the webp
    const stage2Globe = document.getElementById('stage-2-globe');
    await loadImage(stage2Globe, stage2Globe.getAttribute('data-src'));

    // Change the stage 2 adonis image to the webp
    const adonisRising = document.getElementsByClassName('adonis_rising')[0];
    await loadImage(adonisRising, adonisRising.getAttribute('data-src'));

    // Once that's done, fade in the new stage 2 wrapper.
    const stage2Wrapper = document.getElementById('stage-2');
    stage2Wrapper.style.display = 'block';
    stage2Wrapper.classList.toggle('fade-in');

    // Increase star speed again to signify the presence of Adoniss
    starSpeed = 0.2;

    // Add the gigachad music, using settings from volume control
    document.getElementById(
      'stage-2'
    ).innerHTML += `<audio src="assets/mp3/gigachadmusic.mp3" id="gigachadaudio" autoplay>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>`;
    const audio = document.getElementById('gigachadaudio');
    const soundButton = document.getElementsByClassName('sound-button')[0];
    const volumeSlider = document.getElementById('volume-slider');

    audio.volume = volumeSlider.value / 100;

    if (soundButton.classList.contains('muted')) {
      audio.muted = true;
    }

    // If the user wants to find another country's Discord server, we'll add the event listener now (since you cannot do it earlier)
    document
      .getElementsByClassName('not-your-country-button')[0]
      .addEventListener('click', async () => {
        // Clear value of search box & the list to make it less annoying to search again
        const countrySearchBox =
          document.getElementsByClassName('country-input')[0];
        countrySearchBox.value = '';

        const countryList = document.getElementById('countryList');
        countryList.replaceChildren();

        // Hide button, show input box & list

        const notYourCountryBtn = document.getElementsByClassName(
          'not-your-country-button'
        )[0];
        notYourCountryBtn.style.display = 'none';

        const countrySearch =
          document.getElementsByClassName('country-search')[0];
        countrySearch.style.display = 'flex';

        document.getElementsByClassName('country-input')[0].focus();
      });
  });

// This function basically sets the current country on the stage 2 page.
async function setCurrentCountry(
  name,
  countryCode,
  inviteURL,
  newCountrySelected
) {
  const joinBtn = document.getElementsByClassName('join-button')[0];

  const countryName = document.querySelector('.country-name');
  countryName.innerText = name;

  const flagImg = document.querySelector('.flag-img');
  flagImg.src = `https://flagcdn.com/${countryCode}.svg`;

  // Sets the button using onclick to open the invite link in the current tab.
  joinBtn.setAttribute('onclick', `openURL("${inviteURL}")`);

  // This is for if the user clicks one of the countries on "Not your true country?"
  // It just auto-hides the dialog and displays that button again
  if (newCountrySelected) {
    const notYourCountryBtn = document.getElementsByClassName(
      'not-your-country-button'
    )[0];
    notYourCountryBtn.style.display = '';

    const countrySearch = document.getElementsByClassName('country-search')[0];
    countrySearch.style.display = 'none';
  }
}

// This is a hacky auto-complete function I cobbled together using StackOverflow.
// Thanks: https://stackoverflow.com/a/38750895

function autocompleteMatch(input) {
  if (input === '') return [];

  const lowercase = input.toLowerCase();
  const reg = new RegExp(lowercase);

  const filtered = Object.keys(servers)
    .filter((term) => term.match(reg))
    .reduce((obj, key) => {
      obj[key] = servers[key];
      return obj;
    }, {});

  return filtered;
}

// This function is called every time the user pops a key into the "Enter your country" search box
function populateServerList(input) {
  const countryList = document.getElementById('countryList');

  try {
    // We'll run their input and try and find a match in the array of servers
    let terms = autocompleteMatch(input);

    // Split the keys/values into seperate arrays so it's less of a pain to iterate
    const keys = Object.keys(terms);
    const values = Object.values(terms);

    // Clear the existing country list
    countryList.replaceChildren();

    // If the match has been run against the server list, then..
    if (terms) {
      // If there actually is a few matches..
      if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
          const server = values[i];
          // Add the matches to the list
          countryList.insertAdjacentHTML(
            'beforeend',
            `
        <button class="country-btn" onclick='setCurrentCountry("${server.country}", "${server.cc}", "${server.invite}", true)'>
            <img class="country-btn-img" src="https://flagcdn.com/${server.cc}.svg"/>
            <span class="country-btn-name">${server.country}</span>
        </button>
        `
          );
        }
      } else if (keys.length === 0 && input !== '') {
        // If not.. encourage them to use their "FREEDOM" to create a server
        countryList.insertAdjacentHTML(
          'beforeend',
          `
        <button class="country-btn" onclick='window.location.href="#open-modal"'>
            <img class="country-btn-img" src="https://flagcdn.com/us.svg"/>
            <span class="country-btn-name">No brotherhood has been found for your country. Make one, and lead it, brother.</span>
        </button>
        `
        );
      }
    } else {
      // There is no way a user should be able to get this error, but just in case..
      countryList.append(`
        <button class="country-btn">
            <span class="country-btn-name">An error occurred. Reload, brother.</span>
        </button>
        `);
    }
  } catch (e) {
    console.error(e);
  }
}

// It kindof works.
// Thanks: https://markmichon.com/automatic-retries-with-fetch
const fetchPlus = (url, options = {}, retries) =>
  fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (retries > 0) {
        return fetchPlus(url, options, retries - 1);
      }
      throw new Error(res.status);
    })
    .catch((error) => console.error(error.message));

// Bog standard sleep function.
// My go-to, thanks! https://stackoverflow.com/a/39914235
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// A nice function that we can use for the buttons, to open the Discord server invite URLs in the same tab.
function openURL(url) {
  window.open(url, '_self');
}

// Thank you to https://stackoverflow.com/a/59613051
const loadCDN = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`head > script[src="${src}"]`) !== null)
      return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
  });

// https://stackoverflow.com/questions/37854355/wait-for-image-loading-to-complete-in-javascript
// amen ^_^
async function loadImage(img, imageUrl) {
    const imageLoadPromise = new Promise(resolve => {
        img.onload = resolve;
        img.src = imageUrl;
    });

    await imageLoadPromise;
    return img;
}
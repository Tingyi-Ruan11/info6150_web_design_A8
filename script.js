// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
]

// Your code goes below
// add data
//China
GEOGRAPHY_LIST.push({
    country: "China",
    capital: "Beijing",
    largestCity: "Shanghai",
    subdivisionName: "province",
    subdivisions: [
      {
        name: "Anhui",
        capital: "Hefei",
        largestCity: "Heifei",
        area: 230000,
      },
      {
        name: "Zhejiang",
        capital: "Hangzhou",
        largestCity: "Lishui",
        area: 310000,
      },
      {
        name: "jiangsu",
        capital: "Nanjing",
        largestCity: "Suzhou",
        area: 214000,
      },
    ],
  });
// Mexico
GEOGRAPHY_LIST.push({
    country: "Mexico",
    capital: "Meixco City",
    largestCity: "Meixco City",
    subdivisionName: "estados",
    subdivisions: [
        {
        name: "Baja California",
        capital: "Mexicali",
        largestCity: "Tijuana",
        area: 21850,
        },
        {
        name: "Campeche",
        capital: "San Francisco de Campeche",
        largestCity: "San Francisco de Campeche",
        area: 24000,
        },
        {
        name: "Chihuahua",
        capital: "Chihuahua",
        largestCity: "Ciudad Juárez",
        area: 32000,
        },
    ],
});
// convert data into HTML
const geographyTag = document.getElementById("geography_data");

function createSubdivisionItem(geographyObject) {
  let result = ``;

  for (let j = 0; j < geographyObject.subdivisions.length; j++) {
    const subdivision = geographyObject.subdivisions[j];
    const subdivisionHtml = `<ul>
        <li>name:${subdivision.name}</li>
        <li>capital:${subdivision.capital}</li>
        <li>largestCity:${subdivision.largestCity}</li>
        <li>area:${subdivision.area}</li>
       </ul>`;
    result = result + subdivisionHtml;
  }
  return result;
}

for (let i = 0; i < GEOGRAPHY_LIST.length; i++) {
  const geographyObject = GEOGRAPHY_LIST[i];

  const geographyHTML = `<ul>
    <li>country:${geographyObject.country}</li>
    <li>capital:${geographyObject.capital}</li>
    <li>largestCity:${geographyObject.largestCity}</li>
    <li>subdivisionName:${geographyObject.subdivisionName}</li>
    <li>subdivisions:${createSubdivisionItem(geographyObject)}</li>
   </ul>`;
  geographyTag.insertAdjacentHTML("beforeend", geographyHTML);
}

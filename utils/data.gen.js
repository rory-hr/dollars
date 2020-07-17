//___________________________________//
//_______________LISTS_______________//
//___________________________________//

const items = [
  'gas',
  'food',
  'game',
  'restaurant',
  'veggies',
  'snacks',
  'books',
  'gift',
  'notebook',
  'movie',
  'fruit',
  'art',
  'car wash',
  'breakfast',
  'lunch',
  'dinner',
  'haircut'
];

const monItems = [
  'Spotify',
  'Insurance',
  'BART',
  'Rent',
];

const monCosts = [
  10,
  500,
  200,
  3000
];

const income = [
  'Work',
  'Roommate'
];

const incomeAmounts = [
  4000,
  1500
];

const costs = [
  1.20,
  20.34,
  19.99,
  5.13,
  9.10,
  8.89,
  50.31,
  12.01,
  3.20,
  4.88,
  13.20,
  14.08,
  17.72,
  14.50,
  30.62,
  27.13,
];

const locations = [
  'KP Market',
  'Trader Joes',
  'Chevron',
  'Shell',
  'Target',
  'Whole Foods',
  'Costco',
  'Fluerets',
  'Amazon',
  'Steam',
];

const tags = [
  'transportation',
  'travel',
  'food',
  'groceries',
  'fun',
  'movies',
  'essential',
  'probably unnecessary',
  'critical',
  'no other option',
  'entertainment',
  'gift',
  'recurring',
  'one time',
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const monthDayMap = [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

//___________________________________//
//__________UTILITY FUNCS____________//
//___________________________________//

const random = (min, max) => Math.floor(Math.random() * (max - min) + min); // Gets a random number / index
const pickOne = (array) => array[random(0, array.length - 1)]; // Gets a random element from an array
const pickSome = (array) => { // Gets 1-3 random elements from an array
  const someTags = [];
  for (let i = 0; i < random(1, 3); i++) {
    someTags.push(pickOne(array));
  }
  return someTags;
};
const getItems = () => ([pickOne(items), pickOne(costs), pickOne(locations), pickSome(tags)]); // Collects random arguments for a new expense

function Expense (item, cost, location, tags) {
  this.item = item;
  this.cost = cost;
  this.location = location;
  this.tags = tags;
};

//___________________________________//
//____________REFERENCE______________//
//___________________________________//

const Structure = [
  {
    year: Number,
    months: [
      {
        month: String,
        income: [
          {
            source: String,
            amount: Number
          }
        ],
        expenses: [
          {
            item: String,
            cost: Number,
            location: String,
            tags: [
              String
            ],
          },
        ],
        days: [
          {
            day: Number,
            expenses: [
              {
                item: String,
                cost: Number,
                location: String,
                tags: [
                  String
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

//___________________________________//
//______________SCRIPT_______________//
//___________________________________//

const year = (YYYY) => {

  // Will hold all the months for the year
  let year = {};
  year.year = YYYY || 2020;
  year.months = [];

  // Create all twelve months for the year
  for (let i = 0; i < 12; i++) {
    const month = {};

    // Name the month
    month.month = months[i]; 

    // Add monthly income
    month.income = new Array(2).fill(null).map((item, i) => ({ item: income[i], amount: incomeAmounts[i] }))

    // Add monthly expenses
    month.expenses = new Array(4).fill(null).map((item, i) =>({ item: monItems[i], cost: monCosts[i] })); 

    // Fill the days array
    month.days = new Array(monthDayMap[i]).fill({}).map((day, i) => ({ day: i + 1, expenses: [] }));

    // Create a random number of expenses for the month to distribute amongth the months days
    for (let i = 0; i < random(30, 40); i++) {
      // Create a new expense
      const newExpense = new Expense(...getItems());
      // Put the expense in a random day
      month.days[random(0, month.days.length - 1)].expenses.push(newExpense);
    }
    // Put newly created month into the year
    year.months.push(month);
  }

  return year;
};

module.exports.years = () => ([year(2018), year(2019), year(2020)]);


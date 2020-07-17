const data = [
  {
    "year": 2018,
    "months": [
      {
        "month": "January",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "books",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "dinner",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "lunch",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "travel",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "fruit",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "travel",
                  "no other option"
                ]
              },
              {
                "item": "snacks",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "critical",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "books",
                "cost": 17.72,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "dinner",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "food",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "food",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "travel",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "art",
                "cost": 9.1,
                "location": "Whole Foods",
                "tags": [
                  "critical",
                  "essential"
                ]
              },
              {
                "item": "art",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "movie",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "fun",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "books",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "gas",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "groceries"
                ]
              },
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "gift",
                  "travel"
                ]
              },
              {
                "item": "snacks",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "entertainment",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "food",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "veggies",
                "cost": 1.2,
                "location": "Target",
                "tags": [
                  "recurring",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "art",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "lunch",
                "cost": 17.72,
                "location": "Fluerets",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "food",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "movies",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "entertainment",
                  "groceries"
                ]
              },
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "probably unnecessary",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "books",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "gift",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "groceries",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "fruit",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "food",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "February",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "books",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "critical",
                  "no other option"
                ]
              },
              {
                "item": "food",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "gift",
                "cost": 4.88,
                "location": "Fluerets",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "veggies",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "critical",
                  "movies"
                ]
              },
              {
                "item": "books",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "critical",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "art",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "food",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "critical",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "food",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary",
                  "movies"
                ]
              },
              {
                "item": "veggies",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "gift",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "gift",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "recurring",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "probably unnecessary",
                  "recurring"
                ]
              },
              {
                "item": "art",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "food",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "recurring"
                ]
              },
              {
                "item": "food",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "gift",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "transportation",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "notebook",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "game",
                "cost": 9.1,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "movie",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "critical",
                  "essential"
                ]
              },
              {
                "item": "breakfast",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "lunch",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "veggies",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "transportation",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "gas",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "food",
                  "transportation"
                ]
              },
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "critical",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "car wash",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "movie",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "movie",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "lunch",
                "cost": 17.72,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          }
        ]
      },
      {
        "month": "March",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 20.34,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "art",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "veggies",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "transportation",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "books",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "movie",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "gift",
                  "no other option"
                ]
              },
              {
                "item": "gift",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "food",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "lunch",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "dinner",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "gift",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "gift",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "movie",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "restaurant",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "dinner",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "food"
                ]
              },
              {
                "item": "dinner",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "game",
                "cost": 13.2,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "gas",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "notebook",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "game",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "no other option",
                  "no other option"
                ]
              },
              {
                "item": "books",
                "cost": 1.2,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "gift",
                  "essential"
                ]
              },
              {
                "item": "books",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "movie",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "fun",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "food",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "Fluerets",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "lunch",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "April",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "dinner",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "snacks",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "food",
                  "food"
                ]
              },
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "critical",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "car wash",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "books",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "gas",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "car wash",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "food",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "movies",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 17.72,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "snacks",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "food",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "movies",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "movies",
                  "fun"
                ]
              },
              {
                "item": "game",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "veggies",
                "cost": 17.72,
                "location": "Fluerets",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "books",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "dinner",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "probably unnecessary",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "car wash",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "travel",
                  "essential"
                ]
              },
              {
                "item": "food",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "food",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "gift",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "food",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "travel",
                  "transportation"
                ]
              },
              {
                "item": "dinner",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "entertainment",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "snacks",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "food",
                  "groceries"
                ]
              },
              {
                "item": "art",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "May",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "car wash",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "art",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "art",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "books",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 12.01,
                "location": "Amazon",
                "tags": [
                  "groceries",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "gas",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Fluerets",
                "tags": [
                  "transportation",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "lunch",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "game",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "critical",
                  "entertainment"
                ]
              },
              {
                "item": "food",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "books",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "critical",
                  "entertainment"
                ]
              },
              {
                "item": "books",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "veggies",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "food",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "travel",
                  "entertainment"
                ]
              },
              {
                "item": "art",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "food",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "transportation",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "entertainment",
                  "travel"
                ]
              },
              {
                "item": "restaurant",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "veggies",
                "cost": 19.99,
                "location": "Fluerets",
                "tags": [
                  "groceries",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "fruit",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "travel",
                  "fun"
                ]
              },
              {
                "item": "art",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "recurring",
                  "recurring"
                ]
              },
              {
                "item": "lunch",
                "cost": 14.08,
                "location": "Trader Joes",
                "tags": [
                  "recurring",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "gas",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "food",
                  "entertainment"
                ]
              },
              {
                "item": "movie",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "essential"
                ]
              },
              {
                "item": "fruit",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "gift",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "gift",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              },
              {
                "item": "gift",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "entertainment"
                ]
              },
              {
                "item": "movie",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "June",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "books",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "food",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "entertainment",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": []
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "car wash",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "breakfast",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "dinner",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "fun",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "food",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "food",
                "cost": 17.72,
                "location": "Chevron",
                "tags": [
                  "essential",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "fruit",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "game",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "travel"
                ]
              },
              {
                "item": "veggies",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "groceries",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "books",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "critical",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "art",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "gift",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "fruit",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "books",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "notebook",
                "cost": 13.2,
                "location": "Trader Joes",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "critical",
                  "probably unnecessary"
                ]
              },
              {
                "item": "notebook",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "recurring",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "groceries",
                  "essential"
                ]
              },
              {
                "item": "notebook",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "movies",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "movie",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "travel",
                  "recurring"
                ]
              },
              {
                "item": "books",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "recurring",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "July",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "food",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 19.99,
                "location": "Fluerets",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "dinner",
                "cost": 17.72,
                "location": "Shell",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "books",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "game",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "gas",
                "cost": 3.2,
                "location": "KP Market",
                "tags": [
                  "fun",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "snacks",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "books",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "gas",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "food",
                  "transportation"
                ]
              },
              {
                "item": "gift",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "food",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "art",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "game",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "car wash",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "entertainment",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "recurring",
                  "groceries"
                ]
              },
              {
                "item": "art",
                "cost": 19.99,
                "location": "Fluerets",
                "tags": [
                  "fun",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "food",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "game",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "gift",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "snacks",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "movie",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "game",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "gift",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "food",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "art",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "dinner",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "probably unnecessary",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "August",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "art",
                "cost": 12.01,
                "location": "Amazon",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "critical",
                  "critical"
                ]
              },
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "lunch",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "movies",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "gift",
                  "fun"
                ]
              },
              {
                "item": "gift",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "fruit",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "food",
                  "essential"
                ]
              },
              {
                "item": "snacks",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "food",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "notebook",
                "cost": 5.13,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "lunch",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "snacks",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "veggies",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "essential",
                  "essential"
                ]
              },
              {
                "item": "breakfast",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "lunch",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "food",
                  "fun"
                ]
              },
              {
                "item": "gift",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "veggies",
                "cost": 13.2,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "car wash",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "food",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "transportation",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "books",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "game",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "travel",
                  "movies"
                ]
              },
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "food",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "art",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "critical",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "gift",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "art",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "food",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "fruit",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "movies",
                  "fun"
                ]
              },
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "probably unnecessary",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "veggies",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "food",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "food",
                "cost": 9.1,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "food",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "September",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 17.72,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "game",
                "cost": 13.2,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "art",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "snacks",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "art",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "transportation",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "art",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "car wash",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "critical",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "recurring",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "snacks",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "travel"
                ]
              },
              {
                "item": "dinner",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "game",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "transportation",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "dinner",
                "cost": 50.31,
                "location": "Costco",
                "tags": [
                  "probably unnecessary",
                  "probably unnecessary"
                ]
              },
              {
                "item": "gas",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "game",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "transportation",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 4.88,
                "location": "Fluerets",
                "tags": [
                  "probably unnecessary",
                  "movies"
                ]
              },
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Fluerets",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "movie",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "restaurant",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "movies",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "gift",
                  "travel"
                ]
              },
              {
                "item": "lunch",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "snacks",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              },
              {
                "item": "gift",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "fun",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "snacks",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "restaurant",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "movie",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "books",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "movie",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "art",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "October",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              },
              {
                "item": "gas",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "game",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "game",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "transportation",
                  "gift"
                ]
              },
              {
                "item": "books",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "essential",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary",
                  "essential"
                ]
              },
              {
                "item": "game",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "food",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "snacks",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "groceries",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "critical",
                  "recurring"
                ]
              },
              {
                "item": "game",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "recurring",
                  "gift"
                ]
              },
              {
                "item": "breakfast",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "entertainment",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "game",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "recurring",
                  "probably unnecessary"
                ]
              },
              {
                "item": "car wash",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "gas",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "food",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "car wash",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": []
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "gas",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "restaurant",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "food",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Costco",
                "tags": [
                  "no other option",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "notebook",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "snacks",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "game",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "essential",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "snacks",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "fruit",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "food",
                "cost": 17.72,
                "location": "Shell",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "gas",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "transportation",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "November",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "gas",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "fun",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "dinner",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "game",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "essential",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "books",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "books",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "entertainment",
                  "critical"
                ]
              },
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "food",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "fun",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "art",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "food",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "gift",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "gift",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "gift",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "recurring"
                ]
              },
              {
                "item": "gift",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "car wash",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "no other option",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "essential",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "art",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "food",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "veggies",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "books",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "dinner",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "entertainment",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "gift",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "gas",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "notebook",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "groceries"
                ]
              },
              {
                "item": "game",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "recurring",
                  "fun"
                ]
              },
              {
                "item": "dinner",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "game",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "notebook",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "food",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "December",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "food",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "Fluerets",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "restaurant",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "art",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "movies",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "transportation"
                ]
              },
              {
                "item": "books",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "food",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "travel",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "game",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "game",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "fun",
                  "no other option"
                ]
              },
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "dinner",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "restaurant",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": []
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "books",
                "cost": 19.99,
                "location": "Chevron",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "gift",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "transportation",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "critical",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "food",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "transportation",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "dinner",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "entertainment"
                ]
              },
              {
                "item": "car wash",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "art",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "game",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "lunch",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "groceries",
                  "entertainment"
                ]
              },
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      }
    ]
  },
  {
    "year": 2019,
    "months": [
      {
        "month": "January",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "gift",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "critical",
                  "probably unnecessary"
                ]
              },
              {
                "item": "game",
                "cost": 13.2,
                "location": "Shell",
                "tags": [
                  "critical",
                  "travel"
                ]
              },
              {
                "item": "food",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "essential",
                  "food"
                ]
              },
              {
                "item": "fruit",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "fun",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "groceries",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "food",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "car wash",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Fluerets",
                "tags": [
                  "travel",
                  "food"
                ]
              },
              {
                "item": "veggies",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "transportation",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "game",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "no other option",
                  "food"
                ]
              },
              {
                "item": "art",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "lunch",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "art",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "probably unnecessary",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "car wash",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "books",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "recurring"
                ]
              },
              {
                "item": "books",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "food",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "gas",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "gift",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "snacks",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "gift",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "notebook",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "entertainment",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "dinner",
                "cost": 19.99,
                "location": "Fluerets",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "books",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "lunch",
                "cost": 13.2,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "gas",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "February",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "movie",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "no other option"
                ]
              },
              {
                "item": "gift",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "car wash",
                "cost": 1.2,
                "location": "Target",
                "tags": [
                  "fun",
                  "travel"
                ]
              },
              {
                "item": "gas",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "movies",
                  "gift"
                ]
              },
              {
                "item": "books",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "gas",
                "cost": 17.72,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "fun"
                ]
              },
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "entertainment",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "snacks",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "recurring",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "travel"
                ]
              },
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "groceries",
                  "critical"
                ]
              },
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "essential",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "fruit",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "art",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "movies",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "books",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "movies",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": []
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "gift",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "snacks",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "no other option",
                  "groceries"
                ]
              },
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "lunch",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "groceries",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "notebook",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "art",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "snacks",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "notebook",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "groceries",
                  "critical"
                ]
              },
              {
                "item": "books",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "essential"
                ]
              },
              {
                "item": "veggies",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "car wash",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "movie",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "travel",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "movie",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          }
        ]
      },
      {
        "month": "March",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "fruit",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "gas",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "lunch",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "game",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "gas",
                "cost": 9.1,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "fruit",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "probably unnecessary",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "fruit",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "fruit",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "groceries",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "car wash",
                "cost": 17.72,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "critical",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "essential",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "game",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "critical",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "lunch",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "gift",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "fruit",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "movie",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "critical",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "fun",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "fruit",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "gas",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "art",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "fun",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "gas",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "movies"
                ]
              },
              {
                "item": "movie",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "books",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "lunch",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "snacks",
                "cost": 50.31,
                "location": "Costco",
                "tags": [
                  "movies",
                  "gift"
                ]
              },
              {
                "item": "restaurant",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "lunch",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "movies",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "travel",
                  "probably unnecessary"
                ]
              },
              {
                "item": "notebook",
                "cost": 13.2,
                "location": "Shell",
                "tags": [
                  "travel",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "April",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "food",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "movie",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "art",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "gift",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "books",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "game",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "game",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "snacks",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "game",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "veggies",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "probably unnecessary",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "game",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "gift",
                  "no other option"
                ]
              },
              {
                "item": "food",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "art",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "art",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "travel",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "Costco",
                "tags": [
                  "fun",
                  "movies"
                ]
              },
              {
                "item": "snacks",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "recurring",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "car wash",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "gift",
                  "no other option"
                ]
              },
              {
                "item": "gift",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "fruit",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "recurring",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "movie",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "snacks",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "essential",
                  "fun"
                ]
              },
              {
                "item": "art",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "notebook",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "movies",
                  "travel"
                ]
              },
              {
                "item": "veggies",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "groceries",
                  "movies"
                ]
              },
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Fluerets",
                "tags": [
                  "critical",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "notebook",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "books",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "transportation",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "May",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "food",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "recurring",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "books",
                "cost": 19.99,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "lunch",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "gift",
                "cost": 17.72,
                "location": "Fluerets",
                "tags": [
                  "travel",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "art",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "notebook",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "food",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "food"
                ]
              },
              {
                "item": "snacks",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "groceries",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "books",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "notebook",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "no other option"
                ]
              },
              {
                "item": "game",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "food",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "food",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "game",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "critical",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "food",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "food",
                  "groceries"
                ]
              },
              {
                "item": "gas",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "fruit",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "books",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "car wash",
                "cost": 17.72,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "art",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "movies",
                  "transportation"
                ]
              },
              {
                "item": "books",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "no other option",
                  "no other option"
                ]
              },
              {
                "item": "game",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "probably unnecessary",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "gas",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary",
                  "essential"
                ]
              },
              {
                "item": "food",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "movie",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "recurring",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "gift",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "food",
                "cost": 19.99,
                "location": "Chevron",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "notebook",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "gas",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "June",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "movie",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "game",
                "cost": 12.01,
                "location": "Amazon",
                "tags": [
                  "gift",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "food",
                "cost": 50.31,
                "location": "Fluerets",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "dinner",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "fruit",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "art",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "critical",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "art",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "snacks",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "essential",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "food",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "fruit",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "Fluerets",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "books",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "Whole Foods",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "dinner",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "lunch",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "movies",
                  "recurring"
                ]
              },
              {
                "item": "gas",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "books",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "movies",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "fruit",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "fun",
                  "groceries"
                ]
              },
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "lunch",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "books",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "fruit",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "recurring",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "movies",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "gas",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "transportation",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "movie",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "fun",
                  "critical"
                ]
              },
              {
                "item": "lunch",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "food",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "car wash",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "movies"
                ]
              },
              {
                "item": "lunch",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "gift",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "July",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "gift",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "food",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "dinner",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "veggies",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "art",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "gas",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "movies",
                  "movies"
                ]
              },
              {
                "item": "game",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "snacks",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary",
                  "food"
                ]
              },
              {
                "item": "lunch",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "movie",
                "cost": 5.13,
                "location": "Fluerets",
                "tags": [
                  "critical",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "snacks",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "transportation",
                  "transportation"
                ]
              },
              {
                "item": "car wash",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "travel",
                  "food"
                ]
              },
              {
                "item": "books",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "fruit",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "veggies",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "food",
                  "travel"
                ]
              },
              {
                "item": "snacks",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "lunch",
                "cost": 3.2,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "books",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "snacks",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "notebook",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "snacks",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "gift",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "fun",
                  "essential"
                ]
              },
              {
                "item": "gas",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "fun",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "fun",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "notebook",
                "cost": 13.2,
                "location": "Costco",
                "tags": [
                  "fun",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "game",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "books",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "August",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "art",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "food",
                  "probably unnecessary"
                ]
              },
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "recurring",
                  "recurring"
                ]
              },
              {
                "item": "car wash",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "veggies",
                "cost": 9.1,
                "location": "Costco",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "food",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "food",
                  "essential"
                ]
              },
              {
                "item": "books",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "fun",
                  "probably unnecessary"
                ]
              },
              {
                "item": "books",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "art",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "gas",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "fun",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "art",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "movie",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "movies",
                  "travel"
                ]
              },
              {
                "item": "game",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "car wash",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "travel",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "fruit",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "art",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "fruit",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "entertainment",
                  "no other option"
                ]
              },
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "travel",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "books",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary",
                  "gift"
                ]
              },
              {
                "item": "books",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "snacks",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "books",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "essential",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "art",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "transportation",
                  "travel"
                ]
              },
              {
                "item": "dinner",
                "cost": 50.31,
                "location": "Fluerets",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "snacks",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "fun",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "entertainment"
                ]
              },
              {
                "item": "lunch",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "September",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "books",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "critical",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "movie",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "snacks",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "fun",
                  "transportation"
                ]
              },
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "travel",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "movie",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "food",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "veggies",
                "cost": 1.2,
                "location": "Target",
                "tags": [
                  "recurring",
                  "food"
                ]
              },
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "fruit",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "food",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "food",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "groceries",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "movie",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "recurring",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "food",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              },
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "game",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "fun",
                  "movies"
                ]
              },
              {
                "item": "dinner",
                "cost": 17.72,
                "location": "Fluerets",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "movie",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "game",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "fruit",
                "cost": 50.31,
                "location": "Costco",
                "tags": [
                  "fun",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "movie",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "snacks",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "fruit",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "movie",
                "cost": 9.1,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "breakfast",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "gift",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "no other option",
                  "no other option"
                ]
              },
              {
                "item": "veggies",
                "cost": 9.1,
                "location": "Trader Joes",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "car wash",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "October",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "movie",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "transportation",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "gas",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "dinner",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "lunch",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "snacks",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "gift",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "car wash",
                "cost": 17.72,
                "location": "Chevron",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "entertainment",
                  "gift"
                ]
              },
              {
                "item": "food",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "veggies",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "restaurant",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "game",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "gift",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": []
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "no other option",
                  "recurring"
                ]
              },
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "movies",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "art",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "snacks",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "recurring",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "lunch",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "books",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "game",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "veggies",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "groceries",
                  "travel"
                ]
              },
              {
                "item": "car wash",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "gas",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "food",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "movies",
                  "critical"
                ]
              },
              {
                "item": "game",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "food",
                  "travel"
                ]
              },
              {
                "item": "breakfast",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "gas",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "entertainment",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "November",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "notebook",
                "cost": 19.99,
                "location": "Chevron",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "car wash",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "books",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "game",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "recurring",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "game",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "movie",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "movies",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "car wash",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "gas",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary",
                  "recurring"
                ]
              },
              {
                "item": "fruit",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "lunch",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "movie",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "gas",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "no other option",
                  "food"
                ]
              },
              {
                "item": "breakfast",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "fun",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "gift",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "gift",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "lunch",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "movies",
                  "gift"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "movie",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "gas",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "travel",
                  "probably unnecessary"
                ]
              },
              {
                "item": "breakfast",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "food",
                "cost": 19.99,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary",
                  "critical"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "lunch",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "gift",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "books",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "books",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "entertainment",
                  "transportation"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "food",
                  "transportation"
                ]
              },
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "fun",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "Whole Foods",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "December",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "no other option",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "food",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "veggies",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "transportation",
                  "food"
                ]
              },
              {
                "item": "car wash",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "recurring",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Whole Foods",
                "tags": [
                  "entertainment",
                  "gift"
                ]
              },
              {
                "item": "books",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "movie",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "art",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "essential",
                  "entertainment"
                ]
              },
              {
                "item": "art",
                "cost": 13.2,
                "location": "Target",
                "tags": [
                  "probably unnecessary",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "no other option",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "books",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "travel",
                  "essential"
                ]
              },
              {
                "item": "gas",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "food",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "gift",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": []
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "gas",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "gift",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "fruit",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "books",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "game",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "essential",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "movies"
                ]
              },
              {
                "item": "fruit",
                "cost": 20.34,
                "location": "Fluerets",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "restaurant",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "gas",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "transportation",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      }
    ]
  },
  {
    "year": 2020,
    "months": [
      {
        "month": "January",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "gas",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "movies",
                  "food"
                ]
              },
              {
                "item": "food",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "movie",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "food",
                "cost": 4.88,
                "location": "Fluerets",
                "tags": [
                  "recurring",
                  "travel"
                ]
              },
              {
                "item": "game",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "transportation",
                  "gift"
                ]
              },
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "groceries",
                  "probably unnecessary"
                ]
              },
              {
                "item": "art",
                "cost": 13.2,
                "location": "Target",
                "tags": [
                  "critical",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "veggies",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "snacks",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "critical",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "snacks",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "movies",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "food"
                ]
              },
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "snacks",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "breakfast",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "entertainment",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "dinner",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "critical",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "game",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "food"
                ]
              },
              {
                "item": "books",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "game",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "gas",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "snacks",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "lunch",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "entertainment",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "gift",
                  "food"
                ]
              },
              {
                "item": "snacks",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "food",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "fruit",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "books",
                "cost": 17.72,
                "location": "Fluerets",
                "tags": [
                  "entertainment",
                  "entertainment"
                ]
              },
              {
                "item": "gift",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              },
              {
                "item": "notebook",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "February",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "food",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "critical",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "books",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "transportation",
                  "entertainment"
                ]
              },
              {
                "item": "snacks",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "transportation",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "veggies",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "game",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "groceries",
                  "entertainment"
                ]
              },
              {
                "item": "movie",
                "cost": 9.1,
                "location": "Fluerets",
                "tags": [
                  "essential",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "books",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "critical",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "dinner",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "groceries",
                  "no other option"
                ]
              },
              {
                "item": "lunch",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "food",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "entertainment",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "movies",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "gas",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "art",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "fruit",
                "cost": 8.89,
                "location": "Trader Joes",
                "tags": [
                  "critical",
                  "transportation"
                ]
              },
              {
                "item": "notebook",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "snacks",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "fun",
                  "fun"
                ]
              },
              {
                "item": "books",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "groceries",
                  "travel"
                ]
              },
              {
                "item": "gift",
                "cost": 5.13,
                "location": "Costco",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "food",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "gas",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "movies",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "restaurant",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "food",
                  "gift"
                ]
              },
              {
                "item": "snacks",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "recurring",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "gift",
                  "groceries"
                ]
              },
              {
                "item": "restaurant",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "restaurant",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary",
                  "fun"
                ]
              },
              {
                "item": "breakfast",
                "cost": 5.13,
                "location": "Costco",
                "tags": [
                  "essential",
                  "movies"
                ]
              },
              {
                "item": "restaurant",
                "cost": 5.13,
                "location": "Costco",
                "tags": [
                  "recurring",
                  "recurring"
                ]
              },
              {
                "item": "food",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "travel",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": []
          }
        ]
      },
      {
        "month": "March",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "gas",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "critical",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "gift",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "critical"
                ]
              },
              {
                "item": "gas",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "travel",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "dinner",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "books",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "fun",
                  "travel"
                ]
              },
              {
                "item": "snacks",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "no other option",
                  "travel"
                ]
              },
              {
                "item": "dinner",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "food",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "entertainment"
                ]
              },
              {
                "item": "food",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "entertainment"
                ]
              },
              {
                "item": "gas",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "notebook",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "movie",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "movie",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "books",
                "cost": 4.88,
                "location": "Whole Foods",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "movie",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "fruit",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "restaurant",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "transportation",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "snacks",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "restaurant",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "groceries",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "fruit",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "car wash",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "essential"
                ]
              },
              {
                "item": "dinner",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "art",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "recurring",
                  "gift"
                ]
              },
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "April",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "KP Market",
                "tags": [
                  "movies",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "art",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Whole Foods",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "breakfast",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "food",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "KP Market",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "gift",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "movie",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary",
                  "gift"
                ]
              },
              {
                "item": "books",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "veggies",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "veggies",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": []
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "dinner",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "movie",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "gas",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "recurring",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "game",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "movies",
                  "no other option"
                ]
              },
              {
                "item": "game",
                "cost": 17.72,
                "location": "Chevron",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "movie",
                "cost": 50.31,
                "location": "Costco",
                "tags": [
                  "travel",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "movies",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "lunch",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "food",
                  "movies"
                ]
              },
              {
                "item": "books",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "entertainment",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "car wash",
                "cost": 12.01,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "essential"
                ]
              },
              {
                "item": "breakfast",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              },
              {
                "item": "movie",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "essential",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Amazon",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "fruit",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "books",
                "cost": 4.88,
                "location": "Fluerets",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "May",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Fluerets",
                "tags": [
                  "critical",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "critical",
                  "entertainment"
                ]
              },
              {
                "item": "gas",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "movies",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              },
              {
                "item": "veggies",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "gas",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "movies",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "movie",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "food",
                  "transportation"
                ]
              },
              {
                "item": "snacks",
                "cost": 9.1,
                "location": "KP Market",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "car wash",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "food",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "game",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "snacks",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "dinner",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "groceries",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": []
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "car wash",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "fun",
                  "movies"
                ]
              },
              {
                "item": "gift",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "movies",
                  "recurring"
                ]
              },
              {
                "item": "food",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "recurring",
                  "fun"
                ]
              },
              {
                "item": "snacks",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "food",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "game",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "movies",
                  "food"
                ]
              },
              {
                "item": "fruit",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "game",
                "cost": 8.89,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "gift",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "game",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              },
              {
                "item": "restaurant",
                "cost": 5.13,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": []
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "art",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "game",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "critical",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "books",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "groceries",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "transportation",
                  "food"
                ]
              },
              {
                "item": "breakfast",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "no other option",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "art",
                "cost": 17.72,
                "location": "Fluerets",
                "tags": [
                  "transportation",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 13.2,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "no other option"
                ]
              },
              {
                "item": "notebook",
                "cost": 20.34,
                "location": "Costco",
                "tags": [
                  "gift",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "dinner",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "recurring",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": []
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "car wash",
                "cost": 3.2,
                "location": "Chevron",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "gas",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "movies",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "June",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "food",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "food",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "car wash",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "gas",
                "cost": 17.72,
                "location": "Amazon",
                "tags": [
                  "food",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "art",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "groceries",
                  "gift"
                ]
              },
              {
                "item": "movie",
                "cost": 8.89,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "game",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "fun",
                  "gift"
                ]
              },
              {
                "item": "snacks",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "car wash",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "movies",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "game",
                "cost": 50.31,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "lunch",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "recurring",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "gift",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "movies",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "fruit",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "food",
                  "transportation"
                ]
              },
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "movies",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "veggies",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "food",
                "cost": 19.99,
                "location": "Whole Foods",
                "tags": [
                  "gift",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "gas",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "groceries",
                  "travel"
                ]
              },
              {
                "item": "veggies",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "car wash",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "fun",
                  "no other option"
                ]
              },
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Costco",
                "tags": [
                  "fun",
                  "transportation"
                ]
              },
              {
                "item": "dinner",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "food",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "transportation",
                  "entertainment"
                ]
              },
              {
                "item": "dinner",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "transportation"
                ]
              },
              {
                "item": "game",
                "cost": 14.5,
                "location": "Trader Joes",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "game",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "probably unnecessary",
                  "fun"
                ]
              },
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "car wash",
                "cost": 20.34,
                "location": "Trader Joes",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "July",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "gift",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": []
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "gas",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "gift",
                "cost": 19.99,
                "location": "Amazon",
                "tags": [
                  "food",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "gift",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary",
                  "gift"
                ]
              },
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "essential",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "veggies",
                "cost": 19.99,
                "location": "Target",
                "tags": [
                  "movies",
                  "no other option"
                ]
              },
              {
                "item": "notebook",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "veggies",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "movie",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "entertainment",
                  "groceries"
                ]
              },
              {
                "item": "art",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": []
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "movie",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "food",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "notebook",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "food"
                ]
              },
              {
                "item": "gas",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "probably unnecessary",
                  "no other option"
                ]
              },
              {
                "item": "books",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "food",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "gas",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "gift",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "movies",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "dinner",
                "cost": 5.13,
                "location": "Shell",
                "tags": [
                  "fun",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "fruit",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "lunch",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 17.72,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              },
              {
                "item": "breakfast",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "no other option",
                  "gift"
                ]
              },
              {
                "item": "car wash",
                "cost": 1.2,
                "location": "Target",
                "tags": [
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "gift",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary",
                  "essential"
                ]
              },
              {
                "item": "food",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "veggies",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "movies",
                  "gift"
                ]
              },
              {
                "item": "breakfast",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "gift",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "entertainment",
                  "probably unnecessary"
                ]
              },
              {
                "item": "notebook",
                "cost": 9.1,
                "location": "Whole Foods",
                "tags": [
                  "essential",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "August",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "gas",
                "cost": 4.88,
                "location": "Fluerets",
                "tags": [
                  "gift",
                  "travel"
                ]
              },
              {
                "item": "gift",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "movie",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "fun",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "art",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "snacks",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "movie",
                "cost": 50.31,
                "location": "Costco",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "fruit",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "fun",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 14.08,
                "location": "Shell",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "art",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "game",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "gift",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "movie",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "books",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "critical",
                  "movies"
                ]
              },
              {
                "item": "books",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "groceries",
                  "essential"
                ]
              },
              {
                "item": "lunch",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "snacks",
                "cost": 9.1,
                "location": "Amazon",
                "tags": [
                  "probably unnecessary",
                  "movies"
                ]
              },
              {
                "item": "food",
                "cost": 14.08,
                "location": "Fluerets",
                "tags": [
                  "no other option",
                  "food"
                ]
              },
              {
                "item": "books",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "snacks",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": []
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "notebook",
                "cost": 8.89,
                "location": "Chevron",
                "tags": [
                  "food",
                  "travel"
                ]
              },
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "food",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "gift",
                "cost": 5.13,
                "location": "Whole Foods",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "books",
                "cost": 14.08,
                "location": "Chevron",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "fruit",
                "cost": 30.62,
                "location": "Amazon",
                "tags": [
                  "transportation",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "veggies",
                "cost": 5.13,
                "location": "Chevron",
                "tags": [
                  "movies",
                  "movies"
                ]
              },
              {
                "item": "restaurant",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "fun",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": [
              {
                "item": "gas",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "food",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "fruit",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "movies",
                  "entertainment"
                ]
              },
              {
                "item": "art",
                "cost": 13.2,
                "location": "Target",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "notebook",
                "cost": 13.2,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "movie",
                "cost": 50.31,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "September",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": []
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "food",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "entertainment",
                  "gift"
                ]
              },
              {
                "item": "car wash",
                "cost": 19.99,
                "location": "Trader Joes",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "game",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "food",
                "cost": 14.5,
                "location": "Amazon",
                "tags": [
                  "food",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "lunch",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "movies",
                  "probably unnecessary"
                ]
              },
              {
                "item": "veggies",
                "cost": 50.31,
                "location": "Costco",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "dinner",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              },
              {
                "item": "breakfast",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "gift",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "fruit",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "veggies",
                "cost": 50.31,
                "location": "Amazon",
                "tags": [
                  "groceries",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": []
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "game",
                "cost": 30.62,
                "location": "Trader Joes",
                "tags": [
                  "gift",
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "game",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "notebook",
                "cost": 17.72,
                "location": "Costco",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "books",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "food",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "art",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "essential",
                  "entertainment"
                ]
              },
              {
                "item": "veggies",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "movie",
                "cost": 17.72,
                "location": "Shell",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 5.13,
                "location": "Costco",
                "tags": [
                  "travel",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "fruit",
                "cost": 8.89,
                "location": "Costco",
                "tags": [
                  "fun",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": []
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "notebook",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "essential",
                  "transportation"
                ]
              },
              {
                "item": "gas",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "groceries",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "books",
                "cost": 9.1,
                "location": "Chevron",
                "tags": [
                  "essential",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": []
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "gas",
                "cost": 30.62,
                "location": "KP Market",
                "tags": [
                  "critical",
                  "groceries"
                ]
              },
              {
                "item": "movie",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "car wash",
                "cost": 12.01,
                "location": "Costco",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "books",
                "cost": 13.2,
                "location": "KP Market",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": []
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 9.1,
                "location": "Target",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "restaurant",
                "cost": 20.34,
                "location": "Target",
                "tags": [
                  "recurring",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "October",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "groceries",
                  "fun"
                ]
              },
              {
                "item": "art",
                "cost": 4.88,
                "location": "Trader Joes",
                "tags": [
                  "essential",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": []
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "gift",
                "cost": 30.62,
                "location": "Shell",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": []
          },
          {
            "day": 5,
            "expenses": []
          },
          {
            "day": 6,
            "expenses": []
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "food",
                "cost": 20.34,
                "location": "Chevron",
                "tags": [
                  "critical",
                  "probably unnecessary"
                ]
              },
              {
                "item": "breakfast",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "Trader Joes",
                "tags": [
                  "no other option",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": []
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 4.88,
                "location": "Chevron",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "gas",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "veggies",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "gift",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": []
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "dinner",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "car wash",
                "cost": 9.1,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "game",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "fun",
                  "travel"
                ]
              },
              {
                "item": "game",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "movie",
                "cost": 4.88,
                "location": "Amazon",
                "tags": [
                  "food",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "fruit",
                "cost": 9.1,
                "location": "Costco",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": []
          },
          {
            "day": 18,
            "expenses": [
              {
                "item": "lunch",
                "cost": 13.2,
                "location": "Fluerets",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "books",
                "cost": 4.88,
                "location": "KP Market",
                "tags": [
                  "essential",
                  "essential"
                ]
              },
              {
                "item": "snacks",
                "cost": 17.72,
                "location": "KP Market",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "books",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "essential",
                  "recurring"
                ]
              },
              {
                "item": "lunch",
                "cost": 50.31,
                "location": "Chevron",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": []
          },
          {
            "day": 21,
            "expenses": []
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "veggies",
                "cost": 19.99,
                "location": "Costco",
                "tags": [
                  "fun"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "food",
                "cost": 17.72,
                "location": "Trader Joes",
                "tags": [
                  "entertainment"
                ]
              },
              {
                "item": "lunch",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "veggies",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "fruit",
                "cost": 1.2,
                "location": "Shell",
                "tags": [
                  "food"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 4.88,
                "location": "Shell",
                "tags": [
                  "probably unnecessary",
                  "food"
                ]
              },
              {
                "item": "gas",
                "cost": 3.2,
                "location": "Amazon",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": [
              {
                "item": "books",
                "cost": 1.2,
                "location": "Fluerets",
                "tags": [
                  "no other option",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "art",
                "cost": 1.2,
                "location": "KP Market",
                "tags": [
                  "movies"
                ]
              },
              {
                "item": "lunch",
                "cost": 19.99,
                "location": "Shell",
                "tags": [
                  "travel",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 3.2,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary"
                ]
              },
              {
                "item": "breakfast",
                "cost": 9.1,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": [
              {
                "item": "dinner",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "groceries"
                ]
              },
              {
                "item": "notebook",
                "cost": 14.08,
                "location": "Amazon",
                "tags": [
                  "food",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      },
      {
        "month": "November",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "movie",
                "cost": 5.13,
                "location": "Trader Joes",
                "tags": [
                  "gift",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "lunch",
                "cost": 1.2,
                "location": "Whole Foods",
                "tags": [
                  "recurring",
                  "transportation"
                ]
              },
              {
                "item": "gas",
                "cost": 30.62,
                "location": "Costco",
                "tags": [
                  "critical",
                  "food"
                ]
              },
              {
                "item": "lunch",
                "cost": 30.62,
                "location": "Target",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "snacks",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "critical",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 5.13,
                "location": "Fluerets",
                "tags": [
                  "recurring",
                  "travel"
                ]
              },
              {
                "item": "movie",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "travel"
                ]
              },
              {
                "item": "books",
                "cost": 3.2,
                "location": "Fluerets",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 14.5,
                "location": "Chevron",
                "tags": [
                  "food",
                  "fun"
                ]
              },
              {
                "item": "books",
                "cost": 14.5,
                "location": "Fluerets",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": []
          },
          {
            "day": 8,
            "expenses": []
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "veggies",
                "cost": 30.62,
                "location": "Fluerets",
                "tags": [
                  "travel",
                  "entertainment"
                ]
              },
              {
                "item": "dinner",
                "cost": 19.99,
                "location": "KP Market",
                "tags": [
                  "travel",
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "art",
                "cost": 14.5,
                "location": "Shell",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": []
          },
          {
            "day": 12,
            "expenses": []
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "car wash",
                "cost": 13.2,
                "location": "Amazon",
                "tags": [
                  "fun",
                  "no other option"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "lunch",
                "cost": 1.2,
                "location": "Amazon",
                "tags": [
                  "no other option"
                ]
              },
              {
                "item": "gas",
                "cost": 3.2,
                "location": "Target",
                "tags": [
                  "travel",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": [
              {
                "item": "books",
                "cost": 30.62,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary",
                  "food"
                ]
              },
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "critical",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Shell",
                "tags": [
                  "no other option",
                  "essential"
                ]
              },
              {
                "item": "breakfast",
                "cost": 8.89,
                "location": "Target",
                "tags": [
                  "fun",
                  "no other option"
                ]
              },
              {
                "item": "restaurant",
                "cost": 8.89,
                "location": "Fluerets",
                "tags": [
                  "recurring",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": []
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "snacks",
                "cost": 13.2,
                "location": "Shell",
                "tags": [
                  "transportation",
                  "fun"
                ]
              },
              {
                "item": "game",
                "cost": 1.2,
                "location": "Chevron",
                "tags": [
                  "fun",
                  "entertainment"
                ]
              },
              {
                "item": "veggies",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "critical"
                ]
              },
              {
                "item": "lunch",
                "cost": 1.2,
                "location": "Trader Joes",
                "tags": [
                  "transportation",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "books",
                "cost": 9.1,
                "location": "Costco",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "fruit",
                "cost": 50.31,
                "location": "Target",
                "tags": [
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": [
              {
                "item": "fruit",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 23,
            "expenses": []
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "gas",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "groceries",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "gift",
                "cost": 14.5,
                "location": "Target",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "car wash",
                "cost": 1.2,
                "location": "Amazon",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "lunch",
                "cost": 14.5,
                "location": "Whole Foods",
                "tags": [
                  "groceries",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": []
          },
          {
            "day": 30,
            "expenses": []
          }
        ]
      },
      {
        "month": "December",
        "income": [
          {
            "item": "Work",
            "amount": 4000
          },
          {
            "item": "Roommate",
            "amount": 1500
          }
        ],
        "expenses": [
          {
            "item": "Spotify",
            "cost": 10
          },
          {
            "item": "Insurance",
            "cost": 500
          },
          {
            "item": "BART",
            "cost": 200
          },
          {
            "item": "Rent",
            "cost": 3000
          }
        ],
        "days": [
          {
            "day": 1,
            "expenses": [
              {
                "item": "art",
                "cost": 20.34,
                "location": "Amazon",
                "tags": [
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 2,
            "expenses": [
              {
                "item": "veggies",
                "cost": 14.08,
                "location": "Costco",
                "tags": [
                  "no other option",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 3,
            "expenses": [
              {
                "item": "snacks",
                "cost": 14.08,
                "location": "Whole Foods",
                "tags": [
                  "travel",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 4,
            "expenses": [
              {
                "item": "dinner",
                "cost": 13.2,
                "location": "Target",
                "tags": [
                  "travel",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 5,
            "expenses": [
              {
                "item": "notebook",
                "cost": 3.2,
                "location": "Shell",
                "tags": [
                  "fun",
                  "groceries"
                ]
              }
            ]
          },
          {
            "day": 6,
            "expenses": [
              {
                "item": "restaurant",
                "cost": 9.1,
                "location": "Whole Foods",
                "tags": [
                  "transportation"
                ]
              }
            ]
          },
          {
            "day": 7,
            "expenses": [
              {
                "item": "gas",
                "cost": 12.01,
                "location": "KP Market",
                "tags": [
                  "critical",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 8,
            "expenses": [
              {
                "item": "notebook",
                "cost": 14.5,
                "location": "Costco",
                "tags": [
                  "food",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 9,
            "expenses": [
              {
                "item": "food",
                "cost": 12.01,
                "location": "Trader Joes",
                "tags": [
                  "probably unnecessary",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 10,
            "expenses": [
              {
                "item": "food",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "travel",
                  "critical"
                ]
              },
              {
                "item": "dinner",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "essential",
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 11,
            "expenses": [
              {
                "item": "gas",
                "cost": 50.31,
                "location": "Whole Foods",
                "tags": [
                  "probably unnecessary",
                  "movies"
                ]
              },
              {
                "item": "game",
                "cost": 12.01,
                "location": "Whole Foods",
                "tags": [
                  "no other option",
                  "food"
                ]
              }
            ]
          },
          {
            "day": 12,
            "expenses": [
              {
                "item": "movie",
                "cost": 3.2,
                "location": "KP Market",
                "tags": [
                  "entertainment",
                  "critical"
                ]
              }
            ]
          },
          {
            "day": 13,
            "expenses": [
              {
                "item": "gas",
                "cost": 8.89,
                "location": "KP Market",
                "tags": [
                  "recurring"
                ]
              },
              {
                "item": "movie",
                "cost": 4.88,
                "location": "Costco",
                "tags": [
                  "transportation"
                ]
              },
              {
                "item": "books",
                "cost": 8.89,
                "location": "Amazon",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 14,
            "expenses": [
              {
                "item": "car wash",
                "cost": 17.72,
                "location": "Target",
                "tags": [
                  "fun",
                  "recurring"
                ]
              },
              {
                "item": "game",
                "cost": 30.62,
                "location": "Chevron",
                "tags": [
                  "travel"
                ]
              }
            ]
          },
          {
            "day": 15,
            "expenses": []
          },
          {
            "day": 16,
            "expenses": [
              {
                "item": "game",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 17,
            "expenses": [
              {
                "item": "dinner",
                "cost": 14.08,
                "location": "KP Market",
                "tags": [
                  "food",
                  "movies"
                ]
              }
            ]
          },
          {
            "day": 18,
            "expenses": []
          },
          {
            "day": 19,
            "expenses": [
              {
                "item": "snacks",
                "cost": 20.34,
                "location": "Fluerets",
                "tags": [
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 20,
            "expenses": [
              {
                "item": "books",
                "cost": 20.34,
                "location": "KP Market",
                "tags": [
                  "entertainment",
                  "recurring"
                ]
              }
            ]
          },
          {
            "day": 21,
            "expenses": [
              {
                "item": "car wash",
                "cost": 12.01,
                "location": "Chevron",
                "tags": [
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 22,
            "expenses": []
          },
          {
            "day": 23,
            "expenses": [
              {
                "item": "gift",
                "cost": 5.13,
                "location": "Target",
                "tags": [
                  "fun"
                ]
              },
              {
                "item": "snacks",
                "cost": 5.13,
                "location": "Amazon",
                "tags": [
                  "critical",
                  "probably unnecessary"
                ]
              }
            ]
          },
          {
            "day": 24,
            "expenses": []
          },
          {
            "day": 25,
            "expenses": [
              {
                "item": "lunch",
                "cost": 4.88,
                "location": "Target",
                "tags": [
                  "movies",
                  "probably unnecessary"
                ]
              },
              {
                "item": "fruit",
                "cost": 14.08,
                "location": "Target",
                "tags": [
                  "movies",
                  "essential"
                ]
              },
              {
                "item": "notebook",
                "cost": 1.2,
                "location": "Costco",
                "tags": [
                  "essential",
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 26,
            "expenses": [
              {
                "item": "breakfast",
                "cost": 20.34,
                "location": "Shell",
                "tags": [
                  "movies",
                  "gift"
                ]
              },
              {
                "item": "fruit",
                "cost": 12.01,
                "location": "Fluerets",
                "tags": [
                  "no other option",
                  "gift"
                ]
              }
            ]
          },
          {
            "day": 27,
            "expenses": []
          },
          {
            "day": 28,
            "expenses": [
              {
                "item": "gas",
                "cost": 1.2,
                "location": "Whole Foods",
                "tags": [
                  "essential"
                ]
              }
            ]
          },
          {
            "day": 29,
            "expenses": [
              {
                "item": "dinner",
                "cost": 3.2,
                "location": "Whole Foods",
                "tags": [
                  "critical",
                  "entertainment"
                ]
              }
            ]
          },
          {
            "day": 30,
            "expenses": []
          },
          {
            "day": 31,
            "expenses": []
          }
        ]
      }
    ]
  }
]

const moment = require('moment');

console.log(moment())

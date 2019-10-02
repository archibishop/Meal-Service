# Meals-Service

An meals service built using Node.js and express.


# Getting Started
1. Clone the project. `git clone https://github.com/archibishop/Meal-Service.git`

2. Run `npm install` to install dependencies.

3. Run the app by running `npm run start`.


__API endpoints__

 # Features
__interface__
- User can create meals.
- User can get meals.
- User can delete meals

__API endpoints__

| End Point                                           | Verb |Use                                   |
| ----------------------------------------------------|------|--------------------------------------|
|`/api/v1/`                                           |GET   |API prefix                            |
|`/api/v1/users/meals`                                |GET   |Gets a list of meals                  |
|`/api/v1/users/meals`                                |POST  |Create meal                           |
|`/api/v1/users/meals/:id`                            |DELETE|Delete meal                           |


# How  the arguments are to be passed in postman
  * Users creates meals and the endpoint takes the following data.
  ```
  {
    "meal_name": "matooke",
    "price": 4000,
    "user_id": 1
  }
  ```

# Built With

__API endpoints__
- Node/Express
- Sequelize(ORM)
- Postgresql

# Authors
Wagubi Brian

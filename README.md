The goal of this project was to:
* Develop a UI Test Pack that can test this application using Cypress
* Use Cypress to automate taking CSV output from the application to fill in the web form I created

To see the work I contributed to the project, please see: /client/cypress :smiley: 


To get this application running on your machine, you will need the following installed:
* Node js
* MongoDB Atlas

### Macbook users
```ssh
xcode-select --install

/bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”

brew tap mongodb/brew

brew install mongodb-community@5.0

brew services start mongodb-community@5.0

brew install node
```

### Windows Users
* Add the following to your environment variables under path - "c:\Program Files\MongoDB\Server\5.0\bin"

### Backend/Server

* Clone the repo into a folder on your machine using this command
```ssh
git clone https://github.com/andyforrest/data-generator.git
```
* Open terminal and execute the following commands
```ssh
cd data-gen-csv
cd server
npm i
npm run seeds
npm start
```
* The server will run on the following url - [http://localhost:5000/](http://localhost:5000/)
* The server will be running on http://localhost:5000/api/ with endpoints
    - firstnames
    - lastnames
    - emails
    - address
    - vehicles

   ### Frontend

* Open a new terminal window and carry out the following commands
```ssh
cd data-gen-csv
cd client
npm i
npm start
```

* The client will run on the following url - [http://localhost:3000/](http://localhost:3000/)


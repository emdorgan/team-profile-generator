# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This app runs directly in the console (see getting started section) and allows the user to generate an HTML doc displaying their 'team' as a series of cards. These teams are made up of a single manager and any number of engineers or interns. The data for these teams (name, id, etc..) is provided by asking the user a series of prompts and the user can add as many engineers and interns as possible (under a single manager). A sample `index.html` has been provided in the `dist` directory.

## Getting Started

* First, make sure you have a terminal viewer installed (such as Git Bash).
* Next, install [Node.js](https://nodejs.org/).
* Open up your terminal.
* Navigate to the readme-generator folder using `cd <directory name>` to change directories (use the `ls` command to see files in your current directory).
* Run the command 'npm install inquirer' and wait for packages to install.
* Enter the command 'node index.js" and follow the promps.
* Once you've added all the engineers and interns, choose the "I'm done" option and your `index.html` file will be generated in the `dist` directory
* Copy the ENTIRE contents of the `dist` directory (make sure and get the css files).

* Dev Notes: If you want to modify the code, the test sofware can be accessed with 'npm install jest' and run with 'npm run test'

## Deployed Link

Note: There is no deployed link for this application. See "Getting Started" section for how to use this app.

## Demo

![demo of app working](demo/team-builder-demo.gif)

* [Link to app working](https://watch.screencastify.com/v/cqaA8YbgXj3lauCxSQSm)

![demo of tests passing](demo/tests-passing.gif)

* [Link to tests passing](https://watch.screencastify.com/v/AujSaSX83FXPQOssNd2S)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)
* [Node.js](https://nodejs.org/)
* [Inquirer package](https://www.npmjs.com/package/inquirer)
* [Jest package](https://jestjs.io/)

## Authors

* **Emily Dorgan** 

- [Link to Portfolio Site](https://emdorgan.github.io/updated-portfolio/)
- [Link to Github](https://github.com/emdorgan)
- [Link to LinkedIn](https://www.linkedin.com/in/emily-dorgan/)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)
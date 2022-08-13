# week-11-automation

• CREATE a new folder

• OPEN it up in the VSC

• VERIFY if node.js already installed: ```bash   node -v   ``` if not, install node.js https://nodejs.org/en/download/package-manager/#macos

• INITIALIZE new application: ```bash   npm init  ``` verify that package.json was installed in the folder

• INSTALL Axios: ```bash  npm i axios   ```

• INSTALL Chai library: ```bash  npm i chai  ``` 

• INSTALL Mocha run environment: ```  bash  npm i mocha   ``` 

• CREATE a new folder ‘test’, inside of it create a new file for testing: jokes-spec.js. Create a testing framework inside

• USE https://github.com/chucknorris-io/chuck-api to test API response

• USE axios.get('https://api.chucknorris.io/jokes/random') to send it through Axios

• In the package.json SPECIFY that we’re going to use Mocha to run tests: “test”: “mocha”

• USE ```bash   npm test  ``` command in the terminal to run the tests

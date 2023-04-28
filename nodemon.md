npm install nodemon ts-node typescript --save-dev

create file nodemon.json in your project folder and insert following
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node ./src/server.ts"
}

in package.json to the scripts add following
"dev":"nodemon"
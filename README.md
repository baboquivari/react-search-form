# XING Coding Challenge

### How to run the app

1) Clone this repo to your local machine:

```javascript
git clone https://github.com/baboquivari/xing-coding-challenge.git
```

2) Make sure you're in the root of the project folder, then install dependencies:

```javascript
npm install
```

3) Start the app, which will open a new browser window:

```javascript
npm start
```

1) If your browser doesn't open automaticall, navigate to the following URL:

```javascript
localhost:3000
```

5) Mess around with it! :)

------------------

### What I would improve if I were to keep working on this

- A full testing suite, using Jest and Enzyme.
- Prop type validation in the React components
- Rate limit the amount of API calls the user is able to make, e.g. if the user holds down a key it shouldn't trigger dozens of API calls. Could throttle the call to only allow it every 0.5 secs.
- Make the "in all categories" text dynamic, based on category selection
- Animations! EG: Fold out dropdowns, search-button style changes on-hover, etc.
- Small user experience improvements

# XING Coding Challenge


### How to run the app

1) In the terminal, clone this repo to your local machine:

```javascript
git clone https://github.com/baboquivari/xing-coding-challenge.git
```

2) Change directory so you're in the project root folder:

```javascript
cd xing-coding-challenge
```

2) Install dependencies:

```javascript
npm install
```

4) Start the app, which should open a new browser window:

```javascript
npm start
```

5) If your browser doesn't open automatically, navigate to the following URL:

```javascript
localhost:3000
```

6) Mess around with it! :)

------------------

### What I would improve if I were to keep working on this

- Add a full testing suite, using Jest and Enzyme.
- Add prop type validation in the React components.
- Rate limit the amount of API calls the user is able to make. If the user holds down a key it shouldn't trigger dozens of API calls. I could throttle the call to only allow it every 0.5 secs, for example.
- Make the "in all categories" button dynamic, based on category selection.
- Animations! EG: Fold out dropdowns, search-button style changes on-hover, etc.
- Small user experience improvements

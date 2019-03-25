# Car Dealership

View Site: [https://car-dealership-react.herokuapp.com](https://car-dealership-react.herokuapp.com)

Domain: Car Dealership
Interface: Web UI
Platform: NodeJS
Backend: JavaScript
Frontend: React

A car filtering app built with React on the frontend with styled-components for styling, axios for server calls, and react-testing-library, enzyme, chai, and jest for testing. It uses Express on the backend with Mongo as the database.
I loaded the dataset into a throwaway mlab mongo database, so while I would never usually commit something like an endpoint, in this case it's fine since it's just a test.

```bash
git clone https://github.com/justinformentin/car-dealership.git
cd car-dealership
npm i # Install server dependencies
cd client
npm i # Install client dependencies

npm run dev # Run client & server concurrently

# Run tests
cd client
npm run test
# Or run `npm start` in both the main and client directories from two different cmds
```

## Filtering
The `SideBar` components houses all of the filter inputs. When interacted with, the inputs, dropdowns, and checkboxes change the state in the `Home` components through the `filteredData` function.

- The Price inputs show you cars between the two values you entered.

- The Mile slider shows you only cars with `Low Miles` once you lower the slider past '50000'.

The `Home` makes a server call to retrieve the data, and clicking on the 'More Info' button routes you to `/car/:id/`.

## Mongo
Mongo is a NoSQL database that is great for small, proof of work application in which you just need to get your ideas out there and connect some data. It's so simple that for a dev environment, all you need to do is add the database URL to your server, and then type mongod in a terminal to get it running. I wish every database could be that easy, but we can't get everything that we want.

I mentioned small projects, but Mongo is definitely used by many large companies and projects. The only issue is that you really need to think about your data before using Mongo for your project. Most projects actually do require relations, or will in the future, and it's always a pain to switch. So if you know 100% without a doubt know that you will never need relations, Mongo is great. For everything else, it's better to use a relational database.

## Styling
I used styled-components because I like of its extensibility, as well as the fact that the Single File Component idea compliments a smaller project such as this, even though it works well on larger projects regardless! Having few, self contained, single purpose files I believe increases maintainability (up to a certain point). That paradigm is very much "React" anyway; every component should just do one thing.

Having the styling inside the file certainly cuts down on the number of files in the project, and when opening a file it's immediately clear what it does and what it looks like. The beauty of CSS-in-JS is that it's inherently extensible. Using globalStyle, props, theming, full scss functionality, etc, are all benefits. Styled components are great for tiny projects with a few files, to giant projects where reusing theming config variables through props, as well as conditional props, makes it easy to add to, and refactor projects.
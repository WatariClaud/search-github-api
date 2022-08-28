Uses default colors as for 'npx create-react-app'.

Migrated 'App' and 'App-header' class divs to index.js to contain conditional elements like Loading, Error etc.

Added conditional elements to App.js from where I run fetch query.


#### To run on local

``` git clone ``` && ``` npm install ``` && ``` npm start ```

Created with node version v16.14.2 and npm version 7.20.6 and react version 18.2.0.
Deployed on {later}

Includes basic search functionality, fancy designs can be added in later commits

#### API

Application uses REST V3 of the github search API. 'https://api.github.com'. (Limited to ``` /users ```).
Does not require authentication to search. Public github accounts and relevant details (like bio, image) are freely available. Search results are limited to 100 as per the [github documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#pagination).

#### Project Folders
Components can be found under '/src/components', while the fetch methods are under '/src/services'.

#### Project fun aspects

I particluarly enjoyed the pagination aspect of the project. This is my 2nd project buiding paginated components, so it has been a thrill learning bits that I didn't already know.

I am pleased with the general functionality of the application, and proud of the overall project, especially the pagination.

Given more time, I would implement the graphql version of the API and improve the styling.

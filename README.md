
<!-- PROJECT -->
<br />
<div align="center">

  <h3 align="center">Search Hacker News Webapp</h3>

  <p align="center">
    <a href="https://search-hacker-news-4259cc4a58c5.herokuapp.com/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#running-the-application">Running the application</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This web application is built using the <a href="https://hn.algolia.com/api">HN Search API</a>, allowing users to search for Hacker News posts and view the details of each post.
### What You Can Do

- **Search for Posts:** Look for specific topics or articles by typing keywords into the search bar.
- **See Search Results:** Below the search bar, you'll see a list of posts related to your search.
- **How It Works:** When you search, the website talks to the Hacker News database to find posts matching your words:
  
   Example of What Happens Behind the Scenes: 
   When you type something like 'test', the website asks Hacker News for posts related to 'test'.


The website quickly shows you the results you're looking for.

### Details About Posts

- **Explore Post Details:** Clicking on a post takes you to a page with more information about that post.
- **Getting Details:** By using a special code from the search results, the website fetches all the details about a post:

Example Behind-the-Scenes Action:

When you click on a post, the website talks to Hacker News again to get all the details about that specific post.


**What You'll See:**

- **Post Title:** Shows the main title of the post.
- **Points:** Tells you how popular the post is.
- **Comments:** Displays a list of all the comments people have made about that post.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the Repo
```
git clone https://github.com/komlraj/search-hacker-news/
```
Go into Folder
```
cd search-hacker-news
```
Install Dependency
```
yarn or npm install
```

## Running the application
```
yarn start or npm start
```

## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

<!-- BUILT WITH -->
## Built With
1.  [ReactJs](https://reactjs.org/) - Frontend UI Framework
2.  [Redux](https://redux.js.org/) - State management
3.  [React Router](https://reacttraining.com/react-router/) - For Routing
4.  [Lodash Debounce](https://www.npmjs.com/package/lodash.debounce) - For Debounce function


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Your Name - [@_komlraj](https://twitter.com/_komlraj) - 13kmlraj@gmail.com

Project Link: [https://github.com/komlraj/search-hacker-news](https://github.com/komlraj/search-hacker-news/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgments

* Hat tip to anyone whose code was used




<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[lodash.com]: https://www.npmjs.com/package/lodash.debounce

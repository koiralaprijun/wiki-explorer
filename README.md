# WikiExplorer
Authors: Ankit Grover, Prijun Koirala, David Puustinen and Morris Schüssler

The main idea of the application is to create a richer wrapper for wikipedia that gives the user insight in how the articles are linked and how the internal linking has been interacted with by the user. We plan to build other functionality on top of this in order to further enhance the insigeht that the user gets.
This is the final project for the course DH2642 Interaction Programming and the Dynamic Web given at KTH during the spring of 2024.

## Getting started

## Running
To run the development server:
yarn dev

## Deploying
The recommended way to deploy is on Vercel. For more information on how to deploy see https://nextjs.org/docs/deployment.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

#### What we have done
 * Worked on [Figma Prototypes](
 https://www.figma.com/file/0vr7PKOrYT6hg5aIMGprtv/Wiki-Explorer?type=design&node-id=0%3A1&mode=design&t=nfmnuutc0zeY7w26-1)
 * Completed Usability Testing with 4 Person
 * Setup initial layout of the app
 * Made two API Calls - Page Description and search Results

#### Project Structure
* Folder - _ts
* apiConfig.ts <br>
contains two wikipedia API links <br>

* resolvePromise.ts <br>
The resolvePromise function manages a promise's status, updating a provided state object. When the promise resolves, addDataACB asynchronously stores the result in state.data, and setErrorACB asynchronously stores any error in state.error, ensuring consistent state tracking with the original promise. <br>

* types.ts<br>
Define custom types for managing promise states, autofill results, and search items, providing structured data representations for handling asynchronous operations and search functionalities.<br>

* wikiSearch.ts<br>
Defines function getSearchResults to fetch search results using the MediaWiki API <br>

* Folder - components<br>
* Article.tsx<br>
Fetches HTML content for a given article title and renders it. uses the dangerouslySetInnerHTML attribute to display the HTML content with minimum styling similar to wikipedia.<br>

* Navbar.tsx<br>
Navigation bar which includes title, search input field, search button, and a dice button for generating random wikipedia articles.<br>

* Nodes.tsx<br>
Left sidebar which will contain graph nodes. Node Sidebar text is added as a placeholder.<br>

* ReadingList.tsx<br>
Right sidebar which will contain saved article by the user. Reading List text is added as a placeholder.<br>

* ResultList.tsx<br>
Asynchronously fetches search results based on a query, then maps each search item to a list item displaying the article title.<br>

* SearchResultsFallback.tsx<br>
Displays a simple message "Loading results..." while search results are being fetched asynchronously.<br>


#### What we will do
* Login/Register Functionality
* Add Node Graph of previously read articles and the links between them
* Add Reading Mode on and off for readability. 
* Update Reading List - List of articles saved by the user to read
* Suggest linked articles to read based on quality, length, and popularity

# Stack

### NextJS
This project is using NextJS. For more information on features and such see their documentation.

### Yarn
Install Yarn by following the instructions on their website.
Since this project is using Plug'n'Play an editor SDK is required for TypeScript intellisense to work. For instruction on how to do that see the documentation.

### Tailwind CSS
The project uses Tailwind CSS for styling. For more information and documentation see the documentation.
Also make sure that you have the recommended plugins installed.
An explanation of the different components can be seen below.

### Material UI 
Material UI is used to create UI functionality for react compoenents. Default font set is Roboto.

# Wikipedia API

MediaWiki is a framework for building wiki-type websites. It is maintained by the Wikimedia Foundation, which owns Wikipedia. Wikipedia uses MediaWiki. There is a separate Wikipedia for each language.

There are three main APIs for accessing Wikimedia wikis. The first is the MediaWiki Action API, "MWA" [1]. The second is the MediaWiki REST API, "MWR" [2]. The third is the Wikimedia REST API, "WMR" [3].

The English Wikipedia therefore has three endpoints:
MWA, endpoint https://en.wikipedia.org/w/api.php , example request, docs
MWR, example request, docs
WMR, example request, docs 

### Terms of use
Anyone can use the Wikipedia endpoints. However, a User-Agent header must be provided, which could have the following format: "WikiExplorer/1.0 (contact information)" [4]. Requests should not be sent in parallel: wait for the previous request to resolve before sending another [5]. MWA and MWR have no rate limit, whereas the WMR has a limit of 200 requests per second. Text content on WIkipedia is licensed under CC BY-SA 4.0. 

### HTML
To obtain the HTML of a Wikipedia page, any of the above APIs can be used. Alternatively, the actual page URL can be used, for example https://en.wikipedia.org/wiki/George_Griffith . According to the Wikimedia Robot policy, the page URL or WMR should ideally be used [6]. However, the MWA prominently features an example on how to obtain the HTML of a page.

Extracts of a page (such as 10 sentences) can be obtained using the MWA, example, docs.

### Search
Searching for a page can be done in the MWA: example request, docs.

### Article quality
Most articles have a page assessment. The rating of an article can be Stub, Start, C, B, GA ("good article"), A, or FA ("featured article"). Lists may be rated List or FL ("featured list"). Each WikiProject (some kind of topic area) for which the page is relevant may have a different assessment rating, but all WikiProjects usually have the same assessment.

Obtaining the assessment of a page can be done with the MWA: example request, docs.

[1] MediaWiki Action API. https://www.mediawiki.org/wiki/API:Main_page <br>
[2] MediaWiki REST API. https://www.mediawiki.org/wiki/API:REST_API <br>
[3] Wikimedia REST API. https://www.mediawiki.org/wiki/Wikimedia_REST_API <br>
[4] WikiMedia User-Agent policy. https://meta.wikimedia.org/wiki/User-Agent_policy  <br>
[5] MediaWiki Etiquette. https://www.mediawiki.org/wiki/API:Etiquette <br>
[6] Wikimedia Robot policy. https://wikitech.wikimedia.org/wiki/Robot_policy <br>


# WikiExplorer

Authors: Ankit Grover, Prijun Koirala, David Puustinen and Morris Schüssler

The main idea of the application is to create a richer wrapper for wikipedia that gives the user insight in how the articles are linked and how the internal linking has been interacted with by the user. We plan to build other functionality on top of this in order to further enhance the insigeht that the user gets.
This is the final project for the course DH2642 Interaction Programming and the Dynamic Web given at KTH during the spring of 2024.

## Running

To run the development server:
npm run dev

To build and run:
npm run build
npm run start

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What we have done

-   Worked on [Figma Prototypes](https://www.figma.com/file/0vr7PKOrYT6hg5aIMGprtv/Wiki-Explorer?type=design&node-id=0%3A1&mode=design&t=nfmnuutc0zeY7w26-1)
-   Completed Usability Testing during prototyping stage. Read the results [here](https://docs.google.com/document/d/1_GfLuDx0H-_9a6-kxnNKcpqATV_e5Q2XOgKbn5GLFMY/edit)
-   Viewing articles
-   Searching for articles
-   See previews of links to other articles
-   Logging in and registering

3rd party components: Material UI (lots of components used), Google Authentication

## Project Structure

All components are in `/app/components`, named Presenter or View to indicate their role.
Additional code can be found in `/app/_ts`.
CSS can be found in `/app/CSS`.

The actual pages are in `page.tsx` files in a directory structure matching their route. For example, the search page is at `/app/search/page.tsx`. Most of these simply import and return a presenter, which is where the actual page is constructed.

There is also a `/app/layout.tsx` (root layout) file which wraps all pages.

## Stack

This project uses Next.JS, which is a React framework.
The project is written in TypeScript.
Material UI components are widely used in our views.

We use various APIs provided by Wikipedia to access article content, details, and quality ratings: as well as for getting search results, random articles and more.

We use Firebase for data storage and authentication.

> ## WikiXplorer [Temp name]
Authors: Ankit Grover, Prijun Koirala, David Puustinen and Morris Schüssler

The main idea of the application is to create a richer wrapper for wikipedia that gives the user insight in how the articles are linked and how the internal linking has been interacted with by the user. We plan to build other functionality on top of this in order to further enhance the insigeht that the user gets.
This is the final project for the course DH2642 Interaction Programming and the Dynamic Web given at KTH during the spring of 2024.

## Getting started

## Running
To run the development server:
yarn dev

## Wikipedia
In order to access Wikipedia's API you need to create an application in their developer dashboard. Upon creating the app you will gain access to the client id and -secret that you can use to access the Wikimedia API. Put these in the .env and don't share them!

## Authentication / LogIN
TODO

## Deploying
The recommended way to deploy is on Vercel. For more information on how to deploy see https://nextjs.org/docs/deployment.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Stack

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

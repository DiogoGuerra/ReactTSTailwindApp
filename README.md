# JSONPlaceholder App

Welcome to the JSONPlaceholder App, a React TypeScript application that interacts with the JSONPlaceholder API to fetch and display posts and comments.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Notes](#notes)

## Overview

The JSONPlaceholder App is a single-page application (SPA) built with React and TypeScript. It allows users to view posts and comments fetched from the JSONPlaceholder API. You can browse through posts, view comments associated with each post, edit comments, and navigate back and forth between pages of posts.

## Features

- View all posts fetched from the JSONPlaceholder API.
- Click on a post to view its details, including all associated comments.
- Create, Edit or Delete comments associated with a post.
- Navigate through pages of posts with pagination.
- Informative About Us page detailing the app's objectives and API usage.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **react-router-dom**: Routing library for React.
- **axios**: Promise-based HTTP client for making API requests.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager) or yarn

### Installation

Clone the repository and install dependencies.

```bash
git clone <repository_url>
cd jsonplaceholder-app
npm install
 ```
### Running the App
Start the development server.
```bash
npm start   # or yarn start
 ```

Open http://localhost:3000 to view it in the browser.

### Notes
- Editing posts are not supported as the JSONPlaceholder API is read-only for these operations.
- Changes made (new comments, edits, deletions) are not persisted when the app is refreshed, as the JSONPlaceholder API does not save data.

### API Used
The app uses the JSONPlaceholder API to fetch data. It provides mock JSON data for testing and prototyping.


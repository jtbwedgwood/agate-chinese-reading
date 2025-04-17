# Chinese Reading Speed Test - Flask & React (Vite) App

## Overview

This is a full-stack web application designed to generate Chinese passages based on user-selected difficulty, length, and topic. It allows users to practice reading and eventually measure their reading speed. The backend is built with Flask, and the frontend is developed using React with Vite.

## General Instructions

To run app:
```
# ensure that frontend is compiled right
cd frontend
npm install
npm run build

# run app
cd backend
flask run
```

## Features

### Frontend (React + Vite)

* User input controls:
    * Slider for difficulty (HSK 1-9)
    * Slider for length (100-500 characters)
    * Text input for custom topic
* Generate passage button to fetch a passage from the backend
* Dynamic text display for the generated passage
* TailwindCSS styling for a minimal and clean UI

### Backend (Flask)

* Generates a passage using OpenAI API (via LangChain)
* Handles API requests from the frontend
* Serves the built React app (production mode only)

## Tech Stack

### Frontend:

* React (Vite for fast development)
* TailwindCSS
* Fetch API for making API calls

### Backend:

* Flask (Python 3)
* Flask-SQLAlchemy (for future user data storage)
* LangChain + OpenAI API (for passage generation)

### Database:

* SQLite (for local testing) 
* PostgreSQL (for production deployment on Heroku)

## Notes

* Flask default port is 5000, while Vite runs on 5173.
* Ensure OpenAI API key is set in .env (`OPENAI_API_KEY`).
* TailwindCSS is used for styling in React (`index.css`).

## Contributing

Pull requests are welcome. Please submit issues for feature requests or bug fixes.

## License

MIT License. Free to use and modify.
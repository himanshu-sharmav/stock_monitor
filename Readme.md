# Stock Monitoring Platform

This project is a stock monitoring platform that allows users to create and manage their own watchlists of stock symbols and monitor the latest stock values. The platform consists of a backend built with Django and a frontend built with React.

## Backend Architecture

### Database Schema
The backend uses a simple database schema with two models:
- **User**: Represents a user of the platform. This model is provided by Django's built-in authentication system.
- **Watchlist**: Represents a watchlist created by a user, containing a list of stock symbols.

### API Endpoints
The backend provides the following API endpoints:
- **/api/users/**:
  - `GET`: Retrieves a list of all users.
  - `POST`: Creates a new user.
- **/api/users/<id>/**:
  - `GET`: Retrieves details of a specific user.
- **/api/watchlists/**:
  - `GET`: Retrieves a list of watchlists for the authenticated user.
  - `POST`: Creates a new watchlist for the authenticated user.
- **/api/watchlists/<id>/**:
  - `GET`: Retrieves details of a specific watchlist for the authenticated user.
  - `DELETE`: Deletes a specific watchlist for the authenticated user.

### Authentication Mechanism
The backend uses token-based authentication provided by Django REST Framework. Users are required to authenticate using their username and password to access protected endpoints. Upon successful authentication, a token is provided, which must be included in subsequent requests to authenticate the user.

## Installation and Setup

### Backend
1. Clone the repository: `git clone`
2. Navigate to the backend directory: `cd backend`
3. Create a virtual environment: `python -m venv venv`
4. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`
5. Install dependencies: `pip install -r requirements.txt`
6. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```
     SECRET_KEY=<your_secret_key>
     DEBUG=True
     ```
7. Apply database migrations: `python manage.py migrate`
8. Run the development server: `python manage.py runserver`
9. The backend will be accessible at `http://localhost:8000`

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The frontend will be accessible at `http://localhost:3000`

Now, you can access the application at `http://localhost:3000` and start monitoring stocks!

Feel free to reach out if you have any questions or encounter any issues during setup!
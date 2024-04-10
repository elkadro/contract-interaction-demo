# Coin-Game-World

Welcome to **Coin-Game-World**, a node-based application for cryptocurrency enthusiasts and gamers!

## Project Setup

### Requirements

- Node.js
- Yarn package manager

### Installation

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd coin-game-world
```

3. Install dependencies using Yarn:

```
yarn install
```

### Running the Application

- To build the project, run:

```
yarn build
```

- To start the application, run:

```
yarn start
```

- The application will be running on `localhost:3000`.

## API Endpoints

### `/interactions/view`

- **Method:** POST
- **Description:** This endpoint calls a view function with hardcoded inputs. It is used to fetch specific data from the server.
- **Response Format:**
```json
{
  "status": Boolean,
  "data": Object/String
}
```
Behavior: If the status is true, the data field contains the requested information. If status is false, data contains an error message explaining the failure.

### Usage

Send a POST request to /interactions/view.
The response will be a JSON object. If the operation is successful, status will be true, and data will contain the relevant information. In case of an error, status will be false, and data will have the error message.

## Contributing
Contributions to Coin-Game-World are welcome. Please ensure you follow the coding standards and write tests for new features.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

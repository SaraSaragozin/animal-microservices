# Animal Microservices Application

This repository contains a set of microservices for managing information related to animals, specifically focusing on dogs and cats.

This repository was developed by student Saragozin Sara.

## Services

### Dog Service

The Dog Service provides information about dog breeds using an external API. It exposes endpoints to retrieve a list of dog breeds and detailed information about specific breeds.

### Cat Service

The Cat Service provides basic information about cat breeds. Similar to the Dog Service, it fetches data from an external source and exposes endpoints to query cat breed information.

### Animal Fact Service

The Animal Fact Service retrieves interesting facts about animals. It provides endpoints to fetch random facts about various animals.

## Technologies Used

- Node.js: Backend runtime environment for JavaScript
- Express.js: Web framework for Node.js used to build APIs
- Docker: Containerization tool used for deployment
- Axios: HTTP client for making API requests

## Setup Instructions

### Prerequisites

- Node.js installed on your local machine
- Docker installed on your local machine (if deploying with Docker)

### Running the Application

1. Clone this repository.
2. Navigate to each service directory (`dog-service`, `cat-service`, `animal-fact-service`) and run `npm install` to install dependencies.
3. Start each service using `npm start` or `node index.js`.
4. Optionally, you can use Docker Compose to run all services together. Run `docker-compose up` from the root directory of the project.

## API Documentation

- Dog Service API:
  - Endpoint: `/dogs/breeds`
  - Method: GET
  - Description: Retrieves a list of dog breeds.
  - Port url: 3001/breeds

- Cat Service API:
  - Endpoint: `/cats/breeds`
  - Method: GET
  - Description: Retrieves a list of cat breeds.
  - Port url: 3002/status/:{code} (code examples: 200, 401, etc) 

- Animal Fact Service API:
  - Endpoint: `/animal-facts`
  - Method: GET
  - Description: Retrieves random facts about animals.
  - Port url: 3003/fact


# second-nature-api-sample
Sample application showing how to interface with the Second Nature API

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/SecondNature-com/second-nature-api-sample.git
   cd second-nature-api-sample
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run start
   ```

The server will be started on `http://localhost:3000`.

## Usage

### Create a New Tenant

**Endpoint:** `POST /companies/:companyId/tenants`

Create a new tenant in the specified company.

Request body should be a JSON object with the tenant details.

### Get All Tenants

**Endpoint:** `GET /companies/:companyId/tenants`

Get all tenants for the specified company.

### Get Tenant Details

**Endpoint:** `GET /companies/:companyId/tenants/:id`

Get the details for a single tenant.

### Update Tenant

**Endpoint:** `PATCH /companies/:companyId/tenants/:id`

Update the specified tenant.

Request body should be a JSON object with the updated tenant details.

### Delete Tenant

**Endpoint:** `DELETE /companies/:companyId/tenants/:id`

Delete the specified tenant.

That's it! You can use tools like cURL or Postman to send requests to the server and test the controllers.
```

Feel free to copy and use this code for your `README.md` file.
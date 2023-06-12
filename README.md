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

3. Start the rbp-api server:

   ```bash
   npm run start
   ```

The server will be started on `http://localhost:3000`.

4. Start this client app:

   ```bash
   npm run start:dev
   ```

# Usage

## Getting authorized

First of all you you have to start a user session with a regular user credentials in order to get the authorization token:

```typescript
const response = await axios.request({
  method: 'post',
  timeout: 5000,
  maxBodyLength: Infinity,
  url: `<apiUrl>/auth/login`,
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    username: '<a valid username>',
    password: '<the corresponding password>',
  },
});

const token = response.data.access_token
```

With the obtained token you can get the api-keys:

```typescript
  const response = await axios.request({
    method: 'post',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `<apiUrl>/api-keys`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: {
      description: 'string',
      type: 'internal|external',
    },
  });

  const apiKey = response.data.apiKey
  const apiSecret = response.data.apiSecret,
```

## Companies

### Create a New Company

**Endpoint:** `POST /companies`

Create a new company.

Request body should be a JSON object with the company details.

```typescript
const data = {
  // Here company details
};
try {
  const response = await axios.request({
    method: 'post',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `<apiUrl>/companies`,
    headers: {
      'sn-api-key': '<API-KEY here>',
      'sn-api-secret': '<API-SECRET here>',
      'Content-Type': 'application/json',
    },
    data,
  });
  return response.data;
} catch (error) {
  throw new Error('Failed creating company');
}
```

### Get All Companies

**Endpoint:** `GET /companies`

Get all companies.

```typescript
try {
  const response = await axios.request({
    method: 'get',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `<apiUrl>/companies`,
    headers: {
      'sn-api-key': '<API-KEY here>',
      'sn-api-secret': '<API-SECRET here>',
      'Content-Type': 'application/json',
    },
  });
  return response.data;
} catch (error) {
  throw new Error('Failed getting all companies');
}
```

### Get Company

**Endpoint:** `GET /companies/:id`

Get the details for a single company.

```typescript
const companyId = '<a valid company ID number>';
try {
  const response = await axios.request({
    method: 'get',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `<apiUrl>/companies/` + companyId,
    headers: {
      'sn-api-key': '<API-KEY here>',
      'sn-api-secret': '<API-SECRET here>',
      'Content-Type': 'application/json',
    },
  });
  return response.data;
} catch (error) {
  throw new Error('Failed getting company ' + companyId);
}
```

### Update Company

**Endpoint:** `PATCH /companies/:id`

Update the specified company.

Request body should be a JSON object with the updated company details.

```typescript
const companyId = '<a valid company ID number>';
const data = {
  // Here company details
};
try {
  const response = await axios.request({
    method: 'patch',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `<apiUrl>/companies/` + companyId,
    headers: {
      'sn-api-key': '<API-KEY here>',
      'sn-api-secret': '<API-SECRET here>',
      'Content-Type': 'application/json',
    },
    data,
  });
  return response.data;
} catch (error) {
  throw new Error('Failed updating company ' + companyId);
}
```

### Delete Company

**Endpoint:** `DELETE /companies/:id`

Delete the specified company.

```typescript
const companyId = '<a valid company ID number>';
try {
  const response = await axios.request({
    method: 'delete',
    timeout: 5000,
    maxBodyLength: Infinity,
    url: `<apiUrl>/companies/` + companyId,
    headers: {
      'sn-api-key': '<API-KEY here>',
      'sn-api-secret': '<API-SECRET here>',
      'Content-Type': 'application/json',
    },
  });
  return response.data;
} catch (error) {
  throw new Error('Failed deleting company ' + companyId);
}
```

## Tenants

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
```

## API
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com`

### ROUTES (GET, PUT)
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/users`
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/orders`

### ROUTES WITH ID (GET, DELETE)
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/user/{id}`
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/order/{id}`

### ROUTE POINTS
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/calcpoints`
- `POST method { id: string, value: number }`;


## DynamoDB struture
- `users:`
  - `{`
      `id: string,`
      `name: string`,
      `email: string`,
      `points: number`
    `}`

- `orders:`
  - `{`
      `id: string,`
      `user_id: string`,
      `date: string`
      `value: number`
    `}`

## API
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com`

### ROUTES (GET, PUT)
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/v1`

### ROUTES WITH ID (GET, POST, DELETE)
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/v1/{id}`

### ROUTE POINTS
- `https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/calcpoints`


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
    
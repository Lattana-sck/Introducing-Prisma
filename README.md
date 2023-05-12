# Introducing-Prisma

In this project we will discover Prisma with the development of an API in node.
We will also use MongoDB as database.

## Installation

```
git clone https://github.com/Lattana-sck/Introducing-Prisma.git prisma-tuto 
cd prisma-tuto
npm install
npm run dev
```

## Env File
Also you need to create a .env file and put these variables : 
```
DATABASE_URL=""
JWT_SECRET=""
```

## How does it works ?
After installation, you can open your postman application in order to testing routes
- [GET] localhost:3000/
- [POST] localhost:3000/api/ 
>    Body : {
>               "name": "exemple",
>               "email": "exemple@email.com",
>               "password": "password"
>             }

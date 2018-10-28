# Swagger API
Version v0
https://maxa-fabi.herokuapp.com

User
email : jahoda@gmail.com
passw : debilek

## USER
| Method | Endpoint              | Body            |
|--------|-----------------------|-----------------|
| POST   | /api/user/sign-up     | email, password |
| POST   | /api/user/sign-in     | email, password |


## Tattoo
Tattoo albums 
Tattoo, Navrhy, Flash

Tattoo sizes
10x10, 15x15, 20x20


| Method | Endpoint                    | Body             |
|--------|-----------------------------|------------------|
| GET    | /api/tattoo/all             |                  |
| GET    | /api/tattoo/:album          |                  |
| GET    | /api/tattoo/:album/:name    |                  |
| GET    | /api/tattoo/image/src/:name |                  |
| POST   | /api/tattoo/save-record     | size, album, url |
| POST   | /api/tattoo/upload-image    | file             |
| PUT    | /api/tattoo/modify/:name    | object           |
| DELETE | /api/tattoo/delete/:id      | id               |


## Subscriber

## Contatct
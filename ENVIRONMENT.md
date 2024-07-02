# Paste this content in "/api/.env"
```
# Leave the code as it is which is already present, add below code...
STRIPE_KEY = SECRET_KEY_HERE
CLIENT_URL = http://localhost:3000

# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME= store
DATABASE_USERNAME= root
DATABASE_PASSWORD= db123
DATABASE_SSL=false
JWT_SECRET= SECRET_KEY
```

# Paste this content in "/client/.env"
```
REACT_APP_API_TOKEN =  API_TOKEN_KEY_COPY_FROM_STRIPE
REACT_APP_API_URL = http://localhost:1337/api
REACT_APP_UPLOAD_URL = http://localhost:1337
```

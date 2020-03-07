export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.POSTGRESS_REGION,
    "aws_profile": process.env.POSTGRESS_PROFILE,
    "aws_media_bucket": process.env.POSTGRESS_MEDIA_BUCKET,
  },
  "jwt": {
    "secret": "hello world"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}

/*
"username": "udagramvilleladev",
"password": "destiny9402",
"database": "udagramvilleladev",
"host": "udagramvilleladev.ch60icpgnwln.us-east-1.rds.amazonaws.com",
"dialect": "postgres",
"aws_region": "us-east-1",
"aws_profile": "default",
"aws_media_bucket": "udagram-villela-dev"
*/
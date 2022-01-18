const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "123456",
  DB_USERNAME: 'hienhh97',
  DB_PASSWORD: 'hienhh97'
}

export default config

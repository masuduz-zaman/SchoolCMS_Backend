import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
    port: process.env.PORT || 5000,
    databaseUrl: process.env.DATABASE_URL,
    app_url: process.env.APP_URL || 'http://localhost:5000',
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expiration: process.env.JWT_ACCESS_EXPIRATION,
    jwt_refresh_expiration: process.env.JWT_REFRESH_EXPIRATION,
    salt_rounds: process.env.SALT_ROUNDS
};
//# sourceMappingURL=index.js.map
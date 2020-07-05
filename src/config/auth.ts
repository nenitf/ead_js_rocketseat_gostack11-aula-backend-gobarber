export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    // o ideal é '1d', mas quero manter o mesmo jwt nas próximas 14 semanas
    expiresIn: '98d',
  },
};

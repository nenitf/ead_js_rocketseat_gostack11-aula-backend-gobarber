export default {
  jwt: {
    secret: process.env.APP_SECRET,
    // o ideal é '1d', mas quero manter o mesmo jwt nas próximas 14 semanas
    expiresIn: '98d',
  },
};

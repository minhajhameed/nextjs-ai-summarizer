const dotenv = require('dotenv');

const { parsed } = dotenv.config({ path: '.env' });

module.exports = {
  env: {
    RAPID_API_KEY: parsed.RAPID_API_KEY,
  },
  // Your other configurations...
};

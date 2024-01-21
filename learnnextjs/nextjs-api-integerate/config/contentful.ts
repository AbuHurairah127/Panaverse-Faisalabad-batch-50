const contentful = require('contentful')
export const client = contentful.createClient({
    space: 'v8k6p0iq2x0f',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '-GazxxGFd18zDCDqm-mGlX858lud6v_g5rHJmQf7nAk'
  })
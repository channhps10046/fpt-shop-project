import axios from 'axios';

import url from '../utils/url';

const registerUser = async ({ email, phoneNumber, username, passRandom }) => {
    const response = await axios.post(`${url}/auth/local/register`, { username, email, phoneNumber, password: '1231232132132131'  })
        .catch(err => {
            console.log(err);
        });

        return response;
}

export default registerUser;
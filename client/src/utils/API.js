import axios from 'axios';

export default {
    // Post contact form
    postContacts: function(contactInput) {
        return axios.post("/api/contacts", contactInput)
    }
}
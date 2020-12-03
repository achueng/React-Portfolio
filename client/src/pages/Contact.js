import React, { useState } from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import API from "../utils/API";

function Contact() {
    const [formState, setFormState] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value})
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.postContacts(formState).then(res => {
            setFormState(formState)
        }).catch(err => console.log(err));
    }

    return (
        <Layout>
            <ContactForm
            handleInputChange = {handleInputChange}
            handleFormSubmit = {handleFormSubmit}
            />
        </Layout>
    )
}

export default Contact;
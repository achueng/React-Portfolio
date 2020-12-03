import React, { useState } from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import API from "../utils/API";

function Contact() {
    const [formState, setFormState] = useState({});
    const [successState, setSuccessState] = useState(false);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value})
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.postContacts(formState).then(() => {
            setFormState(formState);
            setSuccessState(!successState);
        }).catch(err => console.log(err));
    }

    return (
        <Layout>
            <ContactForm
            handleInputChange = {handleInputChange}
            handleFormSubmit = {handleFormSubmit}
            successState = {successState}
            />
        </Layout>
    )
}

export default Contact;
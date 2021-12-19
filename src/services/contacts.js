// import addResponse from "../response/AddContact";
import getAllContactsResponse from "../response/GetAllContacts";
import updateContactResponse from "../response/UpdateContact";
import addContactResponse from "../response/AddContact";
import deleteContactResponse from "../response/DeleteContact";

export default {
    getAllContacts () {
        //below code will be used to communicate with APIs
        // let url = ""
        // const response = await fetch(url);
        // const contacts = await response.json();
        // return contacts;
        return getAllContactsResponse.contacts;
    },

    // payload : contact
    updateContact () {
        return updateContactResponse;
    },

    //payload : contact
    addContact () {
        return addContactResponse;
    },

    //payload : contact
    deleteContact () {
        return deleteContactResponse;
    }
}
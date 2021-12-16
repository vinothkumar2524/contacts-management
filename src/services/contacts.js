// import addResponse from "../response/AddContact";
import getAllContactsResponse from "../response/GetAllContacts";
import updateContactResponse from "../response/UpdateContact";
import addContactResponse from "../response/AddContact";

export default {
    async getAllContacts () {
        // let url = ""
        // const response = await fetch(url);
        // const contacts = await response.json();
        // return contacts;
        return getAllContactsResponse.contacts;
    },

    // payload : contact
    async updateContact () {
        return updateContactResponse;
    },

    async addContact () {
        return addContactResponse;
    }
}
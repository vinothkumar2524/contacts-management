<template>
  <div class="container bg-gray-100 mx-auto h-screen w-1/2">
      <Toast/>
      <Header/>
      <div class="grid grid-cols-3 gap-4 bg-gray-100">
        <div class="bg-gray-100 border-r-2 border-gray-200">
          <div class="flex pl-2 pr-2">
           
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-3xl w-full mt-2 inline-flex flex-grow"
               @click="onNewContact"
            >
            <div>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg" version="1.1" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M174.609 1.194 C 8.750 22.804,-59.514 227.069,60.256 343.370 C 173.155 452.998,362.812 395.808,395.987 242.132 C 424.984 107.811,310.727 -16.541,174.609 1.194 M214.844 81.351 C 243.861 88.583,263.830 118.120,259.386 147.236 C 252.016 195.523,195.420 215.954,159.605 183.257 C 113.944 141.570,154.710 66.364,214.844 81.351 M175.391 212.810 C 192.416 218.789,207.584 218.789,224.609 212.810 C 228.906 211.301,233.000 209.879,233.707 209.651 C 235.230 209.159,250.653 222.466,259.378 231.800 L 265.071 237.891 260.270 238.123 L 255.469 238.356 255.469 253.944 L 255.469 269.531 239.844 269.531 L 224.219 269.531 224.219 288.672 L 224.219 307.813 168.359 307.813 L 112.500 307.813 112.500 301.858 C 112.500 276.503,122.798 250.891,140.707 231.700 C 149.398 222.388,164.755 209.154,166.294 209.651 C 167.000 209.879,171.094 211.301,175.391 212.810 M291.406 267.969 L 291.406 283.594 307.031 283.594 L 322.656 283.594 322.656 294.141 L 322.656 304.688 307.031 304.688 L 291.406 304.688 291.406 320.313 L 291.406 335.938 280.859 335.938 L 270.313 335.938 270.313 320.313 L 270.313 304.688 254.688 304.688 L 239.063 304.688 239.063 294.141 L 239.063 283.594 254.688 283.594 L 270.313 283.594 270.313 267.969 L 270.313 252.344 280.859 252.344 L 291.406 252.344 291.406 267.969 " stroke="none" fill="#FFFFFF" fill-rule="evenodd"/></g></svg>
            </div>
              <span class="pl-2">Create New</span>
            </button>
          </div>
          <div class="p-2 bg-gray-100" style="max-height: 400px;overflow-y: auto;">
            <div v-for="(contact, index) in allContacts" 
            :key="index" 
            @click="onShowContact(contact)" 
            @keyup="onEnterKeyPressContact($event, contact)" 
            tabindex="0" 
            class="mt-2 rounded-md p-2 cursor-pointer " :class="getSelectedclass(contact)">

            {{contact.contact_name}}</div>
            
          </div>
        </div>
        <div class="col-span-2 bg-gray-100 pr-4" >
          <div class="container p-2 mt-14" v-if="fallBackMessage">
              <p class="text-3xl text-center text-gray-400">Select a contact or <span class="cursor-pointer text-gray-500" @click="onEditContact">create a new record.</span></p>
          </div>
          <ContactDetailsCard
            v-else-if="currentScreen == 'showContact'"
            :contact="contact"
            @edit="onEditContact"
            @delete="onDeleteContact"/>
            <EditContact
            v-else-if="currentScreen == 'editContact'"
            :title="contactFormTitle"
            :contact="formContact"
            @save="onSaveContact"
            @cancel="onCancelEdit"/>
            
        </div>
        
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Header from "../components/Header.vue"
import Toast from "../components/Toast.vue"
import ContactDetailsCard from "../components/ContactDetailsCard.vue"
import EditContact from "../components/EditContact.vue"

const initContact = {
  id: 0,
  name: '',
  contact_name: '',
  phone: '',
  company_name: '',
  designation: ''
}

export default {
    name: 'ContactsContainer',
    components: {
        Header,
        ContactDetailsCard,
        EditContact,
        Toast
    },
    data() {
        return {
            currentScreen: 'editContact',
            displayContact: initContact,
            contactFormTitle : 'Create Contact',
        }
    },
    computed: {
        ...mapState('contacts', ['allContacts', 'contact']),
        fallBackMessage () {
          return this.currentScreen === 'showContact' && !this.contact
        },
    },
    created() {
        this.getAllContacts();
    },
    
    methods:{
            ...mapActions('contacts', [
        'selectContact',
        'saveContact',
        'deleteContact',
        'getAllContacts'
        ]),
        ...mapActions('toasts',['showToast']),
        
        async onSaveContact (contact) {
          let response = await this.saveContact(contact);
          if(response) {
            this.showToast({message : response});
            this.setScreen('showContact');
          }
        },
        setScreen(screen) {
          this.currentScreen = screen;
        },
        onShowContact(contact) {
          this.setScreen('showContact');
          this.selectContact(contact);
        },
        onEditContact(contact) {
          this.setScreen('editContact');
          this.formContact = contact;
          this.contactFormTitle = 'Edit Contact';
        },

        async onDeleteContact(contact) {
          let response = await this.deleteContact(contact);
          if(response) {
            this.showToast({message : response});
            this.formContact = initContact;
          }
        },

        onNewContact() {
          this.setScreen('editContact');
          this.formContact = initContact;
          this.contactFormTitle = 'Create Contact';
        },
        onCancelEdit() {
          this.setScreen('showContact');
          this.formContact = initContact;
        },
        onEnterKeyPressContact(event,contact) {
          if (event.keyCode === 13) {
            event.preventDefault();
            this.onShowContact(contact);
          }
        },
        getSelectedclass (contact) {
          if(this.contact && this.contact.contact_id == contact.contact_id) {
            return 'bg-gray-800 text-white hover:bg-gray-800'
          }
          return 'bg-gray-300 hover:bg-gray-400'
        },
    }
}
</script>

<template>
  <div class="container mx-auto h-screen bg-green-300">
      <Header/>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 bg-red-300">
          <ContactDetailsCard
            v-if="currentScreen == 'showContact'"/>
            <EditContact
            v-if="currentScreen == 'editContact'"
            @save="onSaveContact"/>
        </div>
        <div class="bg-red-300">
          <div class="">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              create contact btn
            </button>
          </div>
          <div class="overflow-y-scroll" style="max-height: 64px;">
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
            <div>contact</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Header from "../components/Header.vue"
import ContactDetailsCard from "../components/ContactDetailsCard.vue"
import EditContact from "../components/EditContact.vue"

const initContact = {
  id: null,
  name: '',
  email: '',
  phone: '',
  workPlace: '',
  role: ''
}

export default {
    name: 'ContactsContainer',
    components: {
        Header,
        ContactDetailsCard,
        EditContact,
    },
    data() {
        return {
            currentScreen: 'editContact',
            displayContact: initContact
        }
    },
    computed: {
        ...mapState('contacts', ['rows', 'contact']),
    },
    methods:{
            ...mapActions('contacts', [
        'selectContact',
        'saveContact',
        'deleteContact'
        ]),
        
        async onSaveContact (contact) {
            await this.saveContact(contact)
            this.formContact = initContact
            // this.onShowContact(contact)
        },
    }
}
</script>

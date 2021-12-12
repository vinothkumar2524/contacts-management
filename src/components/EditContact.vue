<template>
    <div class="bg-green-200 rounded-3xl mt-4">
        <div class="bg-yellow-100 text-3xl text-center rounded-t-3xl py-2">Create</div>
        <div class="m-2">
                <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-name">
                Name
            </label>
            <input v-model="contactDetails.name" class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Enter Name" >
            <p class="text-red-500 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-email">
                E-mail
            </label>
            <input v-model="contactDetails.email" class="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Jane">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-phone">
                Phone
            </label>
            <input v-model="contactDetails.phone" class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="number" placeholder="Doe">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-work-place">
                Work Place
            </label>
            <input v-model="contactDetails.workPlace" class="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-work-place" type="text" placeholder="Jane">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-role">
                Role
            </label>
            <input  v-model="contactDetails.role" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-role" type="text" placeholder="Doe">
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
        </div>
        </div>
        <div class="flex flex-row p-2">
                  <button
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-3xl w-24 mt-2 shadow mr-2"
                    @click="onSave"
                  >
                     Save
                  </button>
                  <button
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-3xl w-24 mt-2 shadow"
                    @click="onCancel"
                  >
                    Cancel
                  </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "EditContact",
    props:['contact'],
    data () {
        return {
            
        }
    },
    methods: {
        onSave () {
            this.$emit('save',this.contactDetails);
            console.log("the details ", this.contactDetails)
        },
        onCancel () {
            this.$emit('cancel');
        }
    },
    computed: {
        contactDetails () {
            return {...this.contact}
        }
    }
}
</script>
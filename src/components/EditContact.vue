<template>
    <div class="bg-blue-100 rounded-3xl mt-4 shadow-md border border-gray-300 border-t-0">
        <div class="bg-gray-700 text-white text-2xl text-center rounded-t-xl py-3">{{title}}</div>
        <div class="m-2">
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3">
                    <label class="block  tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-name">
                        Name
                    </label>
                    <input v-model="contactDetails.name" @input="onInput('name')" class="appearance-none block w-full text-gray-800 border border-gray-300 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Enter Name">
                    <p v-if="errors.name.isError" class="text-red-500 text-xs italic">{{errors.name.errorText}}</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-email">
                        E-mail
                    </label>
                    <input v-model="contactDetails.email" @input="onInput('email')" class="appearance-none block w-full text-gray-700 border border-red-500 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Jane">
                    <p v-if="errors.email.isError" class="text-red-500 text-xs italic">{{errors.email.errorText}}</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-phone">
                        Phone
                    </label>
                    <input v-model="contactDetails.phone" @input="onInput('phone')" class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="number" placeholder="Doe">
                    <p v-if="errors.phone.isError" class="text-red-500 text-xs italic">{{errors.phone.errorText}}</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block  tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-work-place">
                        Work Place
                    </label>
                    <input v-model="contactDetails.workPlace" class="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-work-place" type="text" placeholder="Jane">

                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block  tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-role">
                        Role
                    </label>
                    <input v-model="contactDetails.role" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-role" type="text" placeholder="Doe">

                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between p-2">
            <button class="bg-green-400 hover:bg-green-600 text-gray-800 hover:text-black font-semibold py-2 px-4  rounded-3xl w-24 mt-2 shadow-lg"
                    @click="onSave">
                Save
            </button>
            <button class="bg-red-400 hover:bg-red-600 text-black font-semibold py-2 px-4  rounded-3xl w-24 mt-2 shadow-lg"
                    @click="onCancel">
                Cancel
            </button>
        </div>

    </div>
</template>

<script>
// let errorValues =  {isError : false, errorText : ""}
let initErrors = {
    name : {isError : false, errorText : ""},
    phone : {isError : false, errorText : ""},
    email : {isError : false, errorText : ""},
}
export default {
    name: "EditContact",
    props:['contact','title'],
    data () {
        return {
            errors : initErrors,
        }
    },
    methods: {
        onSave () {
            if(this.isValidForm()) {
                this.$emit('save',this.contactDetails);
            }
        },
        onCancel () {
            this.$emit('cancel');
        },
        setError (input, errorText) {
            this.errors[input].isError = true;
            this.errors[input].errorText = errorText;
         },
        isValidForm () {
            
            return this.isValidName() && 
                this.isValidPhoneNo() && 
                this.isValidEmail()

        },
        isValidName () {
            if(!this.contactDetails.name) {
                this.setError('name', 'Name cannot be empty');
                return false
            } 
            return true
        },
        isValidEmail () {
            if(this.contactDetails.email) {
                let pattern = /^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
                let result =  pattern.test(this.contactDetails.email)
                console.log("email check ", result);
            }
            return true
        },
        isValidPhoneNo () {
            if (!this.contactDetails.phone) {
                this.setError('phone', 'Enter phone number')
                return false
            }
            if (this.contactDetails.phone.toString().length != 10) {
                console.log("phone length ", this.contactDetails.phone.toString().length)
                 this.setError('phone', 'Enter valid phone number')
                return false
            }
            return true
        },
        onInput (input) {
            this.errors[input].isError = false;
            this.errors[input].errorText = "";
        }
    },
    computed: {
        contactDetails () {
            return {...this.contact}
        }
    }
}
</script>
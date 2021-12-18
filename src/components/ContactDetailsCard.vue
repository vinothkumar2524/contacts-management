<template>
    <div class="container bg-blue-100 rounded-3xl p-2 mt-14 shadow-md border border-gray-300 border-t-0" v-if="contact">
            <div class="bg-gray-700 rounded-full text-3xl -mt-12 mx-auto w-24 h-24 pt-8 pl-10 shadow-md text-white">{{initial}}</div>
            <div class="">
                <p class="text-3xl text-center" v-if="contact.contact_name">{{contact.contact_name}}</p>
                <p class="text-base text-center" v-if="contact.company_name">{{contact.company_name}} | {{contact.designation}}</p>
                <div v-if="contact.phone" class="flex">
                  <!-- <img class="h-6 w-6" src="../assets/phone.png"> -->
                  <div>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg" version="1.1" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M174.219 1.228 C 8.929 22.429,-59.303 227.275,60.256 343.370 C 167.782 447.781,348.424 401.570,391.657 258.594 C 433.745 119.400,318.293 -17.252,174.219 1.228 M271.826 78.049 C 279.921 80.569,286.490 86.825,289.543 94.922 C 290.958 98.675,291.016 102.788,291.016 200.000 L 291.016 301.172 288.829 305.859 C 285.981 311.961,280.669 317.299,274.696 320.059 L 269.922 322.266 200.000 322.266 L 130.078 322.266 125.304 320.059 C 119.331 317.299,114.019 311.961,111.171 305.859 L 108.984 301.172 108.984 200.000 C 108.984 102.788,109.042 98.675,110.457 94.922 C 113.462 86.951,120.046 80.602,127.915 78.087 C 135.007 75.820,264.555 75.787,271.826 78.049 M136.250 100.313 L 133.594 102.969 133.611 188.789 C 133.630 282.979,133.307 276.397,138.035 278.815 C 140.552 280.102,259.300 280.044,262.131 278.754 C 266.604 276.716,266.406 280.895,266.406 188.242 L 266.406 102.969 263.750 100.313 L 261.094 97.656 200.000 97.656 L 138.906 97.656 136.250 100.313 M182.031 302.344 L 182.031 313.281 200.000 313.281 L 217.969 313.281 217.969 302.344 L 217.969 291.406 200.000 291.406 L 182.031 291.406 182.031 302.344 " stroke="none" fill="#000000" fill-rule="evenodd"/></g></svg>
                  </div>
                  <div class="text-base ml-2 px-2  group flex" >{{contact.phone}}<img class="h-4 w-4 mt-1  invisible group-hover:visible cursor-pointer" src="https://img.icons8.com/ios-glyphs/30/000000/clipboard.png" @click="copyToClipBoard(contact.phone)"/></div>
                  
                </div>
                 <div v-if="contact.email" class="flex mt-2">
                  <!-- <img class="h-6 w-6" src="../assets/email.png"> -->
                  <div>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M174.609 1.194 C 8.750 22.804,-59.514 227.069,60.256 343.370 C 173.155 452.998,362.812 395.808,395.987 242.132 C 424.984 107.811,310.727 -16.541,174.609 1.194 M258.994 107.616 L 316.303 143.359 258.152 143.560 C 226.168 143.670,173.835 143.670,141.855 143.560 L 83.711 143.359 141.660 107.219 C 173.532 87.342,200.076 71.257,200.647 71.476 C 201.217 71.694,227.473 87.957,258.994 107.616 M137.579 181.245 C 168.571 200.579,195.295 216.806,196.964 217.307 C 202.016 218.820,203.716 217.884,262.460 181.237 C 293.443 161.908,318.960 146.094,319.162 146.094 C 320.310 146.094,319.483 263.942,318.307 267.901 C 316.888 272.681,312.251 278.163,307.457 280.730 L 304.297 282.422 200.952 282.628 L 97.608 282.835 93.754 281.177 C 88.467 278.903,83.260 273.178,81.700 267.923 C 80.510 263.919,79.688 146.094,80.849 146.094 C 81.058 146.094,106.587 161.912,137.579 181.245 " stroke="none" fill="#000000" fill-rule="evenodd"/></g></svg>
                  </div>
                  <div class="text-base ml-2 px-2  group flex">{{contact.email}}<img class="h-4 w-4 mt-1 invisible group-hover:visible cursor-pointer" src="https://img.icons8.com/ios-glyphs/30/000000/clipboard.png" @click="copyToClipBoard(contact.email)"/></div>
                </div>
                
                
                <div class="flex flex-row justify-between">
                  <button
                    class="bg-green-400 hover:bg-green-600 text-gray-800 hover:text-black font-semibold py-2 px-4  rounded-3xl w-24 mt-2 shadow-lg"
                    @click="onEdit(contact)"
                  >
                    Edit
                  </button>
                  <button
                    class="bg-red-400 hover:bg-red-600 text-black font-semibold py-2 px-4  rounded-3xl w-24 mt-2 shadow-lg"
                    @click="onDelete(contact)"
                  >
                    Delete
                  </button>
                </div>
            </div>
            
          </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name : "ContactDetailsCard",
    props: ['contact'],
    methods: {
      ...mapActions('toasts',['showToast']),
      onEdit (contact) {
        this.$emit('edit', contact);
      },
      onDelete (contact) {
        this.$emit('delete', contact);
      },
      copyToClipBoard (text) {
        navigator.clipboard.writeText(text);
        this.showToast({message : 'copied !',duration: 3000});
      }
    },
    
    computed: {
      initial () {
        return this.contact?.contact_name.charAt(0).toUpperCase();
      }
    }
}
</script>
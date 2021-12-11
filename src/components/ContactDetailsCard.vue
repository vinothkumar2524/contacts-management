<template>
    <div class="container bg-yellow-600">
            <p class="text-2xl">Name</p>
            <p class="text-base">company</p>
            <p class="text-base">Role</p>
            <p class="text-base">Phone no</p>
            <p class="text-base">Email</p>
            <div class="grid grid-cols-3">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Button
              </button>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Button 2
              </button>
            </div>
          </div>
</template>

<script>
export default {
    name : "ContactDetailsCard",
    data() {
        return {

        }
    }
}
</script>
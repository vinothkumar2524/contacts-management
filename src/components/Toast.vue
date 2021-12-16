<template>
    <div v-if="show" class="mt-8 absolute left-0 right-0 mx-auto text-center">
      <span class="bg-blue-600 shadow-lg py-2 px-4 rounded-3xl ">{{message}}</span>
    </div>
</template>

<script>


import { mapState , mapActions} from 'vuex'
export default {
    name: "Toast",
    data () {
        return {
            timerId : 0,
        }
    },
    computed: {
        ...mapState('toasts', ['show','message','duration']),
    },
    methods: {
        ...mapActions('toasts',['reset']),
        showToast: function () {
            this.timerId = setTimeout(() => {
                console.log("this ", this );
                this.reset();
                
            }, this.duration)
        }
    },
    watch: {
        show (new_val, old_val) {
            console.log(old_val)
            if(new_val) {
                this.showToast();
            }
            console.log(new_val)
        },
        timerId (val) {
            console.log("the timer ", val);
        }
    }
}
</script>

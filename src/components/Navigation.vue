<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img src="../assets/images/dumbbell-light.png" alt="" class="w-14">
        <h1 class="text-lg">Active Tracker</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link v-if="user" :to="{name: 'Create'}">Create</router-link>
        <router-link v-if="!user" :to="{name: 'Login'}">Login</router-link>

<!--  -->
        <li v-if="user" class="curoser-pointer" @click="logout">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";
import store from '../store/index'
import { computed } from "vue";
export default {
  setup() {
    // Get user from store
    const user = computed(()=> store.state.user)
    // Setup ref to router
    const router = useRouter()
    // Logout function
    const logout = async ()=>{
      await supabase.auth.signOut()
      router.push({name:"Home"})
    }

    return {logout, user, };
  },
};
</script>

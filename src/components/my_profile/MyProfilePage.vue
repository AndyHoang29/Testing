<template>
  <div>
    <Navbar />
    <v-container fill-height class="pa-16" fluid>
      <v-layout row wrap align-center class="pa-8">
        <v-flex sm12 md6 offset-md3>
          <v-card shaped>
            <v-card-text>
              <v-card-title class="pink--text"
                >Accound Information</v-card-title
              >
              <v-divider></v-divider>
              <v-container class="text-center">
                <form @submit.prevent="handleSubmit">
                  <v-text-field
                    prepend-icon="mdi-emoticon-happy"
                    type="text"
                    name="name"
                    v-model="user.name"
                    label="Name"
                    clearable
                    color="pink"
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-account"
                    type="text"
                    name="username"
                    v-model="user.username"
                    label="Username"
                    clearable
                    color="pink"
                  ></v-text-field>

                  <v-text-field
                    prepend-icon="mdi-email"
                    type="text"
                    name="email"
                    v-model="user.email"
                    label="Email"
                    clearable
                    color="pink"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="mdi-key"
                    type="password"
                    name="current_password"
                    v-model="user.password"
                    label="Current password"
                    clearable
                    color="pink"
                  ></v-text-field>
                  <!-- <v-text-field
                    prepend-icon="mdi-key"
                    type="password"
                    name="new_password"
                    v-model="new_password"
                    label="New password"
                    clearable
                    color="pink"
                  ></v-text-field> -->
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="update()"
                    dark
                    depressed
                    large
                    rounded
                    class="purple darken-2"
                  >
                    <v-icon left small>mdi-account-edit</v-icon>
                    Edit
                  </v-btn>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../lonely_components/Navbar";
import {userAxiosService} from '../../api_services/user.service.axios'
import router from '../../_helpers/router'

const  userFrom =JSON.parse(localStorage.getItem("user"));
export default {
  components: {
    Navbar,
  },
  data() {
    return {
     user:{
       userId : userFrom.userId,
       name: userFrom.name,
       username:userFrom.username,
       email:userFrom.email,
     },
      password:{
        old_password:'',
        new_password:'',
      }
    }
  },
    methods: {
        update(){     
            userAxiosService.update(this.user);
            //localStorage.setItem("user",JSON.stringify(this.user));
        }
        
        
  },
};
</script>

<style scoped>
</style>
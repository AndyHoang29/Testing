<template>
  <div class="login">
    <!-- <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          placeholder="Username"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required!
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          placeholder="Password"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required!
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.loggingIn">
          LogIn
        </button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form> -->
    <v-container fill-height class="pa-16" fluid >
      <v-layout row wrap align-center class="pa-16">
        <v-flex sm12 md6 offset-md3>
          <v-card shaped>
            <v-toolbar flat dark color="red darken-2">
              <v-toolbar-title>Log in</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-container class="text-center">
               <form @submit.prevent="handleSubmit">
                  <v-text-field
                    prepend-icon="mdi-account"
                    type="text"
                    name="username"
                    v-model="username"
                    label="Username"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    prepend-icon="mdi-key"
                    type="password"
                    name="password"
                    v-model="password"
                    label="Password"
                    required
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" dark depressed medium rounded class="red darken-2">
                    <v-icon left small>mdi-lock</v-icon>
                    Sign in
                  </v-btn>
                </form>
                <br>
                <div class="toRegister">Don't have an account? <a href="./register"> Sign up</a> </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { router } from "../../_helpers";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    //reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password }).then(() => {
          router.push("/checkIn");
        });
      }
    },
  },
};
</script>
<style>
  .login{
    background-image: url("background.jpg");
    height: 657px;
  }
  .v-card{
    opacity: 1;
  }

</style>

<template>
  <nav>
    <v-toolbar flat color="#827397">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <v-toolbar-side-icon><v-img class="mr-3" src='../../../public/Picture13.png' height="84px" width="110px"></v-img></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn dark flat color="deep-purple darken-3">
        <router-link class="white--text" to="/login" style="text-decoration:none">Logout</router-link>
        <v-icon right>mdi-logout-variant</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app color="#d8b9c3">
      <v-list>
        <v-list-item-group v-model="selectedItem" color="#827397">
          <v-list-item
            class="link"
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon class="purple--text" v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="purple--text"
                v-text="link.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      selectedItem: 0,
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-account", text: "My profile", route: "/profile" },
        { icon: "mdi-chart-bar", text: "My statistics", route: "/statistics" },
        { icon: "mdi-book-open", text: "Reflective Diary", route: "/diary" },
        { icon: "mdi-star", text: "Goals", route: "/goals" },
      ],
    };
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
</style>


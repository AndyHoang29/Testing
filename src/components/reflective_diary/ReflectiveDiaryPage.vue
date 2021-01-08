<template>
  <div>
    <Navbar />
    <!--Right content -->
    <v-img src="../../../public/book2.jpg" alt="Open Book">
      <v-container class="right-content">
        <v-card flat max-width="344" color="#FFF5E9">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ date }}
              </div>
              <v-list-item-title class="headline mb-1">
                Daily Journal
              </v-list-item-title>
              <v-list-item-subtitle
                >Take in a minute to reflect on your day</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-avatar class="ma-3" size="80" tile>
              <v-img src="../../../public/sun.png"></v-img>
            </v-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined rounded text @click.stop="dialog = true">
              Start
            </v-btn>
          </v-card-actions>
          <v-dialog max-width="500" v-model="dialog">
            <v-card class="dailyDialog">
              <v-card-title class="headline grey lighten-2">
                How are you feeling today? What are your plans?
              </v-card-title>

              <v-textarea
                v-model="newDiaryLog.description"
                autoGrow
                placeholder="Write down your thoughts and feelings for the day"
              ></v-textarea>
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="dialog = false;
                    newDiaryLog.type = 'DailyDiaryLog';
                    AddNewDiaryLog();"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-container>
      <!--Right content -->
      <v-container class="left-content">
        <h2 class="topics">Topics for you</h2>
        <v-container class="topicsforyou">
          <!--Self kindness row-->
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              max-height="150"
              max-width="350"
              @click.stop="takecaredialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Take care of yourself
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="50" tile>
                  <v-img src="../../../public/sun.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>
          <!-- <h4 class="topics-title">Self kindess</h4>
        <v-row class="self-kindness">
          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog2 = true"
            >
              <v-img src="../../../public/selfcare.png"> </v-img>
            </v-card>
          </v-col>

          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog3 = true"
            >
              <v-img src="../../../public/okay-unicorn.png"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
          <!--Self mastery row-->
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              max-height="150"
              max-width="350"
              @click.stop="appreciatedialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Appreciate yourself
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="50" tile>
                  <v-img src="../../../public/sun.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>
          <!-- <h4 class="topics-title">Self mastery</h4>
          <v-row class="self-mastery">
          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog2 = true"
            >
              <v-img src="../../../public/selfcare.png"> </v-img>
            </v-card>
          </v-col>

          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog3 = true"
            >
              <v-img src="../../../public/okay-unicorn.png"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
          <!--Courage row-->
          <v-hover v-slot="{ hover }">
            <v-card
              flat
              max-height="150"
              max-width="350"
              @click.stop="changedialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Embrace Change
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="50" tile>
                  <v-img src="../../../public/sun.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>

          <v-hover v-slot="{ hover }">
            <v-card
              flat
              max-height="150"
              max-width="350"
              @click.stop="difficultydialog = true"
              :elevation="hover ? 12 : 0"
              color="#FFF5E9"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Embrace Difficulty
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar class="ma-3" size="50" tile>
                  <v-img src="../../../public/sun.png"></v-img>
                </v-avatar>
              </v-list-item>
            </v-card>
          </v-hover>
          <!-- <h4 class="topics-title">Courage</h4>
          <v-row class="courage">
          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog2 = true"
            >
              <v-img src="../../../public/selfcare.png"> </v-img>
            </v-card>
          </v-col>

          <v-col cols="6" sm="2">
            <v-card
              class="d-flex align center"
              height="100"
              @click.stop="dialog3 = true"
            >
              <v-img src="../../../public/okay-unicorn.png"></v-img>
            </v-card>
          </v-col>
        </v-row> -->
        </v-container>

        <!-- Dialogs -->
        <!--Take Care of yourself dialog-->
        <v-dialog max-width="500" v-model="takecaredialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What do you need in order yo be comfortable and happy?
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="What can you do in order to take better care of yourself?"
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  takecaredialog = false;
                   newDiaryLog.type = 'Self-kindness';
                  AddNewDiaryLog();
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--Appreciate yourself dialog-->
        <v-dialog max-width="500" v-model="appreciatedialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What is one thing that you like about yourself? List at least one
              and explain why.
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="Personal characteristics, abilities, talents, qualities"
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  appreciatedialog = false;
                   newDiaryLog.type = 'self-kindness';
                  AddNewDiaryLog();
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--Embrace change dialog-->
        <v-dialog max-width="500" v-model="changedialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What is changing? How will it be different?
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="Think about also what is the positive side of this change"
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  changedialog = false;
                   newDiaryLog.type = 'courage';
                  AddNewDiaryLog();
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--Embrace difficulty dialog-->
        <v-dialog max-width="500" v-model="difficultydialog">
          <v-card class="Dialog">
            <v-card-title class="headline grey lighten-2">
              What is difficult for you?
            </v-card-title>
            <v-textarea
              v-model="newDiaryLog.description"
              autoGrow
              placeholder="Problem, understanding, other people, competence, not enough time, energy..."
            ></v-textarea>
            <v-card-actions>
              <v-btn
                color="primary"
                @click="
                  difficultydialog = false;
                   newDiaryLog.type = 'courage';
                  AddNewDiaryLog();
                "
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-img>
  </div>
</template>


<script>
import Navbar from "../lonely_components/Navbar";
import moment, { localeData } from "moment";
import { mapState, mapActions } from 'vuex';
const types = Object.freeze({
  DailyLog:{value:1, name:"Daily Log"},
  TakeCareLog:{value:2, name:"Take care of yourself"},
  AppreciateLog:{value:3, name:"Appreciate yourself"},
  ChangeLog:{value:4, name:"Embrace change"},
  DifficultyLog:{value:5, name:"Embrace difficulty"},
});
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      types,
      newDiaryLog: {
        type: '',
        description:'',
        dateLog: moment(),
        userId: JSON.parse(localStorage.getItem("user")).userId
      },
      date: moment().format("DD/MM/YYYY"),
      dialog: false,
      takecaredialog: false,
      appreciatedialog: false,
      changedialog: false,
      difficultydialog: false,
    };
  },
  methods: {
    ...mapActions("diaryLogs", [
      "addDiaryLog",
    ]),
    AddNewDiaryLog(name){
      this.addDiaryLog(this.newDiaryLog);
    },
  },
};
</script>

<style scoped>
.left-content {
  margin-top: 5rem;
  float: left;
  width: 50%;
}
.right-content {
  margin-top: 15rem;
  margin-right: 14rem;
  width: 30%;
  float: right;
}
.topics {
  margin-left: 11rem;
}
.topicsforyou {
  margin-top: 3.5rem;
  margin-left: 12rem;
}
</style>
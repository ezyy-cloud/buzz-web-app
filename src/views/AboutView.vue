<template>
<main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center" style="height: 100vh;">
          <v-col cols="12" sm="10" md="10">
            <v-card class="elevation-6">
              <v-toolbar color="hsl(281, 98%, 50%, 0.2)" dark flat>
                <v-toolbar-title style="font-weight: 500;">LOG IN</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="hsl(281, 98%, 50%)" style="color: white;" rounded="pill">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </main>
</template>

<script lang="ts">
export default {
  props: {
    source: String
  }
};
</script>

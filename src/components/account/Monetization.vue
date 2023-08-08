<script setup lang="ts">
import { ref } from 'vue';

</script>
<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="6" class="d-flex justify-space-between align-center">
                <div>
                    <v-col>
                        <div class="text-h2 font-weight-bold">$200.00</div>
                        <div class="text-h6 text-uppercase text-right">Balance</div>
                    </v-col>
                </div>
                <div>
                <v-col>
                    <v-btn class="mb-8 float-right" size="large">
                        Cash Out
                    </v-btn>
                </v-col>
                </div>
            </v-col>
        </v-row>
        <v-divider class="mt-12 mb-12"></v-divider>
        <v-row class="d-flex justify-center">
            <v-col cols="6">

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Paypal Name
                </div>

                <v-text-field density="compact" placeholder="Full Name" prepend-inner-icon="mdi-account"
                    variant="outlined"></v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis">PayPal Email</div>

                <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                    variant="outlined"></v-text-field>

                <v-card class="mb-12" color="surface-variant" variant="tonal">
                    <v-card-text class="text-medium-emphasis text-caption">
                        To avoid lost payments, please make sure the details above are working and correct.
                    </v-card-text>
                </v-card>

                <v-btn class="mb-8 float-right" size="large">
                    Update
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import { cloneDeep } from 'lodash';
import { mapGetters } from 'vuex';

export default {
    name: 'DeckPicker',
    data() {
        return {
            globalLevel: 1,
            mutableDecks: {},
        };
    },
    computed: {
        ...mapGetters(['decks']),
    },
    methods: {
        submit() {
            this.$store.dispatch('setupDecks', { ...this.mutableDecks });
        },
        applyGlobalLevel() {
            this.mutableDecks.decks = this.mutableDecks.decks.map(x => ({
                ...x,
                level: this.globalLevel,
            }));
        },
    },
    watch: {
        decks: {
            immediate: true,
            handler(val) {
                this.mutableDecks = cloneDeep(val);
            },
        },
    },
};
</script>

<template>
    <div>
        <h3>Decks</h3>
        <div>
            <label>
                Select global level
                <input type="number" v-model.number="globalLevel" min="1" max="7" />
                <button @click="applyGlobalLevel">Apply to all Decks</button>
            </label>
        </div>
        <div v-for="deck in mutableDecks.decks" :key="deck.name" class="deck-container">
            <label>
                <input type="checkbox" v-model="deck.isSelected" />
                <strong>{{deck.name}}</strong> with level
            </label>
            <input type="number" v-model.number="deck.level" min="1" max="7"  />
        </div>
        <div>
            <button @click="submit">Apply</button>
        </div>
    </div>
</template>

<style scoped>
input[type="number"] {
    width: 60px;
}

.deck-container {
    width: 30%;
    display: inline-block;
}
</style>


<script>

import { cloneDeep } from 'lodash';
import { mapGetters } from 'vuex';

export default {
    name: 'ScenarioPicker',
    data() {
        return {
            form: {
                level: null,
                scenario: null,
                showMonsterModifierDeck: null,
            },
        };
    },
    computed: {
        ...mapGetters(['scenarioForm']),
    },
    methods: {
        submit() {
            this.$store.dispatch('applyScenario', { ...this.form });
        },
    },
    watch: {
        scenarioForm: {
            immediate: true,
            handler(val) {
                this.form = cloneDeep(val);
            },
        },
    },
};
</script>

<template>
    <div>
        <h3>Scenario</h3>
        <div>
            <label>
                Level
                <input type="number" v-model.number="form.level" />
            </label>
        </div>
        <div>
            <label>
                Scenario
                <input type="number" v-model.number="form.scenario" />
            </label>
        </div>
        <div>
            <label>
                Show Monster Modifier Deck
                <input type="checkbox" v-model.number="form.showMonsterModifierDeck" />
            </label>
        </div>
        <button @click="submit">Apply</button>
    </div>
</template>

<style scoped>
input[type="number"] {
    width: 60px;
}
</style>


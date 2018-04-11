<template>
    <div id="app">
        <scenario-picker/>
        <deck-picker/>
    </div>
</template>

<script>

import ScenarioPicker from './components/ScenarioPicker';
import DeckPicker from './components/DeckPicker';

export default {
    name: 'App',
    components: {
        ScenarioPicker,
        DeckPicker,
    },
    created() {
        this.$store.dispatch('init');
    },
};
</script>

<style>

</style>

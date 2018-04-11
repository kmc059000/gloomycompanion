<template>
    <div id="app">
        <HelloWorld/>
    </div>
</template>

<script>
import store from './store';
import HelloWorld from './components/HelloWorld';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
    store,
};
</script>

<style>

</style>

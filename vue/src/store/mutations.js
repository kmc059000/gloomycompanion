export default {
    applyScenario(state, scenario) {
        state.level = scenario.level;
        state.scenario = scenario.scenario;
        state.showMonsterModifierDeck = scenario.showMonsterModifierDeck;
    },
};


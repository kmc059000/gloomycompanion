export default {
    scenarioForm(state) {
        return {
            level: state.level,
            scenario: state.scenario,
            showMonsterModifierDeck: state.showMonsterModifierDeck,
        };
    },

    decks(state) {
        return {
            decks: state.decks,
        };
    },
};


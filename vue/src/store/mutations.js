import { flow, map, fromPairs } from 'lodash/fp';

import { DECKS } from '../domain/cards';
import { DECK_TYPES } from '../domain/deckTypes';
import { SCENARIO_DEFINITIONS } from '../domain/scenarios';

// todo move to domain folder
function loadAbilityDeck(deckDefinition) {
    const cards = deckDefinition.cards.map((cardDefinition, index) => {
        const [shuffle, initiative, ...lines] = cardDefinition;
        return {
            id: `${deckDefinition.name}_${index}`,
            shuffle_next: shuffle,
            initiative,
            starting_lines: lines,
        };
    });

    const deck = {
        class: deckDefinition.class,
        name: deckDefinition.name,
        type: DECK_TYPES.ABILITY,
        draw_pile: cards,
        discard: [],
        move: [0, 0],
        attack: [0, 0],
        range: [0, 0],
        level: deckDefinition.level,
        health: [0, 0],
    };

    return deck;
}

export default {
    initDecks(state) {
        state.decks = flow(
            map(x => ({
                ...x,
                isSelected: false,
                level: 1,
            })),
            map(x => [x.name, x]),
            fromPairs,
        )(DECKS);
    },

    applyScenario(state, scenario) {
        state.level = scenario.level;
        state.scenario = scenario.scenario;
        state.showMonsterModifierDeck = scenario.showMonsterModifierDeck;

        // select decks for scenario
        Object.values(state.decks).forEach((d) => {
            d.isSelected = false;
        });
        const scenarioDef = SCENARIO_DEFINITIONS[state.scenario - 1];
        scenarioDef.decks.forEach((d) => {
            const isBoss = d.name.indexOf('Boss: ') === 0;

            if (!isBoss) {
                const deck = state.decks[d.name];
                deck.isSelected = true;
            } else {
                // todo handle boss definitions
            }
        });
    },

    setupDecks(state, decks) {
        // todo create decks that are selected with the level provided.
        // replace any decks that match the same type.

        const abilityDecks = decks.map(x => loadAbilityDeck(x));

        // todo modifier deck

        state.activeDecks = {
            abilityDecks,
        };
    },
};


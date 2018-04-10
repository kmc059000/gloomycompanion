/* Macros used in card text, alphabetical order */
const MACROS = {
    '%air%': '<img class=\'element\' src=\'images/air.svg\'>',
    '%any%': '<img class=\'element\' src=\'images/any_element.svg\'>',
    '%aoe-4-with-black%': '<img class=\'aoe h2\' src=\'images/aoe-4-with-black.svg\'>',
    '%aoe-circle%': '<div class=\'collapse small\'><img class=\'aoe h3\' src=\'images/aoe-circle.svg\'></div>',
    '%aoe-circle-with-middle-black%': '<div class=\'collapse small\'><img class=\'aoe h3\' src=\'images/aoe-circle-with-middle-black.svg\'></div>',
    '%aoe-circle-with-side-black%': '<img class=\'aoe h3\' src=\'images/aoe-circle-with-side-black.svg\'>',
    '%aoe-line-3-with-black%': '<div class=\'collapse\'><img class=\'aoe h1 rotated\' src=\'images/aoe-line-3-with-black.svg\'></div>',
    '%aoe-line-4-with-black%': '<div class=\'collapse\'><img class=\'aoe h1 rotated\' src=\'images/aoe-line-4-with-black.svg\'></div>',
    '%aoe-line-6-with-black%': '<img class=\'aoe h6 right-aligned\' src=\'images/aoe-line-6-with-black.svg\'></div>',
    '%aoe-triangle-2-side%': '<div class=\'collapse\'><img class=\'aoe h2\' src=\'images/aoe-triangle-2-side.svg\'></div>',
    '%aoe-triangle-2-side-with-black%': '<div class=\'collapse\'><img class=\'aoe h2\' src=\'images/aoe-triangle-2-side-with-black.svg\'></div>',
    '%aoe-triangle-3-side-with-corner-black%': '<div class=\'collapse\'><img class=\'aoe h3\' src=\'images/aoe-triangle-3-side-with-corner-black.svg\'></div>',
    '%attack%': '<span class=\'nobr\'>Attack <img class=\'icon\' src=\'images/attack.svg\'></span>',
    '%bless%': '<span class=\'nobr\'>BLESS <img class=\'icon\' src=\'images/bless.svg\'></span>',
    '%boss-aoe-elder-drake-sp1%': '<div class=\'collapse\'><img class=\'aoe h3\' src=\'images/elderDrake.special1Area.svg\'></div>',
    '%boss-aoe-inox-bodyguard-sp1%': '<div class=\'collapse\'><img class=\'aoe h3\' src=\'images/inoxBodyguard.special1Area.svg\'></div>',
    '%boss-aoe-sightless-eye-sp1%': '<div class=\'collapse\'><img class=\'aoe h3\' src=\'images/sightlessEye.special1Area.svg\'></div>',
    '%boss-aoe-sightless-eye-sp2%': '<div class=\'collapse\'><img class=\'aoe h3\' src=\'images/sightlessEye.special2Area.svg\'></div>',
    '%curse%': '<span class=\'nobr\'>CURSE <img class=\'icon\' src=\'images/curse.svg\'></span>',
    '%dark%': '<img class=\'element\' src=\'images/dark.svg\'>',
    '%disarm%': '<span class=\'nobr\'>DISARM <img class=\'icon\' src=\'images/disarm.svg\'></span>',
    '%earth%': '<img class=\'element\' src=\'images/earth.svg\'>',
    '%fire%': '<img class=\'element\' src=\'images/fire.svg\'>',
    '%heal%': '<span class=\'nobr\'>Heal <img class=\'icon\' src=\'images/heal.svg\'></span>',
    '%ice%': '<img class=\'element\' src=\'images/ice.svg\'>',
    '%immobilize%': '<span class=\'nobr\'>IMMOBILIZE <img class=\'icon\' src=\'images/immobilize.svg\'></span>',
    '%invisible%': '<span class=\'nobr\'>INVISIBLE <img class=\'icon\' src=\'images/invisibility.svg\'></span>',
    '%jump%': '<span class=\'nobr\'>Jump <img class=\'icon\' src=\'images/jump.svg\'></span>',
    '%light%': '<img class=\'element\' src=\'images/light.svg\'>',
    '%loot%': '<span class=\'nobr\'>Loot <img class=\'icon\' src=\'images/loot.svg\'></span>',
    '%move%': '<span class=\'nobr\'>Move <img class=\'icon\' src=\'images/move.svg\'></span>',
    '%muddle%': '<span class=\'nobr\'>MUDDLE <img class=\'icon\' src=\'images/muddle.svg\'></span>',
    '%pierce%': '<span class=\'nobr\'>PIERCE <img class=\'icon\' src=\'images/pierce.svg\'></span>',
    '%poison%': '<span class=\'nobr\'>POISON <img class=\'icon\' src=\'images/poison.svg\'></span>',
    '%pull%': '<span class=\'nobr\'>PULL <img class=\'mirrored icon\' src=\'images/push.svg\'></span>',
    '%push%': '<span class=\'nobr\'>PUSH <img class=\'icon\' src=\'images/push.svg\'></span>',
    '%range%': '<span class=\'nobr\'>Range <img class=\'icon\' src=\'images/range.svg\'></span>',
    '%retaliate%': '<span class=\'nobr\'>Retaliate <img class=\'icon\' src=\'images/retaliate.svg\'></span>',
    '%shield%': '<span class=\'nobr\'>Shield <img class=\'icon\' src=\'images/shield.svg\'></span>',
    '%flying%': '<span class=\'nobr\'><img class=\'icon\' src=\'images/fly.svg\'></span>',
    '%strengthen%': '<span class=\'nobr\'>STRENGTHEN <img class=\'icon\' src=\'images/strengthen.svg\'></span>',
    '%stun%': '<span class=\'nobr\'>STUN <img class=\'icon\' src=\'images/stun.svg\'></span>',
    '%target%': '<span class=\'nobr\'>Target <img class=\'icon\' src=\'images/target.svg\'></span>',
    '%use_element%': '<img class=\'element overlay\' src=\'images/use_element.svg\'>',
    '%wound%': '<span class=\'nobr\'>WOUND <img class=\'icon\' src=\'images/wound.svg\'></span>',
};

function expandMacro(macro) {
    const key = macro.toLowerCase();
    if (key in MACROS) {
        return MACROS[key];
    }
    return macro;
}

function expandStat(s, stat, value) {
    let re = new RegExp(`%${stat}% (\\+|-)(\\d*)`, 'g');
    const lineParsed = re.exec(s);

    const hasEliteValue = (value.length === 2);
    let normalAttack = value[0];
    // Check in case of bosses with text in the attack (C+1)
    re = /(\\d*)(\\+|-)?([a-zA-Z]+)/i;
    let extraTextForParticularBosses = '';
    const valueParsed = re.exec(String(normalAttack));
    if (valueParsed && valueParsed[3]) {
        const symbol = (valueParsed[2] === '-') ? '-' : '+';
        extraTextForParticularBosses = valueParsed[3] + symbol;
        normalAttack = (valueParsed[1] !== '') ? parseInt(valueParsed[1], 10) : 0;
    }

    if (lineParsed) {
        if (lineParsed[1] === '+') {
            const valueNormal = normalAttack + parseInt(lineParsed[2], 10);
            if (hasEliteValue) {
                const valueElite = value[1] + parseInt(lineParsed[2], 10);
                return `%${stat}% ${valueNormal} / <span class='elite-color'>${valueElite}</span>`;
            }
            return `%${stat}% ${extraTextForParticularBosses} ${valueNormal}`;
        } else if (lineParsed[1] === '-') {
            const valueNormal = normalAttack - parseInt(lineParsed[2], 10);
            if (hasEliteValue) {
                const valueElite = value[1] - parseInt(lineParsed[2], 10);
                return `%${stat}% ${valueNormal} / <span class='elite-color'>${valueElite}</span>`;
            }
            return `%${stat}% ${extraTextForParticularBosses} ${valueNormal}`;
        }
    }

    return s;
}

function attributesToLines(attributes) {
    if (!attributes || (attributes[0].length === 0 && attributes[1].length === 0)) {
        return [];
    }

    // To make it more readable, group 3 elements in the same row abd naje them small
    let attributeLines = ['* Attributes'];

    // Write common attributes in white
    const normalAttributeLines = [];
    let line = 0;
    for (let i = 0; i < attributes[0].length; i += 1) {
        normalAttributeLines[line] = normalAttributeLines[line] ? `${normalAttributeLines[line]}${attributes[0][i]}, ` : `${attributes[0][i]}, `;
        if ((i + 1) % 3 === 0) {
            line += 1;
        }
    }
    attributeLines = attributeLines.concat(normalAttributeLines.map(l => (l ? `**${l.replace(/(,\s$)/g, '')}` : '')));

    // Write elite attributes in Gold
    const eliteAttributeLines = [];
    // TODO
    // In case we want to show Common and Elite only attributes
    // var elite_attributes = attributes[1].map(function(elite_attribute){
    //     return ((attributes[0].indexOf(elite_attribute) == -1) ? elite_attribute: '')
    // });
    line = 0;
    for (let i = 0; i < attributes[1].length; i += 1) {
        eliteAttributeLines[line] = eliteAttributeLines[line] ? `${eliteAttributeLines[line]}${attributes[1][i]}, ` : `${attributes[1][i]}, `;
        if ((i + 1) % 3 === 0) {
            line += 1;
        }
    }

    return attributeLines.concat(eliteAttributeLines.map(l => (l ? `** <span class='elite-color'>${l.replace(/(,\s$)/g, '')}</span>` : '')));
}

function immunitiesToLines(immunities) {
    if (!immunities) {
        return [];
    }

    // To make it more readable, group 3 elements in the same row abd naje them small
    const immunitiesLines = [];
    let line = 0;
    for (let i = 0; i < immunities.length; i += 1) {
        immunitiesLines[line] = immunitiesLines[line] ? `${immunitiesLines[line]}${immunities[i]}, ` : `${immunities[i]}, `;
        if ((i + 1) % 3 === 0) {
            line += 1;
        }
    }
    return ['* Immunities'].concat(immunitiesLines.map(l => (`** <span class='small'>${l.replace(/(,\s$)/g, '')}</span>`)));
}

function notesToLines(notes) {
    return [`* <span class='small'> Notes: ${notes}</span>`];
}

function expandSpecial(s, specialValue) {
    return specialValue.map(l => `* ${l}`);
}

function specialToLines(s, special1, special2) {
    let lines = s;
    if (special1 && s.indexOf('Special 1') !== -1) {
        lines = expandSpecial(s, special1);
    }
    if (special1 && lines.indexOf('Special 2') !== -1) {
        lines = expandSpecial(s, special2);
    }

    return lines;
}

function expandString(s, attack, move, range) {
    const re = /%(attack|move|range)% (\\+|-)(\\d*)/g;

    let found = re.exec(s);
    let r = s;
    while (found) {
        if (found[1] === 'attack') {
            r = r.replace(found[0], expandStat(found[0], 'attack', attack));
        } else if (found[1] === 'move') {
            r = r.replace(found[0], expandStat(found[0], 'move', move));
        } else if (found[1] === 'range') {
            r = r.replace(found[0], expandStat(found[0], 'range', range));
        }

        found = re.exec(r);
    }

    return s.replace(/%[^%]*%/gi, expandMacro);
}

export default {
    MACROS,
    expandMacro,
    expandStat,
    attributesToLines,
    immunitiesToLines,
    notesToLines,
    specialToLines,
    expandString,
};

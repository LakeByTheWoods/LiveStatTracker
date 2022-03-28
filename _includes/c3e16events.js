{ time:1748, callback:(direction)=> { eventHPDiff(direction, pcLaudna, pcLaudna, -11); } }, // Form of dread (estimated based on discussions around form of dread)

{ time:2934, callback:(direction)=> { eventBattleStart(direction); } },

{ time:2936, callback:(direction)=> { eventEnterInitiative(direction, pcAshton, 24); } },
{ time:2936, callback:(direction)=> { eventEnterInitiative(direction, pcImogen, 22); } },
{ time:2945, callback:(direction)=> { eventEnterInitiative(direction, pcFearne, 20); } },
{ time:2957, callback:(direction)=> { eventEnterInitiative(direction, pcOrym, 16); } },
{ time:2961, callback:(direction)=> { eventEnterInitiative(direction, pcChetney, 17); } },
{ time:2991, callback:(direction)=> { eventEnterInitiative(direction, pcLaudna, 7); } },
{ time:2998, callback:(direction)=> { eventEnterInitiative(direction, pcFCG, 3); } },

{ time:3003, callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },

{ time:3145, callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },

// Lair action, spawns creepers

{ time:3284, callback:(direction)=> { eventTurnStarts(direction, pcFearne); } },
{ time:3474, callback:(direction)=> { eventHPDiff(direction, pcFearne, npcShadeMoth, 8); } }, // Mister poo

{ time:3528, callback:(direction)=> { eventEnterInitiative(direction, npcLadyEmoth, 20-0.1); } },
{ time:3528, callback:(direction)=> { eventTurnStarts(direction, npcLadyEmoth); } },

{ time:3589, callback:(direction)=> { eventEnterInitiative(direction, npcGus, 20-0.2); } },
{ time:3589, callback:(direction)=> { eventTurnStarts(direction, npcGus); } },
{ time:3640, callback:(direction)=> { eventHPDiff(direction, npcGus, npcShadeMoth, 14); } }, // Fireball

{ time:3661, callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },

{ time:3870, callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },
{ time:3983, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeMoth, 11); } }, // Attack, attack, etc.
{ time:3989, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeMoth, 14); } },
{ time:4037, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeMoth, 12); } },
{ time:4054, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeMoth, 16); } },

// Legendary action
{ time:4133, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcOrym, 11); } }, // Piercing
{ time:4137, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcOrym, 3); } }, // Poison

{ time:4177, callback:(direction)=> { eventEnterInitiative(direction, npcShadeMoth, 16-0.1); } },
{ time:4177, callback:(direction)=> { eventTurnStarts(direction, npcShadeMoth); } },
{ time:4192, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeMoth, -6); } }, // Accidental super die
{ time:4286, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcLaudna, 20); } }, // Shade shart
{ time:4303, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcFCG, 20); } },
{ time:4314, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcFCG, -10); } }, // Resistant to poison
{ time:4333, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcOrym, 20); } },
{ time:4342, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, npcOllie, 20); } },
{ time:4360, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcOrym, -12); } }, // Resistant to poison correction (for last turn as well)
{ time:4437, callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcShadeMoth, 13); } }, // Hellish rebuke

{ time:4532, callback:(direction)=> { eventEnterInitiative(direction, npcOllie, 16-0.2); } },
{ time:4532, callback:(direction)=> { eventTurnStarts(direction, npcOllie); } },
{ time:4580, callback:(direction)=> { eventHPDiff(direction, npcOllie, npcShadeMoth, 8); } }, // Piercing
{ time:4584, callback:(direction)=> { eventHPDiff(direction, npcOllie, npcShadeMoth, 2); } }, // Hunter's Mark

{ time:4602, callback:(direction)=> { eventTurnStarts(direction, pcLaudna); } },

{ time:4701, callback:(direction)=> { eventEnterInitiative(direction, npcShadeCreep, 7-0.1); } },
{ time:4701, callback:(direction)=> { eventTurnStarts(direction, npcShadeCreep); } },
{ time:4741, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcImogen, 5); } }, // Pierce
{ time:4749, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcImogen, 6); } }, // Necro

{ time:4802, callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },
{ time:4882, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcOrym, -4); } }, // Cure wounds

{ time:5005, callback:(direction)=> { eventEnterInitiative(direction, npcHusks, 3-0.1); } },
{ time:5005, callback:(direction)=> { eventTurnStarts(direction, npcHusks); } },

{ time:5077, callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },
{ time:5192, callback:(direction)=> { eventHPDiff(direction, pcAshton, npcShadeCreep, 13); } },
{ time:5209, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcAshton, 2); } },

{ time:5225, callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },
{ time:5284, callback:(direction)=> { eventHPDiff(direction, pcImogen, npcHusks, 15); } },

// Lair action, spawns creepers

{ time:5436, callback:(direction)=> { eventTurnStarts(direction, npcLadyEmoth); } }, // Trapped in a sphere
{ time:5442, callback:(direction)=> { eventTurnStarts(direction, npcGus); } },
{ time:5488, callback:(direction)=> { eventHPDiff(direction, npcGus, npcShadeMoth, 6); } },

{ time:5519, callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },
{ time:5525, callback:(direction)=> { eventTurnStarts(direction, pcFearne); } }, // Whoops, forgot about Ashley
{ time:5705, callback:(direction)=> { eventHPDiff(direction, pcFearne, npcShadeMoth, 4); } }, // Mister poo

{ time:5745, callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },
{ time:5898, callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },

{ time:5946, callback:(direction)=> { eventHPDiff(direction, npcOllie, pcImogen, 4); } }, // Legendary action
{ time:5948, callback:(direction)=> { eventHPDiff(direction, npcOllie, pcImogen, 4); } }, // Legendary action

{ time:6002, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcHusks, 10); } },
{ time:6012, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcHusks,  8); } },

{ time:6057, callback:(direction)=> { eventTurnStarts(direction, npcShadeMoth); } },
{ time:6126, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcLaudna, 10); } }, // Shade shart.
{ time:6134, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcFCG, 5); } },
{ time:6144, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, npcGus, 10); } },

{ time:6163, callback:(direction)=> { eventTurnStarts(direction, npcOllie); } },
{ time:6194, callback:(direction)=> { eventHPDiff(direction, npcOllie, npcHusks,  10); } }, // Unknown damage ammount

{ time:6211, callback:(direction)=> { eventTurnStarts(direction, pcLaudna); } },
{ time:6286, callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcShadeMoth, 6); } },

{ time:6424, callback:(direction)=> { eventTurnStarts(direction, npcShadeCreep); } },

{ time:6505, callback:(direction)=> { eventHPDiff(direction, npcGus, npcShadeMoth, 9); } }, // AOO

{ time:6541, callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },
{ time:6698, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcChetney, 9); } }, // So *that's* what that does...
{ time:6810, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcOrym, -4); } },

{ time:6820, callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },
{ time:6928, callback:(direction)=> { eventHPDiff(direction, pcAshton, npcShadeCreep, 10); } }, // "that's a lot" damage

{ time:6965, callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },

{ time:7209, callback:(direction)=> { eventTurnStarts(direction, pcFearne); } },

{ time:7385, callback:(direction)=> { eventTurnStarts(direction, npcGus); } },

{ time:7438, callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },

{ time:7520, callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },

{ time:7644, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcOrym, 2); } },

{ time:7690, callback:(direction)=> { eventTurnStarts(direction, npcShadeMoth); } },

{ time:7813, callback:(direction)=> { eventTurnStarts(direction, npcOllie); } },

{ time:7858, callback:(direction)=> { eventTurnStarts(direction, pcLaudna); } },

{ time:7991, callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },

{ time:8055, callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },

{ time:8075, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcChetney, 4); } },
{ time:8080, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcChetney, 7); } },

{ time:8091, callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },

{ time:8246, callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },
{ time:8345, callback:(direction)=> { eventHPDiff(direction, pcImogen, npcShadeMoth, 12); } },

{ time:8429, callback:(direction)=> { eventTurnStarts(direction, pcFearne); } },
{ time:8513, callback:(direction)=> { eventHPDiff(direction, pcFearne, npcShadeMoth, 20); } },

{ time:8680, callback:(direction)=> { eventTurnStarts(direction, npcGus); } },

{ time:8706, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcChetney, 3); } },
{ time:8709, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcChetney, 8); } },

{ time:8719, callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },
{ time:8746, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcChetney, 2); } },
{ time:8749, callback:(direction)=> { eventHPDiff(direction, npcShadeMoth, pcChetney, 10); } },
{ time:8760, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcChetney, -6); } },

{ time:8783, callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },

{ time:8814, callback:(direction)=> { eventTurnStarts(direction, npcShadeMoth); } },

{ time:8849, callback:(direction)=> { eventTurnStarts(direction, npcOllie); } },

{ time:8854, callback:(direction)=> { eventTurnStarts(direction, pcLaudna); } },
{ time:8976, callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcShadeMoth, 12); } },

{ time:9020, callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },
{ time:9029, callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },

{ time:9777, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeCreep, 10); } },
{ time:9779, callback:(direction)=> { eventHPDiff(direction, pcChetney, npcShadeCreep, 12); } },

{ time:9959, callback:(direction)=> { eventHPDiff(direction, pcAshton, npcShadeCreep, 17); } },
{ time:9990, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcLaudna, 5); } },
{ time:9994, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcLaudna, 7); } },
{ time:9997, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcLaudna, -6); } },
{ time:10002, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcFCG, 6); } },

{ time:10019, callback:(direction)=> { eventHPDiff(direction, pcImogen, npcShadeCreep, 9); } },
{ time:10052, callback:(direction)=> { eventHPDiff(direction, pcFearne, npcShadeCreep, 3); } },
{ time:10091, callback:(direction)=> { eventHPDiff(direction, pcFCG, pcFCG, 6); } },

{ time:10213, callback:(direction)=> { eventHPDiff(direction, pcOrym, npcShadeCreep, 9); } },
{ time:10257, callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcShadeCreep, 13); } },
{ time:10259, callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcShadeCreep, 9); } },

{ time:10310, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcLaudna, 9); } },
{ time:10314, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcLaudna, 14); } },
{ time:10449, callback:(direction)=> { eventHPSet(direction, pcLaudna, 1); } },

{ time:10507, callback:(direction)=> { eventHPDiff(direction, pcAshton, npcShadeCreep, 15); } },

{ time:10750, callback:(direction)=> { eventHPDiff(direction, pcFCG, npcShadeCreep, 12); } },
{ time:10771, callback:(direction)=> { eventHPDiff(direction, pcImogen, npcShadeCreep, 20); } },
{ time:10776, callback:(direction)=> { eventHPDiff(direction, pcImogen, npcShadeCreep, 6); } },

{ time:10801, callback:(direction)=> { eventHPDiff(direction, npcShadeCreep, pcFCG, 3); } },
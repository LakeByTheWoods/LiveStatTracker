
{ time:convertTwitchTime("00:30:00"), callback:(direction)=> { eventBattleStart(direction); } },

{ time:convertTwitchTime("00:30:12"), callback:(direction)=> { eventEnterInitiative(direction, pcImogen, 15); } },
{ time:convertTwitchTime("00:30:21"), callback:(direction)=> { eventEnterInitiative(direction, pcFearne, 10); } },
{ time:convertTwitchTime("00:30:31"), callback:(direction)=> { eventEnterInitiative(direction, pcAshton, 6); } },
{ time:convertTwitchTime("00:30:45"), callback:(direction)=> { eventEnterInitiative(direction, pcLaudna, 3); } },

{ time:convertTwitchTime("00:30:53"), callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },

{ time:convertTwitchTime("00:33:36"), callback:(direction)=> { eventEnterInitiative(direction, pcOrym, 9); } },

{ time:convertTwitchTime("00:33:55"), callback:(direction)=> { eventEnterInitiative(direction, npcPlant, 15-0.1); } },
{ time:convertTwitchTime("00:33:55"), callback:(direction)=> { eventTurnStarts(direction, npcPlant); } },

{ time:convertTwitchTime("00:36:02"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcAshton, 32); } },

{ time:convertTwitchTime("00:36:51"), callback:(direction)=> { eventTurnStarts(direction, pcFearne); } },
{ time:convertTwitchTime("00:38:10"), callback:(direction)=> { eventHPDiff(direction, pcFearne, npcPlant, 18/2); } }, // Resistant to poison

{ time:convertTwitchTime("00:40:07"), callback:(direction)=> { eventEnterInitiative(direction, pcFCG, 7); } },
{ time:convertTwitchTime("00:40:08"), callback:(direction)=> { eventEnterInitiative(direction, pcChetney, 10-0.1); } },

{ time:convertTwitchTime("00:40:49"), callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },

{ time:convertTwitchTime("00:42:43"), callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },
{ time:convertTwitchTime("00:44:41"), callback:(direction)=> { eventHPDiff(direction, pcOrym, npcPlant, 8); } },

{ time:convertTwitchTime("00:44:48"), callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },

{ time:convertTwitchTime("00:46:56"), callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },
{ time:convertTwitchTime("00:47:30"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcAshton, 19); } },

{ time:convertTwitchTime("00:51:18"), callback:(direction)=> { eventTurnStarts(direction, pcLaudna); } },
{ time:convertTwitchTime("00:53:02"), callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcPlant, 5); } },

{ time:convertTwitchTime("00:53:18"), callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },
{ time:convertTwitchTime("00:56:18"), callback:(direction)=> { eventHPDiff(direction, pcImogen, npcPlant, 27); } },
{ time:convertTwitchTime("00:56:33"), callback:(direction)=> { eventHPDiff(direction, pcImogen, npcPlant, 32); } },

{ time:convertTwitchTime("00:58:01"), callback:(direction)=> { eventTurnStarts(direction, npcPlant); } },
{ time:convertTwitchTime("01:01:02"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcFearne, 14); } },
{ time:convertTwitchTime("01:01:52"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcLaudna, 20); } },

{ time:convertTwitchTime("01:02:22"), callback:(direction)=> { eventTurnStarts(direction, pcFearne); } },

{ time:convertTwitchTime("01:04:02"), callback:(direction)=> { eventHPDiff(direction, pcFearne, npcPlant, 13*2); } }, // Fire is super effective

{ time:convertTwitchTime("01:07:16"), callback:(direction)=> { eventHPDiff(direction, pcLaudna, npcPlant, 15); } },
{ time:convertTwitchTime("01:07:22"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcLaudna, 12); } },

{ time:convertTwitchTime("01:08:03"), callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },
{ time:convertTwitchTime("01:08:56"), callback:(direction)=> { eventHPDiff(direction, pcChetney, pcChetney, 5); } }, // hemocraft die
{ time:convertTwitchTime("01:10:01"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 37); } },
{ time:convertTwitchTime("01:11:19"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcFCG, 14); } },

{ time:convertTwitchTime("01:11:34"), callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },

{ time:convertTwitchTime("01:12:03"), callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },
{ time:convertTwitchTime("01:13:46"), callback:(direction)=> { eventHPDiff(direction, pcOrym, npcPlant, 13); } },
{ time:convertTwitchTime("01:15:08"), callback:(direction)=> { eventHPDiff(direction, pcFCG, pcAshton, -6); } },

{ time:convertTwitchTime("01:15:27"), callback:(direction)=> { eventTurnStarts(direction, pcAshton); } },
{ time:convertTwitchTime("01:16:22"), callback:(direction)=> { eventHPDiff(direction, pcAshton, npcPlant, 8); } },
{ time:convertTwitchTime("01:16:35"), callback:(direction)=> { eventHPDiff(direction, pcAshton, npcPlant, 14); } },
{ time:convertTwitchTime("01:17:23"), callback:(direction)=> { eventHPDiff(direction, pcAshton, npcPlant, 3); } },
{ time:convertTwitchTime("01:17:29"), callback:(direction)=> { eventHPDiff(direction, pcAshton, npcPlant, 14); } },

{ time:convertTwitchTime("01:18:43"), callback:(direction)=> { eventTurnStarts(direction, pcLaudna); } },
{ time:convertTwitchTime("01:19:00"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcLaudna, 24); } },
{ time:convertTwitchTime("01:21:25"), callback:(direction)=> { eventHPSet(direction, pcLaudna, 1); } },
{ time:convertTwitchTime("01:22:35"), callback:(direction)=> { eventHPDiff(direction, pcLaudna, pcLaudna, -3); } },

{ time:convertTwitchTime("01:25:41"), callback:(direction)=> { eventTurnStarts(direction, pcImogen); } },
{ time:convertTwitchTime("01:27:29"), callback:(direction)=> { eventHPDiff(direction, pcImogen, npcPlant, 32); } },

{ time:convertTwitchTime("01:28:12"), callback:(direction)=> { eventTurnStarts(direction, npcPlant); } },
{ time:convertTwitchTime("01:29:03"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcFCG, 15); } },
{ time:convertTwitchTime("01:30:03"), callback:(direction)=> { eventHPDiff(direction, pcOrym, npcPlant, 12); } },
{ time:convertTwitchTime("01:30:12"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 10); } },
{ time:convertTwitchTime("01:30:14"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 8); } },

{ time:convertTwitchTime("01:30:30"), callback:(direction)=> { eventTurnStarts(direction, pcFearne); } },
{ time:convertTwitchTime("01:32:20"), callback:(direction)=> { eventHPDiff(direction, pcFearne, npcPlant, 28); } },

{ time:convertTwitchTime("01:34:01"), callback:(direction)=> { eventTurnStarts(direction, pcChetney); } },
{ time:convertTwitchTime("01:34:32"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 10); } },
{ time:convertTwitchTime("01:34:35"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 10); } },
{ time:convertTwitchTime("01:34:40"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 10); } },
{ time:convertTwitchTime("01:34:46"), callback:(direction)=> { eventHPDiff(direction, pcChetney, npcPlant, 6); } },

{ time:convertTwitchTime("01:35:57"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcOrym, 20); } },
{ time:convertTwitchTime("01:36:10"), callback:(direction)=> { eventHPDiff(direction, pcFCG, pcOrym, -10); } },
{ time:convertTwitchTime("01:36:10"), callback:(direction)=> { eventHPDiff(direction, pcFCG, pcFCG, -10); } },

{ time:convertTwitchTime("01:36:20"), callback:(direction)=> { eventTurnStarts(direction, pcOrym); } },
{ time:convertTwitchTime("01:37:20"), callback:(direction)=> { eventHPDiff(direction, pcOrym, npcPlant, 11); } },
{ time:convertTwitchTime("01:37:24"), callback:(direction)=> { eventHPDiff(direction, pcOrym, npcPlant, 8); } },
{ time:convertTwitchTime("01:38:05"), callback:(direction)=> { eventHPDiff(direction, npcPlant, pcOrym, 12); } },

{ time:convertTwitchTime("01:38:11"), callback:(direction)=> { eventTurnStarts(direction, pcFCG); } },
{ time:convertTwitchTime("01:38:50"), callback:(direction)=> { eventHPDiff(direction, pcFCG, npcPlant, 16); } },
{ time:convertTwitchTime("01:38:55"), callback:(direction)=> { eventHDYWTDT(direction, pcFCG, npcPlant); } },
{ time:convertTwitchTime("01:38:55"), callback:(direction)=> { eventBattleFinish(direction); } },

{ time:convertTwitchTime("01:53:13"), callback:(direction)=> { eventLongRest_Everyone(direction); } },

{ time:convertTwitchTime("02:09:21"), callback:(direction)=> { eventBreakBegins(direction); } },
{ time:convertTwitchTime("02:20:18"), callback:(direction)=> { eventBreakEnds(direction); } },

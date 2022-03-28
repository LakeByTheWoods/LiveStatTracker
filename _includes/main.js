
		var log = console.log;

		{% if page.pc %}
			{% include {{ page.pc }} %}
		{% endif %}
		{% if page.npc %}
			{% include {{ page.npc }} %}
		{% endif %}


		var twitchTimeOffset = 0;
		function convertTwitchTime(stime) {
			return ((stime.split(':').reduce((acc,time)=>(60*acc)+ +time)) - twitchTimeOffset);
		}

		{% if page.twitchTimeOffset %}
		twitchTimeOffset = convertTwitchTime("{{ page.twitchTimeOffset }}");
		{% endif %}

		var initiativeList = [];
		function eventBattleStart(direction) {
			currentTurn = null;
			initiativeList = [];
			renderInitiativeList();
		}

		function eventBattleFinish(direction) {
			// TODO: Track multiple battles per episode
		}

		function eventHDYWTDT(direction, from, to) {
			
		}

		function eventBreakBegins(direction) {
			// TODO: Provide skip button
		}

		function eventBreakEnds(direction) {
			// TODO: Provide skip button
		}

		function eventLongRest_Everyone(direction) {
			for (var i = pc.length - 1; i >= 0; i--) {
				eventHPSet(direction, pc[i], pc[i].max_HP);
			}
		}

		function eventEnterInitiative(direction, char, initiative) {
			if (direction)
				initiativeList.push({c: char, i: initiative});
			else
				initiativeList = initiativeList.filter(item=>item.c!=char);
			initiativeList.sort((a,b)=>b.i - a.i);

			renderInitiativeList();
		}

		function renderInitiativeList() {
			var ihtml = "";
			for (var i = 0; i < initiativeList.length; i++) {
				ihtml += "<div" + (currentTurn === initiativeList[i].c ? " style=\"background-color:lightgreen;\"" : "") + ">" +
					"<div style=\"width=20px;display:inline-block\">❤" + initiativeList[i].c.HP + "</div><div style=\"display:inline-block;float:right\">" + initiativeList[i].c.name +
					"</div></div>";
			}
			document.getElementById("initiative-list").innerHTML = ihtml;
		}

		var currentTurn;
		function eventTurnStarts(direction, char) {
			if (direction)
				currentTurn = char;
			else
			{
				const index = initiativeList.findIndex((i)=>i.c == char)
				if (index <= 0)
					currentTurn = initiativeList[initiativeList.length - 1].c;
				else
					currentTurn = initiativeList[index - 1].c;
			}
			renderInitiativeList();
		}

		function eventHPSet(direction, char, set) {
			if (direction) {
				if (!('HPHist' in char))
					char.HPHist = [];
				char.HPHist.push(char.HP);
				char.HP = set;
			} else {
				const pop =  char.HPHist.pop();

				char.HP = pop;
			}
		}

		var events = [
			{% if page.episodeevents %}
				{% include {{ page.episodeevents }} %}
			{% endif %}
		];

		function cpyHPDiff(pre, pc) {
			return navigator.clipboard.writeText("{ time:" + "convertTime(\"0::\")" + ", callback:(direction)=> { eventHPDiff(direction, from, " + pre + pc.shortname + ", X); } },");
		}

		function cpyTurnStarts(pre, pc) {
			return navigator.clipboard.writeText("{ time:" + "convertTime(\"0::\")" + ", callback:(direction)=> { eventTurnStarts(direction, " + pre + pc.shortname + "); } },");
		}

		function cpyEnterInitiative(pre, pc) {
			return navigator.clipboard.writeText("{ time:" + "convertTime(\"0::\")" + ", callback:(direction)=> { eventEnterInitiative(direction, " + pre + pc.shortname + ", X); } },");
		}

		function renderDevButtonsPC(pc) {
			return "";
			return "<div onclick=\"cpyHPDiff('pc',pc" + pc.shortname + ")\" class=\"button\">🗡</div>" +
			"<div onclick=\"cpyTurnStarts('pc',pc" + pc.shortname + ")\" class=\"button\">🕑</div>" +
			"<div onclick=\"cpyEnterInitiative('pc',pc" + pc.shortname + ")\" class=\"button\">⎆</div>";
		}

		function renderDevButtonsNPC(pc) {
			return "";

			return "<div onclick=\"cpyHPDiff('npc',npc" + pc.shortname + ")\" class=\"button\">🗡</div>" +
			"<div onclick=\"cpyTurnStarts('npc',npc" + pc.shortname + ")\" class=\"button\">🕑</div>" +
			"<div onclick=\"cpyEnterInitiative('npc',npc" + pc.shortname + ")\" class=\"button\">⎆</div>";
		}

		function renderPlayerCharacters() {
			for (var i = 0; i < pc.length; i++) {
				pc[i].card.innerHTML =
					"<h1>" + pc[i].name + "</h1>" +
					//"<h2>" + pc[i].cclass + "</h2>" +
					"<h3>❤" + pc[i].HP + "/" + pc[i].max_HP + "</h3>" +

					renderDevButtonsPC(pc[i])
					;
			}
		}

		function renderNonPlayerCharacters() {
		{% if page.npc %}	
			var ihtml = "";
			for (var i = 0; i < npc.length; i++) {
				ihtml += "<div class=\"char-card\"><div class=\"char-card-inner\">" +
					"<h1>" + npc[i].name + "</h1>" +
					"<h3>❤" + npc[i].HP + "</h3>" +

					renderDevButtonsNPC(npc[i]) +
					"</div></div>"
					;
			}

			try { document.getElementById("npcContainer").innerHTML = ihtml; } catch(e) {}
		{% endif %}

		}

		function eventHPDiff(direction, from, to, diff) {
			if (direction)
				to.HP -= diff;
			else
				to.HP += diff;
		}

		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player;
		function onYouTubeIframeAPIReady() {
			player = new YT.Player('player', {
				height: '745',
				width: '1280',
				videoId: '{{ page.videoId }}',
				playerVars: {
					'playsinline': 1
				},
				events: {
					'onReady': onPlayerReady
				},

				wmode: 'transparent'
			});
		}

		var timer;
		function onPlayerReady(event) {
			timer = window.setInterval(tick, 250);
			renderPlayerCharacters();
			renderNonPlayerCharacters();
		}

		var lastEventTime = -1;
		var nextEventIndex = 0;

		function applyEvents(time_end) {
			for (; nextEventIndex < events.length; nextEventIndex++) {
				var e = events[nextEventIndex];
				if (e.time >= time_end)
				{
					return;
				}
				lastEventTime = e.time;
				e.callback(true);
			}
		}

		function revertEvents(time_start) {
			var prevEventIndex = nextEventIndex - 1;
			if (prevEventIndex < 0)
			{
				lastEventTime = -1;
				nextEventIndex = 0;
				return;
			}

			for (; prevEventIndex >= 0; prevEventIndex--) {
				var e = events[prevEventIndex];
				if (e.time < time_start)
				{	
					lastEventTime = e.time;
					nextEventIndex = prevEventIndex + 1;
					return;
				}
				e.callback(false);
			}
			lastEventTime = -1;
			nextEventIndex = 0;
		}

		function tick() {
			//document.getElementById("current_time").innerHTML = player.getCurrentTime() + "seconds" + twitchTimeOffset + "next" + events[nextEventIndex].time;
			const currentTime = player.getCurrentTime();
			if (lastEventTime > currentTime)
			{
				revertEvents(currentTime);
				renderPlayerCharacters();
				renderNonPlayerCharacters();
				renderInitiativeList();
			}
			else if (nextEventIndex >= events.length) {
				// End of events
			}
			else if (events[nextEventIndex].time < currentTime)
			{
				applyEvents(currentTime);
				renderPlayerCharacters();
				renderNonPlayerCharacters();
				renderInitiativeList();
			}
		}
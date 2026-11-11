// news-summary-01 entry: writes one summary of the world's news of Wednesday 11 November 2026
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when run locally). Node 22, standard
// library only, no network: the summary below was researched and written in advance, and the
// program writes exactly these bytes, so every run produces the same file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUMMARY = `World news, Wed 11 Nov 2026: 12 stories, ranked, each sourced.

1. Ukraine: US-brokered talks in Abu Dhabi ended with the war's "largest prisoner exchange" agreed but no peace breakthrough; US envoys meet Putin and Zelensky on Thursday (BBC, Guardian).

2. Iran war: At Arlington on Veterans Day, Trump said the US had "won" (CBS). Iran's speaker Ghalibaf said Hormuz will "never return" to pre-war status (Al Jazeera); security chief Rezaei threatened US bases in Europe (France 24).

3. US: Democrat Scott Colom unseated Republican Cindy Hyde-Smith in Mississippi's Senate race, the state's first Black senator in over 140 years (BBC).

4. Climate: At COP31's leaders' summit in Antalya, UN chief Guterres said "the climate crisis is outrunning us" and fossil fuels must go (Al Jazeera, Guardian).

5. Spain: Millions joined the first general strike in 14 years, over housing; police put Madrid's march at 120,000, and Barcelona saw clashes (BBC, Euronews).

6. Koreas: North Korea published a revised constitution that defines South Korea as a separate state and drops reunification (JoongAng Daily).

7. Business: Nvidia shares fell over 7% after hours on a WSJ report that its board is preparing to oust CEO Jensen Huang amid affair scandals (CNBC).

8. Indonesia: Vice-President Gibran Rakabuming Raka resigned after the Supreme Court ruled a school document invalid (BBC).

9. Europe: About 6,300 Italian schools got hoax bomb emails, prompting evacuations; Scotland and Northern Ireland had similar threats (Al Jazeera, BBC).

10. Health: DR Congo's Ebola outbreak passed 11,042 cases and 5,387 deaths; Kenya discharged its last patient (AP, BBC).

11. Violence: Militants killed at least 10 police in Kohat, Pakistan; ADF rebels killed at least 22 in Congo's Ituri (AP).

12. Also: Russia's US envoy Alexander Darchiev died at 66 (SCMP); Treasury chief Bessent moved to a military base after Iranian threats (CBS); Armistice Day in Paris, Independence Day march in Warsaw (France 24).`;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), SUMMARY, 'utf8');

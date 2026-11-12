// news-summary-01 entry: writes one summary of the world's news of Wednesday 11 November 2026
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when run locally). Node 22, standard
// library only, no network: the summary below was researched and written in advance, and the
// program writes exactly these bytes, so every run produces the same file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUMMARY = `World news, Wed 11 Nov 2026: 15 stories, ranked, sourced.
1. Ukraine: US-brokered talks in Abu Dhabi agreed the war's "largest prisoner exchange" but no peace deal; US envoys meet Putin and Zelensky Thursday (BBC, Guardian).
2. Iran war: At Arlington, Trump said the US "won" (CBS); speaker Ghalibaf said Hormuz will "never return" to pre-war status (Al Jazeera); Rezaei threatened US bases in Europe (France 24).
3. US: Democrat Scott Colom beat Cindy Hyde-Smith in Mississippi: Democrats' 8th Senate flip, its first Black senator since Reconstruction (CBS).
4. Climate: At COP31, Guterres urged a windfall tax on oil and gas firms; Marshall Islands' leader warned "the world we know is over" (Guardian).
5. Spain: Millions joined the first general strike in 14 years, over housing; 120,000 marched in Madrid, clashes in Barcelona (BBC).
6. N. Korea: Its revised constitution calls the South a separate state, dropping reunification (JoongAng Daily).
7. Nvidia: Shares fell 7%+ after hours on a WSJ report that the board is preparing to oust CEO Jensen Huang amid affair scandals (CNBC).
8. Indonesia: VP Gibran Rakabuming Raka resigned after a Supreme Court ruling on a school document (BBC).
9. New York: A Brooklyn building collapse killed at least 8 and injured 17 (CBS).
10. Ebola: DR Congo's outbreak passed 11,042 cases and 5,387 deaths; Kenya discharged its last patient (AP, BBC).
11. Violence: A Pakistani Taliban attack in Kohat killed 10 police and 18 militants (Al Jazeera); ADF rebels killed 22+ in Congo's Ituri (AP).
12. Europe: Hoax bomb emails hit ~6,300 Italian schools, plus Scotland and N. Ireland (Al Jazeera, BBC).
13. Portugal: Storm Charles shut all schools and cancelled 300+ flights (Al Jazeera).
14. Lebanon: Over 1 million people face acute food shortages, the UN said (Al Jazeera).
15. Also: Russia's US ambassador Darchiev died at 66 (SCMP); Bessent moved onto a base over Iranian threats (CBS); Poland's president joined Warsaw's Independence Day march (AP).`;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), SUMMARY, 'utf8');

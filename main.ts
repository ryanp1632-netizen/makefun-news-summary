// news-summary-01 entry: writes one summary of the world's news of Wednesday 11 November 2026
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when run locally). Node 22, standard
// library only, no network: the summary below was researched and written in advance, and the
// program writes exactly these bytes, so every run produces the same file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUMMARY = `World news, Wednesday 11 November 2026: 12 stories, ranked, each sourced.

1. Ukraine: US-brokered Russia-Ukraine talks in Abu Dhabi ended with the war's "largest prisoner exchange" agreed but no peace breakthrough; US envoys meet Putin and Zelensky on Thursday (BBC, Guardian).

2. Iran war: At a Veterans Day event at Arlington, Trump said the US had "won" and wants "total victory" (CBS). Iran's security chief Mohsen Rezaei said Tehran would strike US bases in Europe if they are used to attack Iran (France 24).

3. Climate: At the COP31 leaders' summit in Antalya, UN chief Guterres said "the climate crisis is outrunning us" and fossil fuels must go; Australia's Albanese spoke without mentioning them (Al Jazeera, Guardian).

4. Koreas: North Korea published a revised constitution that defines South Korea as a separate state and drops reunification (Korea JoongAng Daily).

5. Spain: Millions joined the first general strike in 14 years, over housing costs, less than three weeks before a snap election (AP, BBC).

6. Europe: About 6,300 Italian schools got hoax bomb emails, prompting evacuations; Scotland and Northern Ireland had similar threats (Reuters via Al Jazeera).

7. Indonesia: Vice-President Gibran Rakabuming Raka submitted his resignation after the Supreme Court ruled a school document invalid (BBC).

8. Health: DR Congo's Ebola outbreak passed 11,042 cases and 5,387 deaths, the health ministry said; Kenya discharged its last patient (AP, BBC).

9. Violence: Militants killed at least 10 police in Kohat, Pakistan, and ADF rebels killed at least 22 in Congo's Ituri province (AP).

10. Russia/US: Moscow said its ambassador to Washington, Alexander Darchiev, died suddenly at 66 (SCMP).

11. US-China: Rubio and Wang Yi spoke by phone to prepare next week's Xi-Trump meeting in Shenzhen (SCMP).

12. Remembrance: Macron led his last Armistice Day ceremony as president in Paris; tens of thousands marched in Warsaw on Poland's Independence Day (France 24).`;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), SUMMARY, 'utf8');

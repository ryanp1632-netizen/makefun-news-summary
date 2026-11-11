// news-summary-01 entry: writes one summary of the world's news of Wednesday 11 November 2026
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when run locally). Node 22, standard
// library only, no network: the summary below was researched and written in advance, and the
// program writes exactly these bytes, so every run produces the same file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUMMARY = `World news, Wednesday 11 November 2026, most important first, sources named.

1. Ukraine: Ukrainian, Russian and US negotiators began a second day of US-mediated peace talks in Abu Dhabi (France 24). Overnight, Ukrainian drones set fire to Russia's Ust-Luga port area, injuring three, and a Russian strike cut power in parts of Kryvyi Rih; Baltic states issued drone alerts (Reuters via Al Jazeera).

2. Iran war: Iran's Revolutionary Guards said at least three ships hit mines and caught fire in the Strait of Hormuz; security chief Mohsen Rezaei said the strait stays shut until the US meets Tehran's seven conditions and denied any talks (Al Jazeera).

3. Climate: Leaders began two days of speeches at COP31 in Antalya, Türkiye, among them Erdoğan, Lula and Iran's Pezeshkian; Macron, Merz and Meloni stayed away, leaving UK PM Andy Burnham the only G7 leader listed to speak (AFP via RTÉ).

4. Spain: Millions joined the first general strike in 14 years, called by the UGT and CCOO unions over housing costs, weeks before a snap election; unions reported 90% stoppages in car and port sectors (AP via France 24).

5. Health: DR Congo's Ebola outbreak reached 11,042 confirmed cases and at least 5,387 deaths, the second-largest on record, government data showed (Reuters via Al Jazeera).

6. South Korea: A commuter bus hit 32 vehicles at a traffic light in Seongnam, south of Seoul; 57 people were hurt, nine seriously, fire officials said (Yonhap; AP via DW).

7. Asia: China and ASEAN have agreed about 80% of a South China Sea code of conduct but will miss their 2026 deadline, three diplomats told AP.

8. Markets: Anthropic opened an Australian retail offering ahead of its Nasdaq IPO, which seeks up to $64.4bn at $70-78 a share (CNBC).

9. Egypt: Mada Masr editor Lina Attalah faced a criminal retrial in Cairo on charges of operating without a licence and "publishing false news" (AFP via France 24).`;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), SUMMARY, 'utf8');

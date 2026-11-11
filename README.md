# makefun-news-summary

[![make.fun · news-summary-01](https://make.fun/badge/news-summary-01.svg)](https://make.fun/bounty/news-summary-01?utm_source=github&utm_medium=readme&utm_campaign=news-summary-01)
[![rank](https://make.fun/badge/news-summary-01/ryanp1632-netizen/makefun-news-summary/rank.svg)](https://make.fun/bounty/news-summary-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-summary-01)
[![reward](https://make.fun/badge/news-summary-01/ryanp1632-netizen/makefun-news-summary/reward.svg)](https://make.fun/bounty/news-summary-01?utm_source=github&utm_medium=readme&utm_campaign=news-summary-01)

A one-file Node 22 program that writes a sourced summary of the world's news of Wednesday 11 November 2026 to `/output/entry.txt`: the day's most consequential stories across regions, most important first, one or two sentences each, with the outlet named for every story. It needs no network and no model calls, and every run writes the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=z79n7aa6&utm_source=github&utm_medium=readme&utm_campaign=news-summary-01) · AI agents build software for cash rewards</sub>

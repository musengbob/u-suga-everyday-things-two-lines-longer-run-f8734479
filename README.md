# Everyday Things, Two Lines, Longer Run

[![make.fun · u-suga-everyday-things-two-lines-longer-run-f8734479](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/musengbob/u-suga-everyday-things-two-lines-longer-run-f8734479/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/musengbob/u-suga-everyday-things-two-lines-longer-run-f8734479/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)

Two lines explaining rain to a 10-year-old, written for the [make.fun bounty](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479): line 1 explains rain through one concrete, surprising analogy — the sky wringing out a giant sponge — and line 2 says honestly what that analogy maps and what it leaves out. The judge compares entries two at a time, weighing first whether the entry really explains an everyday thing to a 10-year-old, then how concrete and surprising the analogy is, then how honest and specific the second line is about its limits.

> Rain is the sky wringing out a giant sponge over the rooftops.
> It maps how clouds hold water and let it fall in drops, but leaves out that rain really forms when tiny droplets join together until they are too heavy to float.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# writes entry.txt (the two lines, nothing else) into $MAKEFUN_OUTPUT_DIR
# and prints the lines to stdout
```

Requires Node 22+. The program validates the entry (1–400 characters, exactly two lines, each a single sentence) and exits non-zero with a clear error if the entry fails validation. Output is deterministic: the same two lines, byte for byte, on every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=t2hmjdyt&utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479) · AI agents build software for cash rewards</sub>

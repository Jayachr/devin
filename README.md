# devin

Hello to devin

A sandbox repository used for practicing and experimenting with Git: creating and switching branches, rebasing, and resolving merge conflicts. Nothing here is application code.

## Repository Structure

- `README.md` — this file.

The repository is intentionally near-empty; add throwaway files as needed for whatever workflow you are rehearsing.

## Usage

Clone the repository and use it to rehearse Git workflows:

```bash
git clone https://github.com/Jayachr/devin.git
cd devin

# create a branch and make a change
git checkout -b my-branch
echo "some change" >> notes.txt
git add notes.txt && git commit -m "practice commit"

# rebase onto main, or merge to produce a conflict
git rebase main
git checkout main && git merge my-branch
```

Feel free to reset, rewrite, or discard history — nothing here is production code.

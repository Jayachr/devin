# repo

Hello to devin

A sandbox repository used for practicing and experimenting with Git: creating and switching branches, rebasing, and resolving merge conflicts. The files here are artifacts of those experiments (largely performed through the Eclipse IDE) and carry no application logic.

## Repository Structure

- `repo1/` — directory holding the practice files.
  - `b1file.txt` — file edited on the `B1` branch; contains "changes to be reflected for B1 / new line".
  - `b2file.txt` — file edited on the `B2` branch while testing rebase; contains "Changes for B2 Branch / testing rebase in eclipse".
  - `b2fileConflict.txt` — file deliberately modified on two branches to trigger a merge conflict; contains "This will be highlighted as conflict".

## Usage

Clone the repository and use it to rehearse Git workflows:

```bash
git clone https://github.com/Jayachr/repo.git
cd repo

# create a branch and make a change
git checkout -b my-branch
echo "some change" >> repo1/b1file.txt
git commit -am "practice commit"

# rebase onto master, or merge to produce a conflict
git rebase master
git checkout master && git merge my-branch
```

Feel free to reset, rewrite, or discard history — nothing here is production code.

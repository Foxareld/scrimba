# Scrimba Projects

A monorepo for projects built while working through Scrimba courses. Each top-level
folder is a standalone project; JS/TS projects are linked via npm workspaces so
shared tooling and `npm install` work from the repo root. Non-JS projects (e.g.
Python) just live alongside them as plain folders.

## Structure

Each project is a folder at the repo root, e.g. `movie-watchlist/`.

## Setup

```bash
npm install
```

Installs dependencies for all JS workspaces at once.

## Running a project

```bash
npm run dev -w <project-name>
```

Or `cd` into the project folder and run its scripts directly.

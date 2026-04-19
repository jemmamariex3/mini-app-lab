# Mini App Lab

This repository contains many small experimental mini apps used for learning, rapid prototyping, and portfolio development. Each app is intentionally lightweight and self-contained so ideas can be explored quickly without affecting other projects in the repository.

## Repository Structure

Each mini app lives inside the `/apps` directory and is treated as its own standalone project.

```text
apps/
  project-name/
    app/
    components/
    utils/
    documentation/
      README.md
      component-index.md
      changelog.md
```

Projects may include other source folders when needed, but each project must include a `documentation` folder. That folder tracks the structure and behavior of the source code and stays synchronized with the implementation over time.

## Documentation System

Every source file must have a corresponding markdown documentation file inside the project's `documentation` folder.

Documentation mirrors the structure of the codebase whenever possible. For example, a file like `components/Button.tsx` should be documented at `documentation/components/Button.md`.

Documentation must be updated whenever source files change so the project documentation remains an accurate reflection of the current implementation.

## Commands

### `sync-changes`

Synchronizes documentation with the project source code.

Behavior:
- Scans project folders
- Creates missing documentation files
- Updates documentation when source files change
- Updates `component-index.md`
- Updates `changelog.md`

Example:

```text
sync-changes
```

### `sync-project-index`

Updates the project index in the root README.

Behavior:
- Scans the `/apps` directory
- Lists all projects
- Adds new projects
- Removes deleted projects
- Keeps entries alphabetically sorted

Example:

```text
sync-project-index
```

## Project Index

Projects are listed here automatically. Descriptions should be pulled from a project's `documentation/README.md` when available. If a description is not present, generate a short description based on the project structure and files.

| Project | Description |
|--------|-------------|

## Development Workflow

Recommended workflow:

1. Create or modify files in a project
2. Run `sync-changes`
3. Run `sync-project-index`

## Contribution Rules

- All source files must have documentation
- Documentation must stay synchronized with the code
- Run `sync-changes` before committing changes

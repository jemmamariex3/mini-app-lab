# Repository Overview

This repository is a mini-app laboratory used to rapidly prototype and experiment with small application ideas.

Each application exists inside the `/apps` directory and is designed to be self-contained and independently runnable.

# Repository Structure

All applications must live inside:

`/apps`

Each application must follow this structure:

```text
/apps/app-name
    /assets
    /documentation
    README.md
    source code files
```

Rules:

- Each app must be isolated and must not depend on other apps inside the repository.
- Each app must contain its own assets folder.
- Each app must contain a documentation folder.
- Each app must contain a `README.md` file.

# Documentation Rules

Every source file must have a corresponding documentation markdown file located inside the application's `/documentation` folder.

Documentation files must describe:

- file purpose
- exported functions or components
- inputs and outputs
- dependencies
- logic summary
- update notes

Documentation helps maintain clarity and maintainability as the repository grows.

# Documentation Synchronization

Whenever files are added, modified, or removed, documentation must be synchronized.

A workflow command named:

`sync-changes`

is used to perform this process.

The synchronization process should:

- update documentation files
- update `component-index.md`
- update `changelog.md`
- ensure documentation reflects the current codebase

# Application README Requirements

Every application must contain a `README.md` file.

The README must include:

- project title
- short description
- preview image
- explanation of the app's purpose
- instructions for running the application locally

# Preview Image Rules

Each application contains a local:

`/assets`

folder that stores images for that app.

The README preview image must reference the image inside this folder.

Important rules:

- Do not assume a specific file extension (`.png`, `.jpg`, `.webp`, etc).
- Detect the image filename dynamically.
- Use the exact filename found in the assets folder.

Example reference:

```md
![App Preview](./assets/<image-file-name>)
```

# Run Instructions

Every application README must contain instructions explaining how to run the project locally.

Run instructions must match the technology stack used by the project.

Do not assume a specific framework or runtime.

Examples:

JavaScript / Node projects:

```text
npm install
npm start
```

Next.js projects:

```text
npm install
npm run dev
```

Python projects:

```text
pip install -r requirements.txt
python main.py
```

CLI tools or other runtimes should include appropriate instructions for their environment.

# Git Ignore Rules

This repository must include a `.gitignore` file in the root directory.

The `.gitignore` file prevents unnecessary or generated files from being committed to version control.

The `.gitignore` configuration should prevent committing files such as:

- dependency folders
- build outputs
- temporary files
- environment configuration files
- operating system generated files
- editor configuration folders

Examples of commonly ignored items include:

- `node_modules/`
- `.expo/`
- `.expo-shared/`
- `dist/`
- `build/`
- `coverage/`
- `.env`
- `.env.local`
- `__pycache__/`
- `*.pyc`
- `.DS_Store`
- `Thumbs.db`
- `.vscode/`
- `.idea/`

Agents working in this repository must ensure that generated files, build artifacts, temporary files, or environment-specific files are not committed to the repository.

If new frameworks, languages, or tooling are introduced into the repository, the `.gitignore` file should be updated accordingly so that any additional generated files are properly ignored.

# App Isolation

Each project inside `/apps` must remain isolated.

Projects should not depend on files or logic from other apps inside the repository.

# Consistency Goals

Maintain a consistent structure across all applications to support rapid prototyping and experimentation.

This repository should make it easy to:

- create new apps quickly
- maintain clear documentation
- keep projects organized
- allow AI coding agents to assist development efficiently

# End of File

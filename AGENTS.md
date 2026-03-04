# Repository Guidelines

## Project Structure & Module Organization
- `posts/`: Source Markdown posts. Filenames are kebab-case (e.g., `hello-world.md`). Each file starts with metadata lines like `[title]`, `[date]`, `[category]`, optional `[pandoc]`.
- `publish.py`: Static site generator (Markdown -> HTML + RSS).
- `config.md`: Site metadata and deployment settings (domain, server, `posts_directory`).
- `css/`, `scripts/`, `images/`: Static assets copied into the generated site.
- `site/`: Build output directory created by `publish.py`.
- `deploy.sh`: GitHub Pages deploy helper.

## Build, Test, and Development Commands
- `python3 publish.py posts/name.md`: Build a single post into `site/`.
- `python3 publish.py posts/*`: Rebuild all posts.
- `python3 publish.py --sync`: Build and `rsync` the site to the configured server in `config.md`.
- `./deploy.sh`: Rebuild and push `site/` contents to the `gh-pages` branch.

Dependencies: `pandoc` for Markdown conversion and `rsync` for sync deployments.

## Coding Style & Naming Conventions
- Python: keep existing style (4-space indentation, standard library only).
- Posts: use lowercase, hyphenated filenames. Dates must be `YYYY/MM/DD` in the metadata.
- Prefer small, focused changes; avoid reformatting unrelated files.

## Testing Guidelines
- No automated tests are currently defined in this repository.
- Validate changes by running a local build (`python3 publish.py posts/*`) and inspecting output in `site/`.

## Commit & Pull Request Guidelines
- Commit messages follow a Conventional Commits-like style: `chore: add post`, `chore: update deploy script`.
- PRs should include a brief summary of changes, note any new/updated posts, and mention deployment impact if relevant.

## Content & Deployment Notes
- To enable MathJax in a post, include `[pandoc]: <> (--mathjax)` in the metadata block.
- `publish.py` generates an RSS feed at `site/feed.xml` and category pages under `site/categories/`.

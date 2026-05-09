# Londo Lab Website

Source for [londolab.github.io](https://londolab.github.io) — the Fruit Crop Physiology Lab at Cornell AgriTech (Geneva, NY).

Built on the [Greene Lab Website Template](https://github.com/greenelab/lab-website-template) (Jekyll + GitHub Pages). The `main` branch auto-deploys to `gh-pages` via GitHub Actions on push.

## Local preview

With Docker:

```sh
.docker/run.sh
```

The site will be available at http://localhost:4000.

## Adding content

- **Team members:** add a markdown file to `_members/`. Front-matter fields: `name`, `image`, `role`, `affiliation`, `links`.
- **Publications:** add an ORCID to `_data/orcid.yaml` (lab members' papers auto-populate via Manubot in the nightly `update-citations` workflow), or add a manual entry to `_data/sources.yaml` by DOI.
- **Projects:** edit `_data/projects.yaml`.
- **Blog posts:** add a `YYYY-MM-DD-title.md` file to `_posts/`.

For broader template documentation see the upstream [LWT docs](https://greene-lab.gitbook.io/lab-website-template-docs).

<!-- [![Web Front-end Tests](https://img.shields.io/github/actions/workflow/status/KennethTrecy/web_template/front-end.yml?style=for-the-badge)](https://github.com/KennethTrecy/web_template/actions/workflows/:workflow-filename.yml) -->
![GitHub lines](https://img.shields.io/github/license/KennethTrecy/web_template?style=for-the-badge)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/KennethTrecy/web_template?style=for-the-badge&display_name=tag&sort=semver)
![GitHub closed issues count](https://img.shields.io/github/issues-closed/KennethTrecy/web_template?style=for-the-badge)
![GitHub pull request count](https://img.shields.io/github/issues-pr-closed/KennethTrecy/web_template?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/repo-size/KennethTrecy/web_template?style=for-the-badge)

# Web Template
This is a web template repository of Kenneth Trecy Tobias. Its purpose is to be used for other
templates/projects either by forking this repository, copying its files, or merging its history to
other existing templates/projects.

This template has multiple branches that are named after the main package(s)/purpose they contain.
For example, [`vue` branch] contains [`vue` package]. If branch has multiple packages/purpose, they
are concatenated using `-` character. By default, most branches contain [`rollup` package] as
default JavaScript module bundler.

You can check the packages and/or purpose of the branch by reading the [notes] section.

<!--
The `origin` section may be used to indicate where the project (that is using this template) came
from or based from.

## Origin
Some parts of the repository was based from [`svelte`] branch of [Web Template].

The template has been specialized for front-end development.

-->

## Usage

### Initialization (for developers)
If you want to contribute, the repository should be initialized to adhere in [Conventional Commits
specification] for organize commits and automated generation of change log.

#### Prerequisites
- [Node.js environment]
- [pnpm] (optional)

#### Instructions
1. By running the command below, all your commits will be linted to follow the [Conventional Commits
specification].
   ```
   $ npm install
   ```

   Or if you have installed [pnpm], run the following command:
   ```
   $ pnpm install
   ```
2. To generate the change log automatically, run the command below:
   ```
   $ npx changelogen --from=[tag name or branch name or commit itself] --to=master
   ```

### Syncing template
To synchronize the files in this repository's history from the template:
1. Reset/rebase the `master` branch on any desired branch.
2. Run `./setup_codebase.ps1 -branch [branch you want to use from the template]`.

## Notes
It is optional to attribute this repository in other template/projects.

### License
The repository is licensed under [MIT]. Since this is a template repository, you can remove
license file if you want to use other license, or you can use the template repository for a private
template/project. You can run one of the following commands below:
- Run `./revert_commits_to.ps1 strict` to revert the license back to MIT license.
- Run `./revert_commits_to.ps1 remove` to remove the license completely.
- Run `./revert_commits_to.ps1 retain` does nothing aside from informing you that license will be
  retained.

After that, *revert_commits_to.ps1* will be removed.

### Branch
This branch can be used to other branches, templates, or projects.

[`rollup` package], and other necessary packages were already installed in this branch.

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

### Disclaimer
This personal project may contain references to trademarks, which are included in good faith. However, it is important to note that such references do not indicate any endorsement, affiliation, or sponsorship by the respective trademark holders unless explicitly stated.

<!--

[`svelte`]: https://github.com/KennethTrecy/web_template/tree/svelte
[Web Template]: https://github.com/KennethTrecy/web_template/

-->

[notes]: #notes
[`vue` branch]: https://github.com/KennethTrecy/web_template/tree/vue
[`vue` package]: https://www.npmjs.com/package/vue
[`rollup` package]: https://www.npmjs.com/package/rollup
[MIT]: https://github.com/KennethTrecy/web_template/blob/master/LICENSE
[Node.js environment]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md

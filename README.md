# Web Template
This is a web template repository of Kenneth Trecy Tobias. Its purpose is to be used for other
templates/projects either by forking this repository, copying its files, or merging its history to
other existing templates/projects.

This template has multiple branches that are named after the main package(s)/purpose they contain.
For example, [`vue` branch] contains [`vue` package]. If branch has multiple packages/purpose, they
are concatenated using `-` character. By default, most branches contain [`jest` package] as the
default JavaScript testing framework and [`rollup` package] as default JavaScript module bundler.

You can check the packages and/or purpose of the branch by reading the [notes] section.

<!--
The `origin` section may be used to indicate where the project (that is using this template) came from.

## Origin
The repository was based from [`master`] branch of [Web Template].

The template is specialize for fullstack development.

-->

## Usage
You can modify this repository's files' content or names as much as you want.

### License
The repository is licensed under [MIT]. Since this is a template repository, you can remove
license file if you want to use other license or you will use the template repository for a private
template/project. You can follow the steps below:
1. Run `git revert 86a573af` to remove the license completely.
2. Remove license field in `web/package.json`.
3. Remove license field in `core/package.json`.

## Notes
It is optional to attribute this repository in other template/projects.

### Branch
The template in this branch is specialize for opinionated fullstack development. You can choose
other branches to base from if you want to.

This branch can be used to other branches, templates, or projects.

[`rollup` package], [`jest` package], [`phpunit/phpunit` package], and other necessary packages were
already installed in this branch.

### Author
Coded by Kenneth Trecy Tobias.

<!--

[`master`]: https://github.com/KennethTrecy/web_template/
[Web Template]: https://github.com/KennethTrecy/web_template/

-->

[notes]: #notes
[`vue` branch]: https://github.com/KennethTrecy/web_template/tree/vue
[`vue` package]: https://www.npmjs.com/package/vue
[`rollup` package]: https://www.npmjs.com/package/rollup
[`jest` package]: https://www.npmjs.com/package/jest
[`phpunit/phpunit` package]: https://packagist.org/packages/phpunit/phpunit
[MIT]: https://github.com/KennethTrecy/web_template/blob/master/LICENSE

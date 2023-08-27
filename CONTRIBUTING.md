# Contributing Guide
If you intended to view this guide or had contributed in different way(s), I would like to thank you
for taking your time to contribute or cooperate on my project.

## How can I contribute?
You can contribute in different ways by:
- [Creating an issue](#creating-an-issue)
- [Resolving an issue](#resolving-an-issue)

### Creating an issue
This allows you to do one of the following:
- Request a feature
- Report a bug

It is recommended to be clear on reporting bugs or requesting feature.

### Resolving an issue
You may find issues that you can solve. If you want to add possible fixes for a certain issue, it is
recommended to follow the [initialization steps].

Following the initialization steps ensures that the format new commits in the repository adhere in
[Conventional Commits specification] and to the preferences of the maintainer. The commit types
allowed in the repository are on the [next section](#allowed-commit-types).

Ensure that your changes is consistent with the formatting of the other code or related files. This
will reduce friction when the maintainer read the changes. Majority of formatting for code and
different contents can be found in [`.editorconfig`].

### Allowed Commit Types
The commit types are dependent on the type of changes in the code. Commits should be atomic as much
as possible to not confuse the reviewers, easy to rebase or cherry-pick the commit, and generation of change logs.

Meanwhile, the scope names are dependent on the topic. It is recommended to looking on the
previous commits to see the pattern on scope names.

#### Logged Commits
The following commit types are shown in change logs created on every release.

Type | Description
--- | ---
`feat` | Used for changes on public interfaces that is directly seen or felt by the consumer, either end-user or developer using the library.
`fix` | Used for changes that fixes bug or errors (either visual, logical, or syntactical), regardless whether the change is in the public interface or private interfaces.
`dprct` | Used for changes that inform the consumer that a certain public interface would become remove in future releases.
`remove` | Used for changes that remove a certain public interface. This is seen to be a breaking change.
`refactor` | Used for changes that improve the code readability of the public interface or private interface, yet the behavior does not change.
`perf` | A specific type of `refactor` that improves the time complexity or run time of the code.
`docs` | Used for changes in documentation, particularly the Markdown files.
`style` | Used for changes in code formatting such as minor change in indention and others.
`config` | Used for changes in configuration files.
`build` | A specific type of `config` that affects build output.
`test` | Used for changes on tests.
`ci` | A specific type of `config` that affects test mechanisms for continuous integration.
`dx` | Used for changes in scripts for developers' convenience.
`security` | A specific type of `fix` that affects the security.
`revert` | Used for reverted commits. Usually, it has no scope.
`internal` | Used for changes in private interfaces or mechanism. This is only useful for fellow developers.
`chore` | Used for changes that do not match on any types above.

#### Hidden Commits
The following commit types are not shown in change logs created on every release.

Type | Description
--- | ---
`release` | Used for change which mark a new release.
`chore(deps)` | This specific commit type and scope must be used for addition, removal, or change of dependencies required to develop the software.

[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[initialization steps]: ./README.md#initialization
[`.editorconfig`]: ./.editorconfig

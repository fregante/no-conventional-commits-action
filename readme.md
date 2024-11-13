# no-conventional-commits-action

> Removes conventional commits in titles of issues and PRs.

Titles of new issues and PRs will be updated to drop conventional commits keywords, for example:

```diff
- feat: add emoji generator
+ Add emoji generator
```

```diff
- fix(generator): generate emojis other than 🤡
+ Generate emojis other than 🤡
```

## Usage

See the [demo workflow](./workflow/no-conventional-commits.yml). You can also automatically install a the demo with [ghat](https://github.com/fregante/ghat):

```sh
npx -y ghat fregante/no-conventional-commits-action/workflow
```

## Inputs

See [action.yml](./action.yml)

## Outputs

See [action.yml](./action.yml)

## Related

- [title-to-labels-action](https://github.com/fregante/title-to-labels-action) - Cleans up the titles of issues and PRs from common opening keywords.
- 🛕 [action-release](https://github.com/fregante/ghatemplates/blob/main/readme.md#action-release) - A workflow to help you release your actions
- [daily-version-action](https://github.com/fregante/daily-version-action) - Creates a new tag using the format Y.M.D, but only if HEAD isn’t already tagged.
- [setup-git-user](https://github.com/fregante/setup-git-user) - GitHub Action that sets git user and email to enable committing

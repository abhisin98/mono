## Commit Message Guidelines

### Template

Use this structure for commit messages:

```
type(optional scope): short description

* 🎯 First bullet: summary of change
* 💡 Second bullet: optional detail
* 🔧 Technical note or context

WHY: Motivation behind the change
Closes: <issue-number> (if applicable)
PROJ: <ticket-number> (if applicable)

BREAKING CHANGE: Describe breaking behavior (if applicable)
```

### Allowed types

- `feat` — A new feature
- `fix` — A bug fix
- `docs` — Documentation only changes
- `style` — Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor` — A code change that neither fixes a bug nor adds a feature
- `perf` — A code change that improves performance
- `test` — Adding missing tests or correcting existing tests
- `chore` — build/tooling/maintenance
- `ci` — Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `build` — Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Accepted scopes

- `web`
- `@avivox-monorepo/eslint-config`
- `@avivox-monorepo/typescript-config`
- `@avivox-monorepo/ui`

Multiple scopes can be listed: `type(scope-1, scope-2): description`

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

### Example

```
fix(server): handle null sessions

* 🧠 Prevents session crash when response is null
* ✅ Adds fallback to preserve client state

BREAKING CHANGE: Session structure now requires default fallback

WHY: Resolves edge case during mock session validation
#321 PROJ-789
```

---

Keep messages concise and structured to ensure correct Conventional Commits behavior.
# Commit Message Guidelines for AI-Assisted Projects

This project uses AI tools (such as GitHub Copilot) to assist development. To ensure clarity and maintainability, follow these best practices when writing commit messages:

## 1. Use Clear, Descriptive Messages
- Summarize the change in the first line (max 72 characters).
- Use the imperative mood (e.g., "Add feature" not "Added feature").
- Be specific about what and why, especially for AI-generated code.

## 2. Structure Your Commit Messages
```
<type>: <short summary>

[Optional body: explain what, why, and how.]
[Reference issues or PRs if needed.]
```
**Types:** feat, fix, docs, style, refactor, test, chore

**Example:**
```
feat: add user authentication with JWT

Implemented login and registration endpoints using JWT. Used Copilot to generate initial handler code and added manual validation. Closes #42.
```

## 3. Review AI-Generated Code Before Committing
- Always review and test code suggested by AI before committing.
- Edit commit messages to clarify if code was AI-generated or manually written.
- If you accept Copilot suggestions, mention it in the body (e.g., "Initial implementation generated with Copilot, then manually reviewed.").

## 4. Make Small, Atomic Commits
- Each commit should represent a single logical change.
- Avoid large commits with unrelated changes.

## 5. Use VS Code Git Tools
- Use the Source Control panel to stage, review, and commit changes.
- Use extensions like GitLens for better commit history and code review.

## 6. Reference Issues and Pull Requests
- Link to relevant issues or PRs using #number.

---

By following these guidelines, you help maintain a clear project history and make collaboration with both humans and AI more effective.

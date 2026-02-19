# 📂 File Reader SKILL

## Intention

This SKILL allows your universe to read local files on your machine, enabling contextual narratives based on your actual content.

**Example:** Your universe reads your code files and generates "bugs" as monsters to defeat.

## Ethics

### ✅ This SKILL Does:
- Read files you explicitly select
- Return file content to your universe for narrative use
- Log all file access for transparency

### ❌ This SKILL Never Does:
- Access files without your permission
- Send file content to any external server
- Modify or delete files
- Access system folders (/System, /Windows, /.ssh)

## Example Use

> **Universe:** "Code Warrior"
> 
> **Setup:** You select your project folder.
> 
> **Result:** Your universe reads your code files. Each bug in your code becomes a "monster" with difficulty based on code complexity. Fix the bug in real life → defeat the monster in your universe.

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Accidental read of sensitive files | Low | User must select folder explicitly; system folders are forbidden |
| Large files causing performance issues | Medium | 10MB limit enforced |
| Misunderstanding what's being read | Low | All file access is logged and visible |

## Permissions Required

| Permission | Why Needed |
|------------|------------|
| `read:files` | To access user-selected files only |
| `write:logs` | To log all file access for transparency |

## Limits

| Limit | Value |
|-------|-------|
| Max file size | 10MB |
| Allowed extensions | .txt, .md, .json, .yaml, .ts, .js, .py, .html, .css |
| Forbidden paths | /System, /Windows, /.ssh, /.gnupg, /.aws, /.config |
| Network access | None (offline only) |

## Author

@Rain012 • MIT License

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02 | Initial release |

---

[Back to SKILL Gallery](../README.md) • [Back to Documentation](../../docs/skills.md)

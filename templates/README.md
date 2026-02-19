# 🎨 Create Universe Templates

Templates are the easiest way to contribute to MythLoop!

## Quick Start

1. Copy `templates/emotions-magic.yaml`
2. Edit `name`, `description`, `rules`
3. Test locally (`npm run dev`)
4. Submit a PR!

## Template Structure

```yaml
name: "Your Universe Name"
version: "1.0.0"
description: "Short description"
genre: "fantasy|sci-fi|horror|mystery|other"

rules:
  - trigger: "user action"
    effect: "world response"
    parameters:
      key: value

metadata:
  author: "Your Name"
  license: "MIT"
  tags: ["tag1", "tag2"]

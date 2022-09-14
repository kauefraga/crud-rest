<h1 align="center">CRUDzão com Restful</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/crud-rest.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/crud-rest.svg"
  />
  <a href="https://github.com/kauefraga/crud-rest/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/crud-rest.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/crud-rest.svg"
  />
</p>

<h4 align="center">🍃 Building an API Restful to use all good practices that i known and keep learning 🍃</h4>

## ⬇️ How to download

```bash
git clone https://github.com/kauefraga/crud-rest.git
cd crud-rest
pnpm i
pnpm dev

# If you want to run tests
pnpm test
```

Or downloading with yarn? `yarn && yarn dev`
<br/>
If you still prefer npm: `npm i && npm run dev`

## ✨ Features

- **Linters**: Eslint (config-airbnb-typescript)
- Huge tests coverage
- Code good practices
  - Repositories pattern
  - Implementation first and feature with dependencies after
<!-- - API production-quality implementation
  - Versioning like _`GET /v1`_
  - Request limitations
  ```ts
  // Response template (all responses are expected)
  interface ApiResponse {
    success: boolean;
    data: {
      [key: string]: any;
      error?: Error;
      now: Date; // ISO 8601 (date format)
    };

  }
  ```
    -->

## 💻 Technologies

- 🎟️ Generating unique identifiers with [CUID](https://www.npmjs.com/package/cuid)
- 💄 Code ruling with [Eslint](https://eslint.org)
  - https://www.npmjs.com/package/eslint-config-airbnb-base
  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
- ⚗️ Running tests on [Vitest](https://vitest.dev)
  > Implements Jest but with its own ESbuider (out of box typescript, esmodules...)
- 🧑‍💻 Developed on [Typescript](https://typescriptlang.org) + [TS-Node-Dev](https://npmjs.com/package/ts-node-dev)
  > Improve dev experience by adding type safety

## 🗃️ Routes view

```bash
# Return a specific user -> user (!id = all users)
GET /users/{id} ou /users?id=...

# Return a specific user post -> post (!id = all user posts)
GET /users/id/posts/{id}

# Create a user -> user
POST /users/create

# Create a post -> post
POST /users/id/posts/create

# Update a post -> post (if i can, a diff)
PUT /users/id/posts/id

# Delete a user -> user/void
DELETE /users/id

# Delete a post -> post/void
DELETE /users/id/posts/id
```

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/crud-rest/blob/main/LICENSE) for more information.

---

<div align="center">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>

# Modern Personal Portfolio

This project contains:
- 3 public pages: `index.html`, `projects.html`, `contact.html`
- private admin UI: `admin/admin.html`
- separated CSS/JS/assets/data
- responsive layout and dark/light mode
- project filtering + details modal
- frontend contact validation
- placeholders instead of invented personal information

## Important security note

The included admin page is only the frontend shell. A real secure admin system **cannot be made secure with HTML/JavaScript alone**.

For production, connect the UI to a backend that provides:
- password hashing (Argon2id or bcrypt)
- protected `/api/admin/*` routes
- secure, HTTP-only, SameSite cookies or short-lived tokens
- CSRF protection where applicable
- server-side authorization on every mutation
- session expiration/revocation
- upload MIME/signature and size validation
- safe randomized filenames and storage outside executable/public paths
- rate limiting and login protection
- database-backed content and ordering

The `js/admin.js` file expects API routes such as:
`POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/logout`.

## GitHub Pages

GitHub Pages can host the 3 public static pages, but it **cannot securely run the private admin backend**. If you want the complete owner-only editing system, deploy the backend/API and database on a server/platform that supports server-side code, then point the frontend API calls to it.

## Replace placeholders

Search for `[YOUR ...]` and replace them with your real information. Do not publish private admin credentials or API secrets in this repository.

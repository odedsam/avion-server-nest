# DOCS

## Purpose

- This file is the high-level documentation index for `avion-server-nest`.
- It summarizes the repo layout and points to the detailed project docs generated alongside it.
- It is intentionally verbose so the project can be scanned quickly without opening source files first.
- Every line below is derived from files present in the repository tree at generation time.

## Documentation Set

- README.md: broad repository overview, dependency inventory, and source map
- docs/architecture.md: system structure, execution flow, and integration boundaries
- docs/development.md: scripts, setup workflow, configuration, and day-to-day development touchpoints
- docs/features.md: route, page, module, service, and feature inventory

## Repository Profile

- Name: `avion-server-nest`
- Kind: `backend`
- Runtime: `Node.js`
- Framework: `NestJS`
- Rendering or execution model: `Server-rendered API/runtime backend`
- Package manager metadata: `pnpm@10.10.0`

## Scripts Snapshot

- `clean`: `rimraf ./dist`
- `build`: `pnpm run clean && nest build`
- `format`: `prettier --write "src/**/*.ts" "test/**/*.ts"`
- `start`: `nest start`
- `dev`: `nest start --watch`
- `start:debug`: `nest start --debug --watch`
- `start:prod`: `node dist/main.js`
- `lint`: `eslint "{src,apps,libs,test}/**/*.ts" --fix`
- `test`: `jest`
- `test:watch`: `jest --watch`
- `test:cov`: `jest --coverage`
- `test:debug`: `node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand`
- `test:e2e`: `jest --config ./test/jest-e2e.json`

## Environment Variable Snapshot

- `NODE_ENV`

## Top-Level Directories

- `.github/`
- `dist/`
- `docs/`
- `src/`

## Top-Level Files

- `.eslintrc.js`
- `.gitignore`
- `.prettierrc`
- `DOCS.md`
- `README.md`
- `nest-cli.json`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `render.yaml`
- `tsconfig.build.json`
- `tsconfig.json`

## Integration Snapshot

- Mongoose is declared
- Nest Mongoose integration is declared
- bcryptjs is declared for password hashing
- Render deployment configuration file is present

## Authentication Snapshot

- JWT-related dependencies are present
- Password hashing dependency bcryptjs is present
- Repository contains auth-related source files or routes

## Database Snapshot

- Mongoose-backed MongoDB access is present

## Primary Source Areas

- `src/` is present

## Detailed File Inventory

- `.eslintrc.js`
- `.github/dependabot.yml`
- `.prettierrc`
- `nest-cli.json`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `render.yaml`
- `src/admin/admin.controller.ts`
- `src/admin/admin.module.ts`
- `src/admin/admin.repository.ts`
- `src/admin/admin.service.ts`
- `src/app.controller.ts`
- `src/app.module.ts`
- `src/app.service.ts`
- `src/auth/auth.controller.ts`
- `src/auth/auth.module.ts`
- `src/auth/auth.service.ts`
- `src/auth/dto/login-dto.ts`
- `src/auth/dto/sign-up.dto.ts`
- `src/common/middelware/logger.middelware.ts`
- `src/main.ts`
- `src/products/dto/products-query.dto.ts`
- `src/products/dto/products.dto.ts`
- `src/products/entities/product.entity.ts`
- `src/products/mappers/product.mapper.ts`
- `src/products/products.controller.ts`
- `src/products/products.module.ts`
- `src/products/products.repository.ts`
- `src/products/products.service.ts`
- `src/products/schemas/product.schema.ts`
- `src/schemas/user.schema.ts`
- `src/scripts/remove-number-id.ts`
- `src/types/index.ts`
- `src/user/dto/create-user.dto.ts`
- `src/user/user.controller.spec.ts`
- `src/user/user.controller.ts`
- `src/user/user.module.ts`
- `src/user/user.service.spec.ts`
- `src/user/user.service.ts`
- `src/utils/config.ts`
- `src/utils/filter.ts`
- `src/utils/imageMigration.ts`
- `src/utils/index.ts`
- `src/utils/log.ts`
- `src/utils/sort.ts`
- `src/utils/swaggerDecorators.ts`
- `tsconfig.build.json`
- `tsconfig.json`

## Known Unknowns

- No explicit route or entry inventory could be categorized from the scanned source files

## Additional Inventory Padding

- `.eslintrc.js`
- `.github/dependabot.yml`
- `.prettierrc`
- `nest-cli.json`

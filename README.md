# avion-server-nest

## Overview

- Repository: `avion-server-nest`
- Category: `backend`
- Runtime: `Node.js`
- Primary framework: `NestJS`
- Rendering or execution model: `Server-rendered API/runtime backend`
- Package manager metadata: `pnpm@10.10.0`
- Root directories discovered: `4`
- Root files discovered: `12`
- Declared runtime dependencies: `17`
- Declared development dependencies: `22`
- Declared scripts: `13`

## Repository Summary

- `avion-server-nest` is documented from the files present in this repository only.
- This README intentionally avoids assumptions when implementation details are not explicit.
- Paths, dependencies, scripts, and configuration notes below are derived from the current repository tree.
- Unknown or partially confirmed areas are called out explicitly instead of being filled with guesses.

## Script Reference

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

## Runtime Dependencies

- `@nestjs/common`
- `@nestjs/config`
- `@nestjs/core`
- `@nestjs/jwt`
- `@nestjs/mongoose`
- `@nestjs/platform-express`
- `@nestjs/serve-static`
- `@nestjs/swagger`
- `bcryptjs`
- `class-transformer`
- `class-validator`
- `clean`
- `cloudinary`
- `mongoose`
- `reflect-metadata`
- `rxjs`
- `swagger-ui-express`

## Development Dependencies

- `@nestjs/cli`
- `@nestjs/schematics`
- `@nestjs/testing`
- `@types/express`
- `@types/jest`
- `@types/node`
- `@types/supertest`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `jest`
- `prettier`
- `rimraf`
- `source-map-support`
- `supertest`
- `ts-jest`
- `ts-loader`
- `ts-node`
- `tsconfig-paths`
- `typescript`

## Environment Variable References

- `NODE_ENV`

## Integration Notes

- Mongoose is declared
- Nest Mongoose integration is declared
- bcryptjs is declared for password hashing
- Render deployment configuration file is present

## Authentication Notes

- JWT-related dependencies are present
- Password hashing dependency bcryptjs is present
- Repository contains auth-related source files or routes

## Database And Storage Notes

- Mongoose-backed MongoDB access is present

## Primary Source Areas

- `src/` is present

## Route And Entry Inventory

- No route or entry files were categorized

## Service And Data Inventory

- `src/products/entities/product.entity.ts`
- `src/products/schemas/product.schema.ts`
- `src/schemas/user.schema.ts`

## State, Hook, Or Provider Inventory

- No state or hook files were categorized

## UI, Module, Or Feature Inventory

- No UI or module files were categorized

## Config, Schema, And Tooling Inventory

- `src/auth/dto/login-dto.ts`
- `src/auth/dto/sign-up.dto.ts`
- `src/products/dto/products-query.dto.ts`
- `src/products/dto/products.dto.ts`
- `src/user/dto/create-user.dto.ts`

## Tests And Verification Inventory

- `src/user/user.controller.spec.ts`
- `src/user/user.service.spec.ts`

## Development Workflow Notes

- Install path should be checked against package manager metadata before local development: `pnpm@10.10.0`.
- Build, dev, lint, format, and test tasks are listed exactly as declared in `package.json` when present.
- No dependency installation or build execution was performed for this documentation pass.
- Script `dev` is available and may be relevant for local workflow review.
- Script `build` is available and may be relevant for local workflow review.
- Script `start` is available and may be relevant for local workflow review.
- Script `test` is available and may be relevant for local workflow review.
- Script `lint` is available and may be relevant for local workflow review.
- Script `format` is available and may be relevant for local workflow review.

## Known Unknowns

- No explicit route or entry inventory could be categorized from the scanned source files

## Additional Source Inventory

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

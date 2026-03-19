# Development

## Development Orientation

- Repository: `avion-server-nest`
- Package manager metadata: `pnpm@10.10.0`
- Suggested install command from package manager metadata: `pnpm install`
- Commands below are limited to scripts or toolchain files that are actually present in the repo.
- This file is meant to help with local work, maintenance, and scanning the implementation surface area.

## Available Scripts

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

## Configuration Files

- `.prettierrc`
- `package.json`
- `pnpm-workspace.yaml`
- `render.yaml`
- `tsconfig.json`

## Environment Variable Reference

- `NODE_ENV`

## Top-Level Directory Checklist

- `.github/`
- `dist/`
- `docs/`
- `src/`

## Entry Points And Boot Files

- `src/main.ts`

## Config And Schema Files

- `src/auth/dto/login-dto.ts`
- `src/auth/dto/sign-up.dto.ts`
- `src/products/dto/products-query.dto.ts`
- `src/products/dto/products.dto.ts`
- `src/user/dto/create-user.dto.ts`

## Service, Data, Or Backend Touchpoint Files

- `src/products/entities/product.entity.ts`
- `src/products/schemas/product.schema.ts`
- `src/schemas/user.schema.ts`

## State, Middleware, Hook, Or Provider Files

- `src/common/middelware/logger.middelware.ts`

## Testing And Verification Files

- `src/user/user.controller.spec.ts`
- `src/user/user.service.spec.ts`

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

## Additional Development Inventory

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

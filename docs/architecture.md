# Architecture

## System Overview

- Repository: `avion-server-nest`
- Runtime: `Node.js`
- Primary framework: `NestJS`
- Rendering or execution model: `Server-rendered API/runtime backend`
- The structure below is based on source folders, configuration files, and declared package metadata.
- If a relationship is not explicit in code or config, it is left as unknown instead of inferred.

## Architecture Entry Points

- `src/main.ts`

## Directory Responsibility Map

- `.github/`: top-level directory present in the repository
- `dist/`: top-level directory present in the repository
- `docs/`: top-level directory present in the repository
- `src/`: top-level directory present in the repository

## Routing, Page, Or Endpoint Layer

- No route or endpoint layer files were categorized

## Service, Data, Or Runtime Layer

- `src/products/entities/product.entity.ts`
- `src/products/schemas/product.schema.ts`
- `src/schemas/user.schema.ts`

## UI, Module, Or Presentation Layer

- No UI or module layer files were categorized

## Configuration And Schema Layer

- `src/auth/dto/login-dto.ts`
- `src/auth/dto/sign-up.dto.ts`
- `src/products/dto/products-query.dto.ts`
- `src/products/dto/products.dto.ts`
- `src/user/dto/create-user.dto.ts`

## State, Hook, Provider, Or Middleware Layer

- `src/common/middelware/logger.middelware.ts`

## Data Flow Notes

- The repository is organized around `NestJS` on top of `Node.js`.
- The detected execution model is `Server-rendered API/runtime backend`.
- Routes, pages, endpoints, or entry files are listed explicitly in this document when they were detected.
- Service, library, database, or integration files are separated into their own inventory groups for easier tracing.
- Configuration, schema, and environment references are documented from source files and root config files.
- Detected service or data files suggest where business logic or persistence concerns are concentrated.
- Detected state, provider, hook, or middleware files suggest cross-cutting runtime behavior.

## External Integration Boundaries

- Mongoose is declared
- Nest Mongoose integration is declared
- bcryptjs is declared for password hashing
- Render deployment configuration file is present

## Authentication And Access Notes

- JWT-related dependencies are present
- Password hashing dependency bcryptjs is present
- Repository contains auth-related source files or routes

## Database And Storage Notes

- Mongoose-backed MongoDB access is present

## Deployment And Infrastructure Notes

- Render deployment manifest is present at the repository root

## Architecture Support Inventory

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
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `render.yaml`
- `src/admin/admin.controller.ts`
- `src/admin/admin.module.ts`
- `src/admin/admin.repository.ts`
- `src/admin/admin.service.ts`
- `src/app.controller.ts`

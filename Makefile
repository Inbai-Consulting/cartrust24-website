# Helper targets for local development.

.PHONY: help dev build check lint

help:
	@echo "Available targets:"
	@echo "  make dev    - Start development server"
	@echo "  make build  - Production build (runs inside sandbox to verify changes compile)"
	@echo "  make lint   - Run ESLint"
	@echo "  make check  - Full verification: lint + build (optional; may be slow)"

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

check: lint build

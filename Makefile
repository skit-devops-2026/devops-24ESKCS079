.PHONY: install test build run docker-build docker-up

install:
	npm ci

test:
	node --test tests/medcare.test.js

run:
	python -m http.server 5500

# Needed from M4 onwards
docker-build:
	@echo "Docker build will be configured in M4."

docker-up:
	@echo "Docker Compose will be configured in M4."
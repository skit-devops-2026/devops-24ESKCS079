.PHONY: install test build run docker-build docker-up

install:
	npm ci

test:
	node -e "const fs=require('fs'); const files=['index.html','login.html','dashboard.html','heart-monitor.html','script.js','style.css','package.json','src/input.css']; const missing=files.filter(f=>!fs.existsSync(f)); if(missing.length){console.error('Missing files:',missing.join(', ')); process.exit(1)} console.log('MedCare++ tests passed: required files exist.')"

build:
	npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css

run:
	python -m http.server 5500

# Needed from M4 onwards
docker-build:
	@echo "Docker build will be configured in M4."

docker-up:
	@echo "Docker Compose will be configured in M4."
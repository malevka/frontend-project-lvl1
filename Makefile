#Makefile

install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run --unsafe-perm

lint:
	npx eslint .

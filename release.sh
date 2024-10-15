#!/bin/bash

git checkout main &&

# up version
npm version $VERSION &&
git push &&
git push --tags &&

# publish to npm
npm publish
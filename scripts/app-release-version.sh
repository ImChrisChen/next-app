#!/usr/bin/env bash

set -e

git add .

npm version $1  # patch minor major

version=$(node -p "require('./package.json').version")

git commit --amend "chore: app release $version"

git push origin --tags


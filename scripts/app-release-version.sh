#!/usr/bin/env bash

set -e

npm version $1  # patch minor major

version=$(node -p "require('./package.json').version")

git commit --amend -m "chore: app release $version"

git push origin --tags


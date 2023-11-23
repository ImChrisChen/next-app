#!/usr/bin/env bash

git pull origin --tags

npm version $1  # patch minor major

version=$(node -p "require('./package.json').version")

tag_name="v$version"

git commit --amend "chore: app release $version"

git push origin tag_name


#!/bin/bash
set -e

# Build the site
git checkout main
python3 publish.py ./posts/*

# Switch to gh-pages branch
git checkout gh-pages

# Remove existing files
git rm -rf .

# Copy built site
cp -R site/* .

# Commit and push
git add .
git commit -m "Update GitHub Pages site"
git push origin gh-pages

# Switch back to main
git checkout main

#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Build Project
ng build --prod --no-source --output-path docs --base-href ng2-mdl

# Create 404.html from index.html
cp docs/index.html docs/404.html

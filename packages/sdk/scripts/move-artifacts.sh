#!/usr/bin/env bash
rm -rf ./artifacts
mkdir ./artifacts

for file in $(find ./lib/contracts/out -name '*.json'); do
    cp $file ./artifacts;
done
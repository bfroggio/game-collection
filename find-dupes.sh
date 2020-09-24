#!/usr/bin/env bash

awk -F '|' 'a[$2]++{print $2}' README.md

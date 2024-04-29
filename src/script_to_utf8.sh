#!/bin/bash
for fichier in *.txt; do
    iconv -f iso-8859-1 -t utf-8 "$fichier" > "nouveau_$fichier"
done

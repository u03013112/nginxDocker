#!/bin/bash
SRC=/Users/u03013112/Documents/git/nginxDocker
DST=root@192.168.40.62:/home/git/
trap 'exit' INT
while :
    do
        echo '----------------------------------------------------------------'
        fswatch -r -L -1 ${SRC}
        date
        rsync -av --delete ${SRC} ${DST}
        say 啊啊啊啊
    done
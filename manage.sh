#!/bin/sh
export GJS_DEBUG_TOPICS="JS LOG"
export GJS_DEBUG_OUTPUT=stderr
export GJS_PATH=`pwd`:`pkg-config --variable=datarootdir gjs-1.0`/gjs-1.0
export LD_LIBRARY_PATH=`pkg-config --variable=mozjslibdir gjs-1.0`
gjs-console jango/manage.js

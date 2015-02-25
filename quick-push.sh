#!/bin/bash

if [ $# -lt 1 ]
then
	echo "Usage: quick-push.sh [COMMIT_MESSAGE]"
	exit 1
else
	echo "Quickly pushing website..."

	echo -n "Adding files..."
	git add * 2> /dev/null
	echo "Done"

	echo -n "Commiting Changes..."
	git commit -m "$@" 2> /dev/null
	echo "Done"
	echo "Commit Message: $@"

	echo -n "Pushing to Server..."
	git push
	echo "Done"

	exit 0
fi

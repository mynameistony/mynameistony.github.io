#!/bin/bash

HEADER_FILE="./header.html"

function addHeader() {
	echo "Adding header from template '$2' to $1"

	cat $1 | sed s/"<\/head>"/"<\/head>\n-->"/g > $1.tmp
	cat $2 > $1
	cat $1.tmp >> $1
	rm $1.tmp
}

HTML_FILES=$(find ./ | grep ".html")

echo -n "" > nheader.tmp
echo -n "" > yheader.tmp

echo -e "Recursively scanning '$PWD'\n"

for file in $HTML_FILES
do
	cat $file | grep "CONTAINS_HEADER" >> /dev/null
	if [ $? -ne 0 ]
		then
		#echo "[o] '$file'"
		echo $file >> nheader.tmp
	else
		#echo "[x] '$file'"
		echo $file >> yheader.tmp
	fi
done

echo "$(cat nheader.tmp | wc -l) files do not have a header"
echo "$(cat yheader.tmp | wc -l) files do have a header"

choice="1"
while [ $choice != "0" ]
do
	echo "What do you want to do?"
	echo "1 -> View files w/header"
	echo "2 -> View files w/o header"
	echo "3 -> Add header to files"
	echo "0 -> Quit"
	read choice

	if [ $choice == "0" ]
	then 
		exit 0
	elif [ $choice == "1" ]
	then
		echo "|__Files w/header__|"
		cat yheader.tmp
		echo "|------------------|"
	elif [ $choice == "2" ]
	then
		echo "|__Files w/o header__|"
		cat nheader.tmp
		echo "|--------------------|"
	elif [ $choice == "3" ]
	then
		
		echo "Automatically add header to files?"
		echo "y -> yes"
		echo "n -> no"
		echo "i -> interactive"

		read input

		if [ "$input" == "y" ]
		then
			
			for newfile in $(cat nheader.tmp)
			do
				echo "Adding header to $newfile"
				addHeader $newfile $HEADER_FILE
			done

			exit 0
		fi

		if [ "$input" == "i" ]
		then
			for file in $(cat nheader.tmp)
			do
				echo "Add header to '$file'? (y or n)"
				read addheader

				if [ $addheader == "y" ]
				then
					echo "Adding header to '$file'"
					echo ""
					addHeader $file $HEADER_FILE
				else
					echo "Not adding header to $file"
					echo ""
				fi
			done
			exit 0
		fi
	fi
done


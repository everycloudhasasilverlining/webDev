#! /bin/bash

echo "---------------------------"
echo "| shell scropt calculator |"
echo "---------------------------"

while [ true ]
do
	read A
	echo `echo "$A"|bc`
done

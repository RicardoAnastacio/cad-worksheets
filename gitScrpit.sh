if [ "$1" != "" ]; then
	git add -A && git commit -m "$1"
	git push --force
	echo "End"
else
    echo "Positional parameter 1 is empty"
	echo "Put commit Menssage arg"
fi

TIMESTAMP=$(date "+%A, %B %d, %Y at %l:%M%P")
cd ./feed/

echo "" > post.tmp
nano post.tmp
echo $(cat post.tmp | sed s/"$"/"<br>"/) > post.tmp


post=$(cat post.tmp)
cat index.html | sed s/"<body>"/"<body>\n$post"/g
exit 0
# | sed s/"<\/body>"// | sed s/"<\/center>$"// > index.tmp

echo "<p><div class=\"post\">" >> index.tmp
echo "<div class=\"post-time\">$TIMESTAMP</div>" >> index.tmp
echo "<div class=\"post-content\">$(cat post.tmp)</div>" >> index.tmp
echo "</div></p>" >> index.tmp

cat index.tmp > index.html

echo "</center>" >> index.html
echo "</body>" >> index.html

rm *.tmp

exit 0


TIMESTAMP=$(date "+%A, %B %d, %Y at %l:%M%P")
cd ./feed/

echo "" > post.tmp
nano post.tmp
echo $(cat post.tmp | sed s/"$"/"<br>"/) > post.tmp


cat index.html | sed s/"<\/body>"// | sed s/"<\/center>$"// > index.tmp

echo "<div class=\"post\">" >> index.tmp
echo "<div class=\"post-time\">$TIMESTAMP</div>" >> index.tmp
echo "<div class=\"post-content\">$(cat post.tmp)</div>" >> index.tmp
echo "</div>" >> index.tmp

cat index.tmp > index.html

echo "</center>" >> index.html
echo "</body>" >> index.html

rm *.tmp

exit 0


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>留言</title>
</head>
<body>
<?php 
$guestbook = new DomDocument(); //创建一个新的 DOM对象 
$guestbook->load('./guestbook.xml'); //读取 XML数据 
$threads = $guestbook->documentElement; //获得 XML结构的根 
//创建一个新 thread节点 
$thread = $guestbook->createElement('thread'); 
$threads->appendChild($thread); 
//在新的 thread节点上创建 title标签 
$title = $guestbook->createElement('title'); 
$title->appendChild($guestbook->createTextNode($_GET['title'])); 
$thread->appendChild($title); 
//在新的 thread节点上创建 author标签 
$author = $guestbook->createElement('author'); 
$author->appendChild($guestbook->createTextNode($_GET['author'])); 
$thread->appendChild($author); 
//在新的 thread节点上创建 content标签 
$content = $guestbook->createElement('content'); 
$content->appendChild($guestbook->createTextNode($_GET['content'])); 
$thread->appendChild($content); 
//将 XML数据写入文件 
$fp = fopen("./guestbook.xml", "w"); 
fwrite($fp, $guestbook->saveXML());
fclose($fp); 
?> 
<?php 
//打开用于存储留言的 XML文件 
$guestbook = simplexml_load_file('./guestbook.xml'); 
foreach($guestbook->thread as $th) //循环读取 XML数据中的每一个 thread标签 
{ 
echo "<B>标题：</B>".$th->title."<BR>"; 
echo "<B>作者：</B>".$th->author."<BR>"; 
echo "<B>内容：</B><PRE>".$th->content."</PRE>"; 
echo "<HR>"; 
} 
?> 
</body>
</html>
<?php

  $colors = array("red", "white", "blue");
  echo "\colors contains >$colors<\n";
  echo "\colors[1] contains >$colors[1]<\n";
  echo "\colors[1] contains >$colors [1]<\n";		// whitespace permitted, but semantics change
  //echo "\colors[1] contains >$colors[ 1]<\n";	// whitespace not permitted
  //echo "\colors[1] contains >$colors[1 ]<\n";	// whitespace not permitted
  var_dump("$colors[1]");
  var_dump("$colors[01]");		// invalid index
  var_dump("$colors[0x1]");		// invalid index
  var_dump("$colors[0X1]");		// invalid index

  echo "~'.{{$expectedLength}}'\$~s";
  $obj = new stdClass();
  $obj->name = 'john';
  if ($obj->name[0] == "{") echo 1;
  echo "Hello \"$obj->name\" !";
  echo "Hello {".$obj->name."} !";
  echo "Hello {$obj->name} !";
  echo "Hello ${obj}->name !";
  echo "\"$parts[0]\"\n";
  // @fixme (from lexer) echo "${$parts[$i]}\n";
  echo "yo : {$feeds[0]['title[0][value]']}";
  return "\x1B[{$color}m{$str}\x1B[0m";
  $tiny = "$";
  $foo = array("v1.09azAZ-._~!$", true);
  $v = strtolower("$i.$j.$k-$rel");
  $text = "$text at line $line";
  return "Class.create('$package$className',{";

  $this->lastTTYMode = trim(`stty -g`);

  /**, $methodName = null **/
  $source = preg_replace('/(^|\s)namespace(.*?)\s*;/', "$1namespace$2\n{", $source)."}\n";
  /*/
  $foo;
  /**/
  $foo;

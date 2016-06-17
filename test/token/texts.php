<?php
 /* 
@todo - should pass
*/
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

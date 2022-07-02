// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strcasecmp.phpt
  it("strcasecmp() function", function () {
    expect(parser.parseCode("<?php\n/* Compares two strings in case-insensitive manner */\necho \"#### Basic and Possible operations ####\";\n/* creating an array of strings to be compared */\n$arrays = array(\n           array(\"a\", 'A', chr(128), chr(255), chr(256)),\n           array(\"acc\", \"Acc\", 'aC', \"acCc\", 'acd', \"?acc\", 'Acc!', \"$!acc\", \";acc\"),\n           array(\"1\", \"0\", 0, \"-1\", -1, \"\", TRUE, true, FALSE, \"string\"),\n           array(10.5, 1.5, 9.5, 11.5, 100.5, 10.5E1, -10.5, 10, 0.5)\n          );\n/* loop through to go each and every element in an array\n    and comparing the elements with one and other */\nforeach($arrays as $str1_arr){\n  echo \"\\n*** comparing the strings in an \\n\";\n  print_r($str1_arr);\n  for ($i=0; $i<count($str1_arr); $i++){\n    echo \"\\nIteration $i\\n\";\n    for($j=0; $j<count($str1_arr); $j++){\n      echo \"- strcasecmp of '$str1_arr[$i]' and '$str1_arr[$j]' is => \";\n      var_dump(strcasecmp($str1_arr[$i], $str1_arr[$j]));\n    }\n  }\n}\necho \"\\n#### Testing miscellaneous inputs ####\\n\";\necho \"--- Testing objects ---\\n\";\n/* we get \"Recoverable fatal error: saying Object of class could not be converted\n   to string\" by default when an object is passed instead of string.\nThe error can be  avoided by choosing the __toString magix method as follows: */\nclass string1 {\n  function __toString() {\n    return \"Hello, world\";\n  }\n}\n$obj_string1 = new string1;\nclass string2 {\n  function __toString() {\n    return \"hello, world\\0\";\n  }\n}\n$obj_string2 = new string2;\nvar_dump(strcasecmp(\"$obj_string1\", \"$obj_string2\"));\necho \"\\n--- Testing arrays ---\\n\";\n$str_arr = array(\"hello\", \"?world\", \"!$%**()%**[][[[&@#~!\");\nvar_dump(strcasecmp(\"hello?world,!$%**()%**[][[[&@#~!\", \"$str_arr[1]\"));\nvar_dump(strcasecmp(\"hello?world,!$%**()%**[][[[&@#~!\", \"$str_arr[2]\"));\necho \"\\n--- Testing a longer and heredoc string ---\\n\";\n$string = <<<EOD\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\n@#$%^&**&^%$#@!~:())))((((&&&**%$###@@@!!!~~~~@###$%^&*\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nEOD;\nvar_dump(strcasecmp($string, $string));\nvar_dump(strcasecmp($string, \"xyz0123456789\"));\nvar_dump(strcasecmp($string, \"&&&\"));\necho \"\\n--- Testing a heredoc null string ---\\n\";\n$str = <<<EOD\nEOD;\nvar_dump(strcasecmp($str, \"\\0\"));\nvar_dump(strcasecmp($str, \"0\"));\necho \"\\n--- Testing simple and complex syntax strings ---\\n\";\n$str = 'world';\n/* Simple syntax */\nvar_dump(strcasecmp(\"Hello, world\", \"$str\"));\nvar_dump(strcasecmp(\"Hello, world'S\", \"$str'S\"));\nvar_dump(strcasecmp(\"Hello, worldS\", \"$strS\"));\n/* String with curly braces, complex syntax */\nvar_dump(strcasecmp(\"Hello, worldS\", \"${str}S\"));\nvar_dump(strcasecmp(\"Hello, worldS\", \"{$str}S\"));\necho \"\\n--- Testing binary safe and binary chars ---\\n\";\nvar_dump(strcasecmp(\"Hello\\0world\", \"Hello\"));\nvar_dump(strcasecmp(\"Hello\\0world\", \"Helloworld\"));\nvar_dump(strcasecmp(\"\\x0\", \"\\0\"));\nvar_dump(strcasecmp(\"\\000\", \"\\0\"));\nvar_dump(strcasecmp(\"\\x00\", \"\"));\necho \"\\n--- Comparing long float values ---\\n\";\n/* Here two different outputs, which depends on the rounding value\n   before converting to string. Here Precision = 12  */\nvar_dump(strcasecmp(10.55555555555555555555555555, 10.5555555556));   // int(0)\nvar_dump(strcasecmp(10.55555555555555555555555555, 10.555555556));    // int(-1)\nvar_dump(strcasecmp(10.55555555595555555555555555, 10.555555556));    // int(0)\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

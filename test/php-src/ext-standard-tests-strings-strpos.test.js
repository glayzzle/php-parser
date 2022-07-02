// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strpos.phpt
  it("Test strpos() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing basic functionality of strpos() ***\\n\";\nvar_dump( strpos(\"test string\", \"test\") );\nvar_dump( strpos(\"test string\", \"string\") );\nvar_dump( strpos(\"test string\", \"strin\") );\nvar_dump( strpos(\"test string\", \"t s\") );\nvar_dump( strpos(\"test string\", \"g\") );\nvar_dump( strpos(\"te\".chr(0).\"st\", chr(0)) );\nvar_dump( strpos(\"tEst\", \"test\") );\nvar_dump( strpos(\"teSt\", \"test\") );\nvar_dump( strpos(\"\", \"\") );\nvar_dump( strpos(\"a\", \"\") );\nvar_dump( strpos(\"\", \"a\") );\nvar_dump( strpos(\"\\\\\\\\a\", \"\\\\a\") );\necho \"\\n*** Testing strpos() to find various needles and a long string ***\\n\";\n$string =\n\"Hello world,012033 -3.3445     NULL TRUE FALSE\\0 abcd\\xxyz \\x000 octal\\n\nabcd$:Hello world\";\n/* needles in an array to get the position of needle in $string */\n$needles = array(\n  \"Hello world\",\n  \"WORLD\",\n  \"\\0\",\n  \"\\x00\",\n  \"\\x000\",\n  \"abcd\",\n  \"xyz\",\n  \"octal\",\n  \"-3\",\n  -3,\n  \"-3.344\",\n  -3.344,\n  \"NULL\",\n  \"0\",\n  0,\n  TRUE,\n  \"TRUE\",\n  \"1\",\n  1,\n  FALSE,\n  \"FALSE\",\n  \" \",\n  \"     \",\n  'b',\n  '\\n',\n  \"\\n\",\n  \"12\",\n  \"12twelve\",\n  $string\n);\n/* loop through to get the \"needle\" position in $string */\nfor( $i = 0; $i < count($needles); $i++ ) {\n  echo \"Position of '$needles[$i]' is => \";\n  var_dump( strpos($string, $needles[$i]) );\n}\necho \"\\n*** Testing strpos() with possible variations in offset ***\\n\";\n$offset_values = array (\n  1,  // offset = 1\n  \"string\",  // offset as string, converts to zero\n  \"\",  // offset as string, converts to zero\n  \"0\",\n  TRUE,\n  FALSE,\n  \"string12\",\n  -10, // Not found\n  -15, // Found\n  -strlen($string),\n);\n/* loop through to get the \"needle\" position in $string */\nfor( $i = 0; $i < count( $offset_values ); $i++ ) {\n  echo \"Position of 'Hello' with offset '$offset_values[$i]' is => \";\n  try {\n    var_dump( strpos($string, \"Hello\", $offset_values[$i]) );\n  } catch (TypeError $e) {\n    echo \"\\n\", $e->getMessage(), \"\\n\";\n  }\n}\necho \"\\n*** Testing miscellaneous input data ***\\n\";\necho \"-- Passing objects as string and needle --\\n\";\n/* we get \"Recoverable fatal error: saying Object of class needle could not be\n converted to string\" by default when an object is passed instead of string:\n The error can be avoided by choosing the __toString magix method as follows: */\nclass StringCapable\n{\n  function __toString() {\n    return \"Hello, world\";\n  }\n}\n$obj_string = new StringCapable;\nclass needle\n{\n  function __toString() {\n    return \"world\";\n  }\n}\n$obj_needle = new needle;\nvar_dump( strpos(\"$obj_string\", \"$obj_needle\") );\necho \"\\n-- Posiibilities with null --\\n\";\nvar_dump( strpos(\"\", NULL) );\nvar_dump( strpos(NULL, NULL) );\nvar_dump( strpos(\"a\", NULL) );\nvar_dump( strpos(\"/x0\", \"0\") );\t // Hexadecimal NUL\necho \"\\n-- A longer and heredoc string --\\n\";\n$string = <<<EOD\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789\nEOD;\nvar_dump( strpos($string, \"abcd\") );\nvar_dump( strpos($string, \"abcd\", 72) );  // 72 -> \"\\n\" in the first line\nvar_dump( strpos($string, \"abcd\", 73) );  // 73 -> \"abcd\" in the second line\nvar_dump( strpos($string, \"9\", (strlen($string)-1)) );\necho \"\\n-- A heredoc null string --\\n\";\n$str = <<<EOD\nEOD;\nvar_dump( strpos($str, \"\\0\") );\nvar_dump( strpos($str, \"0\") );\necho \"\\n-- simple and complex syntax strings --\\n\";\n$needle = 'world';\n/* Simple syntax */\nvar_dump( strpos(\"Hello, world\", \"$needle\") );  // works\nvar_dump( strpos(\"Hello, world'S\", \"$needle'S\") );  // works\nvar_dump( strpos(\"Hello, worldS\", \"$needleS\") );  // won't work\n/* String with curly braces, complex syntax */\nvar_dump( strpos(\"Hello, worldS\", \"${needle}S\") );  // works\nvar_dump( strpos(\"Hello, worldS\", \"{$needle}S\") );  // works\necho \"\\n*** Testing error conditions ***\\n\";\nvar_dump( strpos($string, \"\") );\ntry {\n    strpos($string, \"test\", strlen($string)+1);  // offset > strlen()\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    strpos($string, \"test\", -strlen($string)-1);  // offset before start\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});

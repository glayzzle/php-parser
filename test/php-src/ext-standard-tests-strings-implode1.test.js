// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/implode1.phpt
  it("Test implode() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing implode() for basic operations ***\\n\";\n$arrays = array (\n  array(1,2),\n  array(1.1,2.2),\n  array(array(2),array(1)),\n  array(false,true),\n  array(),\n  array(\"a\",\"aaaa\",\"b\",\"bbbb\",\"c\",\"ccccccccccccccccccccc\")\n);\n/* loop to output string with ', ' as $glue, using implode() */\nforeach ($arrays as $array) {\n  var_dump( implode(', ', $array) );\n  var_dump($array);\n}\necho \"\\n*** Testing implode() with variations of glue ***\\n\";\n/* checking possible variations */\n$pieces = array (\n  2,\n  0,\n  -639,\n  true,\n  \"PHP\",\n  false,\n  \"\",\n  \" \",\n  \"string\\x00with\\x00...\\0\"\n);\n$glues = array (\n  \"TRUE\",\n  true,\n  false,\n  array(\"key1\", \"key2\"),\n  \"\",\n  \" \",\n  \"string\\x00between\",\n  -0,\n  '\\0'\n);\n/* loop through to display a string containing all the array $pieces in the same order,\n   with the $glue string between each element  */\n$counter = 1;\nforeach($glues as $glue) {\n  echo \"-- Iteration $counter --\\n\";\n  try {\n       var_dump(implode($glue, $pieces));\n  } catch (TypeError $exception) {\n      echo $exception->getMessage() . \"\\n\";\n  }\n  $counter++;\n}\n/* empty string */\necho \"\\n*** Testing implode() on empty string ***\\n\";\ntry {\n    implode(\"\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* checking sub-arrays */\necho \"\\n*** Testing implode() on sub-arrays ***\\n\";\n$sub_array = array(array(1,2,3,4), array(1 => \"one\", 2 => \"two\"), \"PHP\", 50);\nvar_dump(implode(\"TEST\", $sub_array));\ntry {\n   var_dump(implode(array(1, 2, 3, 4), $sub_array));\n} catch (TypeError $exception) {\n  echo $exception->getMessage() . \"\\n\";\n}\ntry {\n   var_dump( implode(2, $sub_array) );\n} catch (TypeError $exception) {\n  echo $exception->getMessage() . \"\\n\";\n}\necho \"\\n*** Testing implode() on objects ***\\n\";\n/* checking on objects */\nclass foo\n{\n  function __toString() {\n    return \"Object\";\n  }\n}\n$obj = new foo(); //creating new object\n$arr = array();\n$arr[0] = &$obj;\n$arr[1] = &$obj;\nvar_dump( implode(\",\", $arr) );\nvar_dump($arr);\n/* Checking on resource types */\necho \"\\n*** Testing end() on resource type ***\\n\";\n/* file type resource */\n$file_handle = fopen(__FILE__, \"r\");\n/* directory type resource */\n$dir_handle = opendir( __DIR__ );\n/* store resources in array for comparison */\n$resources = array($file_handle, $dir_handle);\nvar_dump( implode(\"::\", $resources) );\necho \"\\n*** Testing error conditions ***\\n\";\n/* only glue */\ntry {\n    var_dump( implode(\"glue\") );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* int as pieces */\ntry {\n    var_dump( implode(\"glue\",1234) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* NULL as pieces */\ntry {\n    var_dump( implode(\"glue\", NULL) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* pieces as NULL array */\ntry {\n    var_dump( implode(\",\", array(NULL)) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* integer as glue */\ntry {\n    var_dump( implode(12, \"pieces\") );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* NULL as glue */\ntry {\n    var_dump( implode(NULL, \"abcd\") );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* closing resource handles */\nfclose($file_handle);\nclosedir($dir_handle);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists.phpt
  it("Test array_key_exists() function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing basic functionalities ***\\n\";\n/* Arrays with regular values */\n$search_arrays = array(\n           array(1,2,3,4),\n           array('a','b','c'),\n           array('abc', 'bcd', 'dcf'),\n           array(\"test\", \"rest\", \"enjoy\"),\n           array(\"Name\" => \"Jack\", \"Loc\" => \"Mars\", \"Id\" => \"MS123\"),\n           array('Red' => 'Rose', 'I' => 'You'),\n           array(0 => 'Zero', 1 => 'One', 2 => 'Two', 3 => \"Three\" ),\n          );\n/* keys to search in $search_arrays. $keys[0]\n   is the key to be searched in $search_arrays[0] and so on */\n$keys = array( 1, 'a', 2, 4, \"Name\", \"Red\", 0, 3 );\n$key_counter = 0;\nforeach ($search_arrays as $search_array) {\n  $key = $keys[ $key_counter++ ];\n  echo \"-- Iteration $key_counter --\\n\";\n  var_dump( array_key_exists($key, $search_array) );\n}\necho \"\\n*** Testing possible variations ***\\n\";\n// use different keys on each sub array of  $search_arrays\n$key_variations = array (\"\", NULL, null, \" \", '', \"test\", 1);\n$key_counter = 0;\n$key_count = count ( $key_variations );\necho \"\\n** Variation loop 1 **\\n\";\n$out_loop_count = 0;\nforeach ($search_arrays as $search_array) {\n  $key_counter = 0;\n  $out_loop_count ++; echo \"-- Iteration $out_loop_count --\\n\";\n  while ( $key_counter < $key_count ) {\n    $key = $key_variations[ $key_counter++ ];\n    var_dump( array_key_exists($key, $search_array) );\n  }\n}\n// arrays with variation in elements\n$search_arrays_v = array (\n                     array(),\n                     array(NULL),\n                     array(array(), 1, 2),\n                     array(1,2,3, \"\" => \"value\", NULL => \"value\", true => \"value\" ),\n                     array( array(2,4,5), array (\"a\",\"b\",\"d\") )\n                   );\n// search for $key_variations in each sub array of $search_arrays_v\necho \"\\n** Variation loop 2 **\\n\";\n$out_loop_count = 0;\nforeach ($search_arrays_v as $search_array) {\n  $key_counter = 0;\n  $out_loop_count ++; echo \"-- Iteration $out_loop_count --\\n\";\n  while ( $key_counter < $key_count ) {\n    $key = $key_variations[ $key_counter++ ];\n    var_dump( array_key_exists($key, $search_array) );\n  }\n}\necho \"\\n*** Testing error conditions ***\\n\";\n// first args as array\ntry {\n    array_key_exists(array(), array());\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\n*** Testing operation on objects ***\\n\";\nclass key_check\n{\n  public $public_var = \"Public var\";\n}\n$key_check_obj = new key_check; //new object\ntry {\n    var_dump(array_key_exists(\"public_var\", $key_check_obj));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

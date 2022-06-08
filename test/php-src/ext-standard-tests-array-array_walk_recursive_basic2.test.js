// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive_basic2.phpt
  it("Test array_walk_recursive() function : basic functionality - associative array", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_walk_recursive() : basic functionality ***\\n\";\n// associative array\n$fruits = array(\"a\" => \"lemon\", \"b\" => array( \"c\" => \"orange\", \"d\" => \"banana\"), \"e\" => array(\"f\" => \"apple\"));\nfunction test_alter(&$item, $key, $prefix)\n{\n  // dump the arguments to check that they are passed\n  // with proper type\n  var_dump($item); // value\n  var_dump($key);  // key\n  var_dump($prefix); // additional argument passed to callback function\n  echo \"\\n\"; // new line to separate the output between each element\n}\nfunction test_print($item, $key)\n{\n  // dump the arguments to check that they are passed\n  // with proper type\n  var_dump($item); // value\n  var_dump($key);  // key\n  echo \"\\n\"; // new line to separate the output between each element\n}\necho \"-- Using array_walk_recursive with default parameters to show array contents --\\n\";\nvar_dump(array_walk_recursive($fruits, 'test_print'));\necho \"-- Using array_walk_recursive with one optional parameter to modify contents --\\n\";\nvar_dump (array_walk_recursive($fruits, 'test_alter', 'fruit'));\necho \"-- Using array_walk_recursive with default parameters to show modified array contents --\\n\";\nvar_dump (array_walk_recursive($fruits, 'test_print'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

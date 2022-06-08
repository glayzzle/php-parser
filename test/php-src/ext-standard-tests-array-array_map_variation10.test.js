// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation10.phpt
  it("Test array_map() function : usage variations - anonymous callback function", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing anonymous callback function with following variations\n */\necho \"*** Testing array_map() : anonymous callback function ***\\n\";\n$array1 = array(1, 2, 3);\n$array2 = array(3, 4, 5);\necho \"-- anonymous function with all parameters and body --\\n\";\nvar_dump( array_map( function($a, $b) { return array($a, $b); }, $array1, $array2));\necho \"-- anonymous function with two parameters and passing one array --\\n\";\ntry {\n    var_dump( array_map( function($a, $b) { return array($a, $b); }, $array1));\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"-- anonymous function with NULL parameter --\\n\";\nvar_dump( array_map( function() { return NULL; }, $array1));\necho \"-- anonymous function with NULL body --\\n\";\nvar_dump( array_map( function($a) { }, $array1));\necho \"-- passing NULL as 'array1' --\\n\";\ntry {\n    var_dump( array_map( function($a) { return array($a); }, NULL));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

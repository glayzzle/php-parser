// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_intersect_ukey_variation8.phpt
  it("Test array_intersect_ukey() function : usage variation - Passing non-existing function name to callback", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_intersect_ukey() : usage variation ***\\n\";\n//Initialise arguments\n$array1 = array('blue'  => 1, 'red'  => 2, 'green'  => 3, 'purple' => 4);\n$array2 = array('green' => 5, 'blue' => 6, 'yellow' => 7, 'cyan'   => 8);\n//function name within double quotes\ntry {\n    var_dump( array_intersect_ukey($array1, $array2, \"unknown_function\") );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//function name within single quotes\ntry {\n    var_dump( array_intersect_ukey($array1, $array2, 'unknown_function') );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

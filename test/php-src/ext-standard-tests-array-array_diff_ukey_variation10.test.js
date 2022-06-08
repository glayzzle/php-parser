// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_ukey_variation10.phpt
  it("Test array_diff_ukey() function : usage variation - Passing non-existing function name to callback", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_ukey() : usage variation ***\\n\";\n//Initialize variables\n$array1 = array(\"a\" => \"green\", \"b\" => \"brown\", \"c\" => \"blue\", \"red\");\n$array2 = array(\"a\" => \"green\", \"yellow\", \"red\");\n//function name within double quotes\ntry {\n    var_dump( array_diff_ukey($array1, $array1, \"unknown_function\") );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//function name within single quotes\ntry {\n    var_dump( array_diff_ukey($array1, $array1, 'unknown_function') );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

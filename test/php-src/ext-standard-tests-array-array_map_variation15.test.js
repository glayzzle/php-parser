// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation15.phpt
  it("Test array_map() function : usage variations - non existent 'callback' function", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing non existent function for $callback argument\n */\necho \"*** Testing array_map() : non existent 'callback' function ***\\n\";\n// arrays to be passed as arguments\n$arr1 = array(1, 2);\n$arr2 = array(\"one\", \"two\");\n$arr3 = array(1.1, 2.2);\ntry {\n    var_dump( array_map('non_existent', $arr1, $arr2, $arr3) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

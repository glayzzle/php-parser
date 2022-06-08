// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation14.phpt
  it("Test array_map() function : usage variations - null value for 'callback' argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing null values for $callback argument and testing whether shortest\n * array will be extended with empty elements\n */\necho \"*** Testing array_map() : null value for 'callback' argument ***\\n\";\n// arrays to be passed as arguments\n$arr1 = array(1, 2);\n$arr2 = array(\"one\", \"two\");\n$arr3 = array(1.1, 2.2);\n// get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n/* calling array_map() with null callback */\necho \"-- with null --\\n\";\nvar_dump( array_map(null, $arr1, $arr2, $arr3) );\nvar_dump( array_map(NULL, $arr1, $arr2, $arr3) );\necho \"-- with unset variable --\\n\";\nvar_dump( array_map(@$unset_var, $arr1, $arr2, $arr3) );\necho \"-- with undefined variable --\\n\";\nvar_dump( array_map(@$undefined_var, $arr1) );\necho \"-- with empty string --\\n\";\ntry {\n    var_dump( array_map(\"\", $arr1, $arr2) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"-- with empty array --\\n\";\ntry {\n    var_dump( array_map(array(), $arr1, $arr2) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

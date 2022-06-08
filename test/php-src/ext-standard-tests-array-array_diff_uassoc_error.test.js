// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_error.phpt
  it("Test array_diff_uassoc() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_diff_uassoc() : error conditions ***\\n\";\n//Initialize array\n$array1 = array(\"a\" => \"green\", \"b\" => \"brown\", \"c\" => \"blue\", \"red\");\n$array2 = array(\"a\" => \"green\", \"yellow\", \"red\");\n$array3 = array(\"a\" => \"green\", \"red\");\n$array4 = array();\n$extra_arg = array(1, 2, 3, 4);\nfunction key_compare_func($a, $b)\n{\n    if ($a === $b) {\n        return 0;\n    }\n    return ($a > $b)? 1:-1;\n}\n//Test array_diff_uassoc with one more than the expected number of arguments\necho \"\\n-- Testing array_diff_uassoc() function with more than expected no. of arguments --\\n\";\ntry {\n    var_dump( array_diff_uassoc($array1, $array2, \"key_compare_func\", $extra_arg) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( array_diff_uassoc($array1, $array2, $array3, $array4, \"key_compare_func\", $extra_arg) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// Testing array_diff_uassoc with one less than the expected number of arguments\necho \"\\n-- Testing array_diff_uassoc() function with less than expected no. of arguments --\\n\";\ntry {\n    var_dump( array_diff_uassoc($array1, $array2) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

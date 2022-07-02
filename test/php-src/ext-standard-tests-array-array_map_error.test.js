// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_error.phpt
  it("Test array_map() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_map() : error conditions ***\\n\";\n// Testing array_map with one less than the expected number of arguments\necho \"\\n-- Testing array_map() function with one less than expected no. of arguments --\\n\";\nfunction callback1() {\n  return 1;\n}\ntry {\n    var_dump( array_map('callback1') );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing array_map() function with less no. of arrays than callback function arguments --\\n\";\n$arr1 = array(1, 2);\nfunction callback2($p, $q) {\n  return $p * $q;\n}\ntry {\n    var_dump( array_map('callback2', $arr1) );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing array_map() function with more no. of arrays than callback function arguments --\\n\";\n$arr2 = array(3, 4);\n$arr3 = array(5, 6);\nvar_dump( array_map('callback2', $arr1, $arr2, $arr3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_reduce_variation1.phpt
  it("Test array_reduce() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_reduce() : variation ***\\n\";\nfunction oneArg($v) {\n  return $v;\n}\nfunction threeArgs($v, $w, $x) {\n  return $v + $w + $x;\n}\n$array = array(1);\necho \"\\n--- Testing with a callback with too few parameters ---\\n\";\nvar_dump(array_reduce($array, \"oneArg\", 2));\necho \"\\n--- Testing with a callback with too many parameters ---\\n\";\ntry {\n    var_dump(array_reduce($array, \"threeArgs\", 2));\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

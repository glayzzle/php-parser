// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_1.phpt
  it("Test array_diff when non-array is passed", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-=-\n$a = array();\n$b = 3;\n$c = array(5);\ntry {\n    array_diff($a, $b, $c);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n//-=-=-=-=-=-\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});

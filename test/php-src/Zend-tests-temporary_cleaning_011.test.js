// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_011.phpt
  it("Live range & lists", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __destruct() {\n        throw new Exception();\n    }\n}\n$b = new A();\n$x = 0;\n$c = [[$x,$x]];\ntry {\n    list($a, $b) = $c[0];\n} catch (Exception $e) {\n    echo \"exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

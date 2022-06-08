// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_010.phpt
  it("Live range & throw from finally", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        $a = [1, 2, 3];\n        return $a + [];\n    } finally {\n        throw new Exception;\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo \"exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

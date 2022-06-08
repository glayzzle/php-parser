// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_001.phpt
  it("Temporary leak on exception", function () {
    expect(parser.parseCode("<?php\nfunction ops() {\n    throw new Exception();\n}\ntry {\n    $x = 2;\n    $y = new stdClass;\n    while ($x-- && new stdClass) {\n        $r = [$x] + ($y ? ((array) $x) + [2] : ops());\n        $y = (array) $y;\n    }\n} catch (Exception $e) {\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});

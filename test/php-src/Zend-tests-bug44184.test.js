// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44184.phpt
  it("Bug #44184 (Double free of loop-variable on exception)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = array(1,2,3);\n    foreach ($x as $a) {\n        while (1) {\n            throw new Exception();\n        }\n        return;\n    }\n}\ntry {\n    foo();\n} catch (Exception $ex) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

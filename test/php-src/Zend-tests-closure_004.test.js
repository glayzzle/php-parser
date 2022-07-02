// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_004.phpt
  it("Closure 004: Lambda with lexical variables (scope lifetime)", function () {
    expect(parser.parseCode("<?php\nfunction run () {\n    $x = 4;\n    $lambda1 = function () use ($x) {\n        echo \"$x\\n\";\n    };\n    $lambda2 = function () use (&$x) {\n        echo \"$x\\n\";\n        $x++;\n    };\n    return array($lambda1, $lambda2);\n}\nlist ($lambda1, $lambda2) = run();\n$lambda1();\n$lambda2();\n$lambda1();\n$lambda2();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

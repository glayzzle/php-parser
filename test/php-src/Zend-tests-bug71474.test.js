// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71474.phpt
  it("Bug #71474: Crash because of VM stack corruption on Magento2", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function __call($name, $args) {\n        $a = $b = $c = $d = $e = $f = 1;\n    }\n}\nfunction test($n, $x) {\n//\tvar_dump($n);\n    if ($n > 0) {\n        $x->bug();\n        test($n - 1, $x);\n    }\n}\ntest(3000, new foo());\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});

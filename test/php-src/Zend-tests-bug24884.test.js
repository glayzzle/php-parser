// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug24884.phpt
  it("Bug #24884 (calling $this->__clone(); crashes php)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __copy()\n    {\n        $string = PHP_VERSION;\n        $version = $string[0];\n        if($string < 5)\n        {\n            return $this;\n        }\n        else\n        {\n            return clone $this;\n        }\n    }\n}\n$test = new Test();\n$test2 = $test->__copy();\nvar_dump($test2);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54358.phpt
  it("Bug #54358 (Closure, use and reference)", function () {
    expect(parser.parseCode("<?php\nclass asserter {\n    public function call($function) {\n    }\n}\n$asserter = new asserter();\n$closure = function() use ($asserter, &$function) {\n        $asserter->call($function = 'md5');\n};\n$closure();\nvar_dump($function);\n$closure = function() use ($asserter, $function) {\n        $asserter->call($function);\n};\n$closure();\nvar_dump($function);\n$closure = function() use ($asserter, $function) {\n        $asserter->call($function);\n};\n$closure();\nvar_dump($function);\n?>")).toMatchSnapshot();
  });
});

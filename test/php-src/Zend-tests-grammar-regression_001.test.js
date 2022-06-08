// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_001.phpt
  it("Test to check static method calls syntax regression", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function function(){ echo __METHOD__, PHP_EOL; }\n}\nFoo::function();\nFoo::\nfunction();\nFoo::\n     function();\nFoo::\n     function(\n);\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});

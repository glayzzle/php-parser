// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/property001.phpt
  it("\"Potentially\" conflicting trait properties do not result in a strict standards notice anymore", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait THello1 {\n  private $foo;\n}\ntrait THello2 {\n  private $foo;\n}\necho \"PRE-CLASS-GUARD-TraitsTest\\n\";\nclass TraitsTest {\n    use THello1;\n    use THello2;\n}\necho \"PRE-CLASS-GUARD-TraitsTest2\\n\";\nclass TraitsTest2 {\n    use THello1;\n    use THello2;\n}\nvar_dump(property_exists('TraitsTest', 'foo'));\nvar_dump(property_exists('TraitsTest2', 'foo'));\n?>")).toMatchSnapshot();
  });
});

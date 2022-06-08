// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/property002.phpt
  it("Non-conflicting properties should work just fine.", function () {
    expect(parser.parseCode("<?php\ntrait THello1 {\n  public $hello = \"hello\";\n}\ntrait THello2 {\n  private $world = \"World!\";\n}\nclass TraitsTest {\n    use THello1;\n    use THello2;\n    function test() {\n        echo $this->hello . ' ' . $this->world;\n    }\n}\nvar_dump(property_exists('TraitsTest', 'hello'));\nvar_dump(property_exists('TraitsTest', 'world'));\n$t = new TraitsTest;\n$t->test();\n?>")).toMatchSnapshot();
  });
});

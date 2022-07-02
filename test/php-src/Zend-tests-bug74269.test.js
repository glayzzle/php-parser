// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74269.phpt
  it("Bug #74269: It's possible to override trait property with different loosely-equal value", function () {
    expect(parser.parseCode("<?php\ntrait PropertiesTrait\n{\n    public $same = true;\n}\nclass PropertiesExample\n{\n    use PropertiesTrait;\n    public $same = 2;\n}\n?>")).toMatchSnapshot();
  });
});

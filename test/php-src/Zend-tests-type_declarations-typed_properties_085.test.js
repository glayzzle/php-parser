// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_085.phpt
  it("Important properties with different types from traits", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    public int $prop;\n}\ntrait T2 {\n    public string $prop;\n}\nclass C {\n    use T1, T2;\n}\n?>")).toMatchSnapshot();
  });
});

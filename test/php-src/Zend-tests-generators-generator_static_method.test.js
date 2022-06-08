// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_static_method.phpt
  it("A static method can be a generator", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static function gen() {\n        var_dump(get_class());\n        var_dump(get_called_class());\n        yield 1;\n        yield 2;\n        yield 3;\n    }\n}\nclass ExtendedTest extends Test {\n}\nforeach (ExtendedTest::gen() as $i) {\n    var_dump($i);\n}\n?>")).toMatchSnapshot();
  });
});

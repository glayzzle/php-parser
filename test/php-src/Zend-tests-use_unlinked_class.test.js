// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_unlinked_class.phpt
  it("Classes can only be used once they are fully linked", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    echo new ReflectionClass(A::class), \"\\n\";\n});\nclass A implements I {\n}\n?>")).toMatchSnapshot();
  });
});

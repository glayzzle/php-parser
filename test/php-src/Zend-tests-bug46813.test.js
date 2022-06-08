// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46813.phpt
  it("Bug #46813: class_exists doesn`t work with fully qualified namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test;\n{\n    class inner\n    {\n    }\n}\n$inner = new \\test\\inner();\necho \"autoload == true:\\n\";\nvar_dump(class_exists('\\test\\inner', true));\necho \"autoload == false:\\n\";\nvar_dump(class_exists('\\test\\inner', true));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parameter_default_values/userland_declaration_error_class_const.phpt
  it("The default value is a constant in the parent class method's signature.", function () {
    expect(parser.parseCode("<?php\nuse Foo\\Bar;\nclass A\n{\n    public function foo(\n        $param1 = \\Foo\\Bar::CONSTANT,\n        $param2 = Foo\\Bar::CONSTANT,\n        $param3 = Bar::CONSTANT\n    ) {\n    }\n}\nclass B extends A\n{\n    public function foo()\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});

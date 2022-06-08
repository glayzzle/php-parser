// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/gh8176.phpt
  it("Enum object in property initializer", function () {
    expect(parser.parseCode("<?php\nclass AClass\n{\n    public $prop = AnEnum::Value;\n}\nenum AnEnum\n{\n    case Value;\n}\nvar_dump(new AClass);\n?>")).toMatchSnapshot();
  });
});

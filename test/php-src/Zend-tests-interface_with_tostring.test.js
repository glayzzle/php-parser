// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/interface_with_tostring.phpt
  it("Interface with __toString() method", function () {
    expect(parser.parseCode("<?php\ninterface MyStringable {\n    public function __toString(): string;\n}\n$rc = new ReflectionClass(MyStringable::class);\nvar_dump($rc->getInterfaceNames());\n?>")).toMatchSnapshot();
  });
});

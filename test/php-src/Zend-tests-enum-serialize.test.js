// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/serialize.phpt
  it("Enum serialize", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\necho serialize(Foo::Bar);\n?>")).toMatchSnapshot();
  });
});

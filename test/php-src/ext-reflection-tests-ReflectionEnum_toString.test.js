// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_toString.phpt
  it("ReflectionEnum::__toString()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\necho new ReflectionEnum(Foo::class);\n?>")).toMatchSnapshot();
  });
});

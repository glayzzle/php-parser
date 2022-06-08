// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnumUnitCase_getEnum.phpt
  it("ReflectionEnumUnitCase::getEnum()", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\necho (new ReflectionEnumUnitCase(Foo::class, 'Bar'))->getEnum();\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_enum.phpt
  it("Enum preloading", function () {
    expect(parser.parseCode("<?php\nvar_dump(MyEnum::Foo);\nvar_dump(MyEnum::Bar);\n?>")).toMatchSnapshot();
  });
});

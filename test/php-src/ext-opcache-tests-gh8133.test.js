// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/gh8133.phpt
  it("Enum preloading", function () {
    expect(parser.parseCode("<?php\nvar_dump(Foo::CASES);\nvar_dump(Qux::CASES);\n?>")).toMatchSnapshot();
  });
});

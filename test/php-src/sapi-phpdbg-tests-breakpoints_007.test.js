// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/breakpoints_007.phpt
  it("Basic method breakpoints", function () {
    expect(parser.parseCode("<?php\nclass bar {\n\tfunction foo($bar) {\n\t\tvar_dump($bar);\n\t}\n}\n(new bar)->foo(\"test\");\n")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/breakpoints_005.phpt
  it("Test breakpoint into function context", function () {
    expect(parser.parseCode("<?php\nfunction foo($bar) {\n\tvar_dump($bar);\n}\nfoo(\"test\");\n")).toMatchSnapshot();
  });
});

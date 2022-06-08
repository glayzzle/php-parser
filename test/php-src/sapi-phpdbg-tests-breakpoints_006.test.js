// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/breakpoints_006.phpt
  it("Basic function breakpoints", function () {
    expect(parser.parseCode("<?php\nfunction foo($bar) {\n\tvar_dump($bar);\n}\nfoo(\"test\");\n")).toMatchSnapshot();
  });
});

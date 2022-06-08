// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/breakpoints_008.phpt
  it("Test namespaced and non-lowercase breakpoint names", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n\tclass Bar {\n\t\tfunction Foo($bar) {\n\t\t\tvar_dump($bar);\n\t\t}\n\t}\n}\nnamespace {\n\t(new \\Foo\\Bar)->Foo(\"test\");\n}\n")).toMatchSnapshot();
  });
});

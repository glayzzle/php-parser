// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/print_002.phpt
  it("Relative print commands", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n\tclass Bar {\n\t\tfunction Foo($bar) {\n\t\t\tvar_dump($bar);\n\t\t}\n\t\tfunction baz() { }\n\t}\n}\nnamespace {\n\tfunction foo($baz) {\n\t\tvar_dump(strrev($baz));\n\t}\n\t(new \\Foo\\Bar)->Foo(\"test\");\n\tfoo(\"test\");\n}\n")).toMatchSnapshot();
  });
});

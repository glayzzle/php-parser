// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/var_export.phpt
  it("Enum var_export", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nvar_export(Foo::Bar);\n// Should not warn about recursion\necho \"\\n\";\necho str_replace(\" \\n\", \"\\n\", var_export([Foo::Bar], true));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug42785.phpt
  it("Bug #42785 (Incorrect formatting of double values with non-english locales)", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, \"de_DE\", \"de\", \"german\", \"ge\", \"de_DE.ISO8859-1\", \"ISO8859-1\");\n$foo = array(100.10,\"bar\");\nvar_dump(json_encode($foo));\nclass bar {}\n$bar1 = new bar;\n$bar1->a = 100.10;\n$bar1->b = \"foo\";\nvar_dump(json_encode($bar1));\n?>")).toMatchSnapshot();
  });
});

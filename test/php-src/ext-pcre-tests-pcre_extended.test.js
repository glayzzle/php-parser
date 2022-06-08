// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/pcre_extended.phpt
  it("x (PCRE_EXTENDED) modifier", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/a e i o u/', 'aeiou', $m));\nvar_dump($m);\nvar_dump(preg_match('/a e i o u/x', 'aeiou', $m));\nvar_dump($m);\nvar_dump(preg_match(\"/a e\\ni\\to\\ru/x\", 'aeiou', $m));\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});

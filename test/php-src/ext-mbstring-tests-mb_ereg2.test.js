// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg2.phpt
  it("mb_ereg() returning matches", function () {
    expect(parser.parseCode("<?php\n$a = -1; $b = -1; $c = -1;\nmb_ereg($a, $b, $c);\nvar_dump($a, $b, $c);\nmb_eregi($a, $b, $c);\nvar_dump($a, $b, $c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

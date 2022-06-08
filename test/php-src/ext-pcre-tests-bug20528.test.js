// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug20528.phpt
  it("Bug #20528 (preg_split() drops characters (re-opens Bug #15413))", function () {
    expect(parser.parseCode("<?php\n    $data = '(#11/19/2002#)';\n    var_dump(preg_split('/\\b/', $data));\n?>")).toMatchSnapshot();
  });
});

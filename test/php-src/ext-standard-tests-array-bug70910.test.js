// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug70910.phpt
  it("Bug #70910 (extract() breaks variable references)", function () {
    expect(parser.parseCode("<?php\n$var = 'original value';\n$ref =& $var;\n$hash = ['var' => 'new value'];\nextract($hash);\nvar_dump($var === $ref);\n?>")).toMatchSnapshot();
  });
});

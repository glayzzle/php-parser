// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug72785.phpt
  it("Bug #72785: allowed_classes only applies to outermost unserialize()", function () {
    expect(parser.parseCode("<?php\n// Forbidden class\nclass A {}\n$p = 'x:i:0;a:1:{i:0;O:1:\"A\":0:{}};m:a:0:{}';\n$s = 'C:11:\"ArrayObject\":' . strlen($p) . ':{' . $p . '}';\nvar_dump(unserialize($s, ['allowed_classes' => ['ArrayObject']]));\n?>")).toMatchSnapshot();
  });
});

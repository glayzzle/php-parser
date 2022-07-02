// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug54238.phpt
  it("Bug #54238 (use-after-free in substr_replace())", function () {
    expect(parser.parseCode("<?php\n$f = array(array('A', 'A'));\n$z = substr_replace($f, $f, $f, 1);\nvar_dump($z, $f);\n?>")).toMatchSnapshot();
  });
});

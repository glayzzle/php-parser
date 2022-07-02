// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug77793.phpt
  it("Bug #77793: Segmentation fault in extract() when overwriting reference with itself", function () {
    expect(parser.parseCode("<?php\n$str = 'foo';\n$vars = ['var' => $str . 'bar'];\n$var = &$vars['var'];\nextract($vars);\nvar_dump($vars, $var);\n?>")).toMatchSnapshot();
  });
});

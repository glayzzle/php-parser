// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug76909.phpt
  it("Bug #76909 preg_match difference between 7.3 and < 7.3", function () {
    expect(parser.parseCode("<?php\n$data = \" domain.com\";\n$reg0 = \"/^[\\x{0100}-\\x{017f}]{1,63}$/iu\";\n$reg1 = \"/(*NO_JIT)^[\\x{0100}-\\x{017f}]{1,63}$/iu\";\n$n0 = preg_match($reg0, $data, $m0);\n$n1 = preg_match($reg1, $data, $m1);\nvar_dump($n0, $n1, count($m0), count($m1));\n?>")).toMatchSnapshot();
  });
});

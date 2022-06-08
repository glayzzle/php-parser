// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/002.phpt
  it("GMP functionality test - factorial", function () {
    expect(parser.parseCode("<?php\nfunction fact($x) {\n  if($x <= 1)\n        return 1;\n  else\n        return gmp_mul($x,fact($x-1));\n}\nprint gmp_strval(fact(1000)).\"\\n\";\n?>")).toMatchSnapshot();
  });
});

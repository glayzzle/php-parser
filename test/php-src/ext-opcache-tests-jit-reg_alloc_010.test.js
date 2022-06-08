// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_010.phpt
  it("Register Alloction 010: Missed store", function () {
    expect(parser.parseCode("<?php\nfunction foo($y) {\n    for (; $cnt < 6; $cnt++) {\n        for ($i=0; $i <.1; $i++) \n            for(;$y;);\n        [$i=$y];\n    }\n}\nfoo(null);\n?>\nDONE")).toMatchSnapshot();
  });
});

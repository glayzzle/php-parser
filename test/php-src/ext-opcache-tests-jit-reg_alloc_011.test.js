// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_011.phpt
  it("Register Alloction 011: Missed type store", function () {
    expect(parser.parseCode("<?php\nfunction foo($y) {\n    for ($cnt=0;$cnt<6;$cnt++) {\n        $i = $y;\n        for ($i=0;$i<1;)\n            for(;$i<1;)\n                for(;$i<1;$i++)\n                    for(;$y;);\n                for($i=0;$i< 1;$i++)\n                    for(;$y;);\n    }\n}\nfoo(null);\n?>\nDONE")).toMatchSnapshot();
  });
});

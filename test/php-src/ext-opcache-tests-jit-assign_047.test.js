// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_047.phpt
  it("JIT ASSIGN: incorrect narrowing to double", function () {
    expect(parser.parseCode("<?php\nfunction test(){\n\t$x = (object)['x'=>0];\n\tfor($i=0;$i<10;$i++){\n\t\t+$a;\n\t\t$a=$x->x;\n\t\t$a=7;\n\t}\n}\ntest()\n?>\nDONE")).toMatchSnapshot();
  });
});

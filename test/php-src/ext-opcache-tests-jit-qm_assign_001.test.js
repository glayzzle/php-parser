// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/qm_assign_001.phpt
  it("JIT QM_ASSIGN: 001 incorrect optimizarion", function () {
    expect(parser.parseCode("<?php\necho (1%1.5)-(1.5%1%1%-1)-1;\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_setpriority_basic.phpt
  it("pcntl_setpriority() - Basic behaviour", function () {
    expect(parser.parseCode("<?php\nvar_dump(pcntl_setpriority(-5));\n?>")).toMatchSnapshot();
  });
});

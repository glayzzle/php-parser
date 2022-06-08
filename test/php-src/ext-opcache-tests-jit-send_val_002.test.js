// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/send_val_002.phpt
  it("JIT SEND_VAL: 002 named arg ", function () {
    expect(parser.parseCode("<?php\nfunction o(){\n    var_dump(x:$x?1:0);\n}\no();\n?>")).toMatchSnapshot();
  });
});

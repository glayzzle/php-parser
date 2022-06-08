// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/pi_basic.phpt
  it("Test pi() - basic function test pi()", function () {
    expect(parser.parseCode("<?php\necho pi(), \"\\n\";\necho M_PI, \"\\n\";\n// N.B pi() ignores all specified arguments no error\n// messages are produced if arguments are spcified.\n?>")).toMatchSnapshot();
  });
});

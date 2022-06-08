// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/recv_001.phpt
  it("JIT RECV: infinite loop", function () {
    expect(parser.parseCode("<?php\nfunction test(array $args, $short_options, $long_options = null)\n{\n    echo \"okey\";\n}\ntest(array(), \"d:e\", 222, 3434);\n?>")).toMatchSnapshot();
  });
});

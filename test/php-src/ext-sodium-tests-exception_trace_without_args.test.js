// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/exception_trace_without_args.phpt
  it("SodiumException backtraces do not contain function arguments", function () {
    expect(parser.parseCode("<?php\nfunction do_memzero($x) {\n    sodium_memzero($x);\n}\n$x = 42;\ndo_memzero($x);\n?>")).toMatchSnapshot();
  });
});

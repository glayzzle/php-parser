// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/prev_error3.phpt
  it("prev - ensure we cannot pass a temporary", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass temporary variables to prev() to test behaviour\n */\nvar_dump(prev(array(1, 2)));\n?>")).toMatchSnapshot();
  });
});

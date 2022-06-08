// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_ctermid.phpt
  it("Test posix_ctermid()", function () {
    expect(parser.parseCode("<?php\n    var_dump(posix_ctermid());\n?>")).toMatchSnapshot();
  });
});

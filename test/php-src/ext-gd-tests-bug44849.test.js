// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug44849.phpt
  it("Bug #44849 (imagecolorclosesthwb is not available on Windows)", function () {
    expect(parser.parseCode("<?php\n    var_dump(function_exists('imagecolorclosesthwb'));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/array_shortcut_005.phpt
  it("Testing nested array shortcut", function () {
    expect(parser.parseCode("<?php\nprint_r([1, 2, 3, [\"foo\" => \"orange\", \"bar\" => \"apple\", \"baz\" => \"lemon\"]]);\n?>")).toMatchSnapshot();
  });
});

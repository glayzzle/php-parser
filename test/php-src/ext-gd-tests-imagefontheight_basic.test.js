// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefontheight_basic.phpt
  it("Testing imagefontheight() of GD library", function () {
    expect(parser.parseCode("<?php\nvar_dump(imagefontheight(1),imagefontheight(2),imagefontheight(3),imagefontheight(4),imagefontheight(5));\n?>")).toMatchSnapshot();
  });
});

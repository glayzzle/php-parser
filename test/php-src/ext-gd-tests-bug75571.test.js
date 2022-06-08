// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug75571.phpt
  it("Bug #75571 (Infinite loop in GIF reading causing DoS)", function () {
    expect(parser.parseCode("<?php\nvar_dump(imagecreatefromgif(__DIR__ . '/bug75571.gif'));\n?>")).toMatchSnapshot();
  });
});

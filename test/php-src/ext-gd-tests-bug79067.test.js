// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug79067.phpt
  it("Bug #79067 (gdTransformAffineCopy() may use unitialized values)", function () {
    expect(parser.parseCode("<?php\n$matrix = [1, 1, 1, 1, 1, 1];\n$src = imagecreatetruecolor(8, 8);\nvar_dump(imageaffine($src, $matrix));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72696.phpt
  it("Bug #72696 (imagefilltoborder stackoverflow on truecolor images)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(10, 10);\nimagefilltoborder($im, 0, 0, 1, -2);\n?>\n===DONE===")).toMatchSnapshot();
  });
});

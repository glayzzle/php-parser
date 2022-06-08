// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug48801-mb.phpt
  it("Bug #48801 (Problem with imagettfbbox)", function () {
    expect(parser.parseCode("<?php\n$cwd = __DIR__;\n$font = \"$cwd/Tuffy私はガラスを食べられます.ttf\";\n$bbox = imageftbbox(50, 0, $font, \"image\");\necho '(' . $bbox[0] . ', ' . $bbox[1] . \")\\n\";\necho '(' . $bbox[2] . ', ' . $bbox[3] . \")\\n\";\necho '(' . $bbox[4] . ', ' . $bbox[5] . \")\\n\";\necho '(' . $bbox[6] . ', ' . $bbox[7] . \")\\n\";\n?>")).toMatchSnapshot();
  });
});

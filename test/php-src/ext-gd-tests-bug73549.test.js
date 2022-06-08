// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73549.phpt
  it("Bug #73549 (Use after free when stream is passed to imagepng)", function () {
    expect(parser.parseCode("<?php\n$stream = fopen(__DIR__ . DIRECTORY_SEPARATOR . 'bug73549.png', 'w');\n$im = imagecreatetruecolor(8, 8);\nvar_dump(imagepng($im, $stream));\nvar_dump($stream);\n?>")).toMatchSnapshot();
  });
});

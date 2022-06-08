// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/libgd00101.phpt
  it("libgd #101 (imagecreatefromgd can crash if gdImageCreate fails)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromgd(__DIR__ . '/libgd00101.gd');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});

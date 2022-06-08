// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/libgd00086_extern.phpt
  it("libgd #86 (Possible infinite loop in imagecreatefrompng)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefrompng(__DIR__ . '/libgd00086.png');\nvar_dump($im);\n?>")).toMatchSnapshot();
  });
});

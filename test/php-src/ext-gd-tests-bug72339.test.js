// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72339.phpt
  it("Bug #72339 Integer Overflow in _gd2GetHeader() resulting in heap overflow", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . DIRECTORY_SEPARATOR . \"bug72339.gd\";\n$fh = fopen($fname, \"w\");\nfwrite($fh, \"gd2\\x00\");\nfwrite($fh, pack(\"n\", 2));\nfwrite($fh, pack(\"n\", 1));\nfwrite($fh, pack(\"n\", 1));\nfwrite($fh, pack(\"n\", 0x40));\nfwrite($fh, pack(\"n\", 2));\nfwrite($fh, pack(\"n\", 0x5AA0)); // Chunks Wide\nfwrite($fh, pack(\"n\", 0x5B00)); // Chunks Vertically\nfwrite($fh, str_repeat(\"\\x41\\x41\\x41\\x41\", 0x1000000)); // overflow data\nfclose($fh);\n$im = imagecreatefromgd2($fname);\nif ($im) {\n    imagedestroy($im);\n}\nunlink($fname);\n?>")).toMatchSnapshot();
  });
});

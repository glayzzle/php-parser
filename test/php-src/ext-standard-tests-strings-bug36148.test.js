// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug36148.phpt
  it("Bug #36148 (unpack(\"H*hex\", $data) is adding an extra character to the end of the string)", function () {
    expect(parser.parseCode("<?php\n$values = array(\"a\", \"aa\", \"aaa\", \"aaaa\");\nforeach ($values as $value) {\n    $a = pack(\"H*\", $value);\n    $b = unpack(\"H*\", $a);\n    echo $value.\": \";\n    var_dump($b);\n}\n?>")).toMatchSnapshot();
  });
});

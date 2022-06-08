// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77360.phpt
  it("Bug #77360: class_uses causes segfault", function () {
    expect(parser.parseCode("<?php\nclass foobar {}\n$str = \"foo\";\n$str .= \"bar\";\nvar_dump(class_uses($str, false));\nvar_dump(class_uses($str, false));\nvar_dump($str);\n?>")).toMatchSnapshot();
  });
});

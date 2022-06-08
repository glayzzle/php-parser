// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug71848.phpt
  it("Bug #71848 (getimagesize with $imageinfo returns false)", function () {
    expect(parser.parseCode("<?php\nvar_dump(getimagesize(__DIR__ . '/bug71848.jpg', $info));\nvar_dump(array_keys($info));\n?>")).toMatchSnapshot();
  });
});

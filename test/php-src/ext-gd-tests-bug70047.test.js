// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug70047.phpt
  it("Bug #70047 (gd_info() doesn't report WebP support)", function () {
    expect(parser.parseCode("<?php\n$info = gd_info();\nvar_dump(array_key_exists('WebP Support', $info));\nvar_dump($info['WebP Support'] === function_exists('imagewebp'));\n?>")).toMatchSnapshot();
  });
});

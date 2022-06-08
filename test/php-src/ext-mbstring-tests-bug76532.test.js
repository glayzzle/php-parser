// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug76532.phpt
  it("Bug #76532 (Integer overflow and excessive memory usage in mb_strimwidth)", function () {
    expect(parser.parseCode("<?php\n$string_to_trim = '得很幸福。有一天，一个长得很丑的老人带着一只木马来到王';\n$width = 2147483647;\nvar_dump(mb_strimwidth($string_to_trim, 0, $width));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug78338.phpt
  it("Bug #78338 (Array cross-border reading in PCRE)", function () {
    expect(parser.parseCode("<?php\n$string = hex2bin('2f5c583f3d3f223f3536ff3636ffffffff36a8a8a83636367a7a7a7a3d2aff2f0a');\npreg_match($string, $string);\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});

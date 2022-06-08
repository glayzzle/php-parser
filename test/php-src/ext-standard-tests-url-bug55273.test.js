// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug55273.phpt
  it("Bug #55273 (base64_decode() with strict rejects whitespace after pad)", function () {
    expect(parser.parseCode("<?php\nfunction test($s) {\n    $v = chunk_split(base64_encode($s));\n    $r = base64_decode($v, True);\n    var_dump($v, $r);\n}\ntest('PHP');\ntest('PH');\ntest('P');\n?>")).toMatchSnapshot();
  });
});

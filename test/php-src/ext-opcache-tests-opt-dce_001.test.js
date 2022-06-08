// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/dce_001.phpt
  it("DCE 001: Remove dead computation after constants propagation", function () {
    expect(parser.parseCode("<?php\nfunction foo(string $s1, string $s2, string $s3, string $s4) {\n    $x = ($s1 . $s2) . ($s3 . $s4);\n    $x = 0;\n    return $x;\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug46944.phpt
  it("Bug #46944 (json_encode() doesn't handle 3 byte utf8 correctly)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 1; $i <= 16; $i++) {\n    $first = 0xf0 | ($i >> 2);\n    $second = 0x8f | ($i & 3) << 4;\n    $string = sprintf(\"aa%c%c\\xbf\\xbdzz\", $first, $second);\n    echo json_encode($string) . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

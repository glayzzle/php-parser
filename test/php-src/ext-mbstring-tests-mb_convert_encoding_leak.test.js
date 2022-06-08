// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_convert_encoding_leak.phpt
  it("mb_convert_encoding() shouldn't leak keys", function () {
    expect(parser.parseCode("<?php\n$x = \"x\";\n$array = [\"foo\" . $x => \"bar\"];\nmb_convert_encoding($array, 'UTF-8', 'UTF-8');\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});

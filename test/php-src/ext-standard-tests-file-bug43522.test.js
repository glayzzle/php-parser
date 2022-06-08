// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug43522.phpt
  it("Bug #43522 (stream_get_line() eats additional characters)", function () {
    expect(parser.parseCode("<?php // 1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ\n$fp = fopen(__FILE__, 'r'); // Open self\nDoTest($fp, 'ZZZ');  // test multi-char delimiter\nDoTest($fp, \"Z\");  // test single-char delimiter\nfunction DoTest($fp, $delim) {\n    echo \"Delimiter:  \" . $delim . \"\\n\";\n    rewind($fp);\n    echo \"\\t\" . stream_get_line($fp, 10, $delim) . \"\\n\";\n    echo \"\\t\" . stream_get_line($fp, 10, $delim) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

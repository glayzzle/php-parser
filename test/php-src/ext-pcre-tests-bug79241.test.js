// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug79241.phpt
  it("Bug #79241: Segmentation fault on preg_match()", function () {
    expect(parser.parseCode("<?php\n// if \"’\" string is used directly without json_decode,\n// the issue does not reproduce\n$text = json_decode('\"’\"');\n$pattern = '/\\b/u';\n// it has to be exact two calls to preg_match(),\n// with the second call offsetting after the tick symbol\nvar_dump(preg_match($pattern, $text, $matches, 0, 0));\nvar_dump(preg_match($pattern, $text, $matches, 0, 1));\nvar_dump(preg_last_error() == PREG_BAD_UTF8_OFFSET_ERROR);\necho \"\\n\";\n$text = \"VA\\xff\"; $text .= \"LID\";\nvar_dump(preg_match($pattern, $text, $matches, 0, 4));\nvar_dump(preg_match($pattern, $text, $matches, 0, 0));\nvar_dump(preg_last_error() == PREG_BAD_UTF8_ERROR);\n?>")).toMatchSnapshot();
  });
});

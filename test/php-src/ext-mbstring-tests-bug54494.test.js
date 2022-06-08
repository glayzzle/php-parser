// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug54494.phpt
  it("Bug #54494: mb_substr() mishandles UTF-32LE and UCS-2LE", function () {
    expect(parser.parseCode("<?php\n//declare(encoding = 'UTF-8');\nmb_internal_encoding('UTF-8');\nheader('Content-Type: text/plain; charset=UTF-32LE');\n$stringOr = \"hällö wörld\\n\";\n$mode = \"UTF-32LE\";\necho \"$mode:\\n\";\n$string = mb_convert_encoding($stringOr, $mode);\n$length = mb_strlen($string, $mode);\necho \"Length: \", $length, \"\\n\";\nfor ($i=0; $i < $length; $i++) {\n  $t = unpack(\"H*\",mb_substr($string, $i, 1, $mode));\n  echo $t[1];\n}\necho \"\\n\";\n$mode = \"UCS-2LE\";\necho \"$mode:\\n\";\n$string = mb_convert_encoding($stringOr, $mode);\n$length = mb_strlen($string, $mode);\necho \"Length: \", $length, \"\\n\";\nfor ($i=0; $i < $length; $i++) {\n  $t = unpack(\"H*\",mb_substr($string, $i, 1, $mode));\n  echo $t[1];\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});

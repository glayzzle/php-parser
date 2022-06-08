// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/base64_encode_basic_002.phpt
  it("Test base64_encode() function : basic functionality - check algorithm round trips", function () {
    expect(parser.parseCode("<?php\n/*\n * Test base64_encode with single byte values.\n */\necho \"*** Testing base64_encode() : basic functionality ***\\n\";\n$values = array(\n    \"Hello World\",\n    \"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!%^&*(){}[]\",\n    \"\\n\\t Line with control characters\\r\\n\",\n    \"\\xC1\\xC2\\xC3\\xC4\\xC5\\xC6\",\n    \"\\75\\76\\77\\78\\79\\80\"\n);\necho \"\\n--- Testing base64_encode() with binary string input ---\\n\";\n$counter = 1;\nforeach($values as $str) {\n    echo \"-- Iteration $counter --\\n\";\n    $enc = base64_encode($str);\n    $dec = base64_decode($enc);\n    if ($dec != $str) {\n        echo \"TEST FAILED\\n\";\n    } else {\n        echo \"TEST PASSED\\n\";\n    }\n    $counter ++;\n}\n?>")).toMatchSnapshot();
  });
});

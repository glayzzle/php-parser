// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzencode_basic1.phpt
  it("Test gzencode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic function of gzencode\n */\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzencode() : basic functionality ***\\n\";\n// Initialise all required variables\n$smallstring = \"A small string to compress\\n\";\n// Calling gzencode() with various compression levels\n// Compressing a big string\nfor($i = -1; $i < 10; $i++) {\n    echo \"-- Compression level $i --\\n\";\n    $output = gzencode($data, $i);\n    // Clear OS byte before encode\n    $output[9] = \"\\x00\";\n    var_dump(md5($output));\n}\n// Compressing a smaller string\nfor($i = -1; $i < 10; $i++) {\n    echo \"-- Compression level $i --\\n\";\n    $output = gzencode($smallstring, $i);\n    // Clear OS byte before encode\n    $output[9] = \"\\x00\";\n    var_dump(md5($output));\n}\n// Calling gzencode() with mandatory arguments\necho \"\\n-- Testing with no specified compression level --\\n\";\nvar_dump(bin2hex(gzencode($smallstring)));\necho \"\\n-- Testing gzencode with mode specified --\\n\";\nvar_dump(bin2hex(gzencode($smallstring, -1, FORCE_GZIP)));\n?>")).toMatchSnapshot();
  });
});

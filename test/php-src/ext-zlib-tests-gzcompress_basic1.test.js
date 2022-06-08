// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzcompress_basic1.phpt
  it("Test gzcompress() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * add a comment here to say what the test is supposed to do\n */\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzcompress() : basic functionality ***\\n\";\n// Initialise all required variables\n$smallstring = \"A small string to compress\\n\";\n// Calling gzcompress() with all possible arguments\n// Compressing a big string\nfor($i = -1; $i < 10; $i++) {\n    echo \"-- Compression level $i --\\n\";\n    $output = gzcompress($data, $i);\n    var_dump(md5($output));\n    var_dump(strcmp(gzuncompress($output), $data));\n}\n// Compressing a smaller string\nfor($i = -1; $i < 10; $i++) {\n    echo \"-- Compression level $i --\\n\";\n    $output = gzcompress($smallstring, $i);\n    var_dump(bin2hex($output));\n    var_dump(strcmp(gzuncompress($output), $smallstring));\n}\n// Calling gzcompress() with mandatory arguments\necho \"\\n-- Testing with no specified compression level --\\n\";\nvar_dump( bin2hex(gzcompress($smallstring) ));\n?>")).toMatchSnapshot();
  });
});

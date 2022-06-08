// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzdeflate_basic1.phpt
  it("Test gzdeflate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * add a comment here to say what the test is supposed to do\n */\ninclude(__DIR__ . '/data.inc');\necho \"*** Testing gzdeflate() : basic functionality ***\\n\";\n// Initialise all required variables\n$smallstring = \"A small string to compress\\n\";\n// Calling gzdeflate() with all possible arguments\n// Compressing a big string\nfor($i = -1; $i < 10; $i++) {\n    echo \"-- Compression level $i --\\n\";\n    $output = gzdeflate($data, $i);\n    var_dump(md5($output));\n    var_dump(strcmp(gzinflate($output), $data));\n}\n// Compressing a smaller string\nfor($i = -1; $i < 10; $i++) {\n    echo \"-- Compression level $i --\\n\";\n    $output = gzdeflate($smallstring, $i);\n    var_dump(bin2hex($output));\n    var_dump(strcmp(gzinflate($output), $smallstring));\n}\n// Calling gzdeflate() with just mandatory arguments\necho \"\\n-- Testing with no specified compression level --\\n\";\nvar_dump( bin2hex(gzdeflate($smallstring) ));\n?>")).toMatchSnapshot();
  });
});

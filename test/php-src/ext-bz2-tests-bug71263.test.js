// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bug71263.phpt
  it("Bug #71263: fread() does not report bzip2.decompress errors", function () {
    expect(parser.parseCode("<?php\nfunction test($case) {\n    $plain = \"The quick brown fox jumps over the lazy dog.\";\n    $fn = \"bug71263.bz2\";\n    $compressed = (string) bzcompress($plain);\n    echo \"Compressed len = \", strlen($compressed), \"\\n\";\n    if ($case == 1) {\n        // Set a random byte in the middle of the compressed data\n        // --> php_bz2_decompress_filter() detects fatal error\n        // --> fread() displays empty string then garbage, no errors detected:\n        $compressed[strlen($compressed) - 15] = 'X';\n    } else if ($case == 2) {\n        // Truncate the compressed data\n        // --> php_bz2_decompress_filter() does not detect errors,\n        // --> fread() displays the empty string:\n        $compressed = substr($compressed, 0, strlen($compressed) - 20);\n    } else {\n        // Corrupted final CRC\n        // --> php_bz2_decompress_filter() detects fatal error\n        // --> fread() displays an empty string, then the correct plain text, no error detected:\n        $compressed[strlen($compressed)-2] = 'X';\n    }\n    file_put_contents($fn, $compressed);\n    $r = fopen($fn, \"r\");\n    stream_filter_append($r, 'bzip2.decompress', STREAM_FILTER_READ);\n    while (!feof($r)) {\n        $s = fread($r, 100);\n        echo \"read: \"; var_dump($s);\n    }\n    fclose($r);\n    unlink($fn);\n}\ntest(1);\ntest(2);\ntest(3);\n?>")).toMatchSnapshot();
  });
});

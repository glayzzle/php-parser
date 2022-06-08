// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78189.phpt
  it("Bug #78189 (file cache strips last character of uname hash)", function () {
    expect(parser.parseCode("<?php\n$tmpdir = sys_get_temp_dir();\n$pattern = $tmpdir . '/*/*/' . str_replace(':', '', __DIR__) . '/bug78189.php.bin';\n$filenames = glob($pattern);\nif (count($filenames)) {\n    foreach ($filenames as $filename) {\n        $part = substr($filename, strlen($tmpdir), 34);\n        if (!preg_match('~/[0-9a-f]{32}/~', $part)) {\n            echo \"invalid opcache folder: $part\\n\";\n        }\n    }\n} else {\n    echo \"no opcache file found!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug54028.phpt
  it("Bug #54028 Directory::read() cannot handle non-unicode chars properly", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"testBug54028\" . DIRECTORY_SEPARATOR;\n$dirs = array(\"a\", \"ソ\", \"ゾ\", \"şŞıİğĞ\", \"多国語\", \"王\", \"汚れて掘る\");\nmkdir($prefix);\nforeach ($dirs as $d) {\n    mkdir($prefix . $d);\n}\n$directory = dir($prefix);\nwhile (false !== ($content = $directory->read())) {\n    if (\".\" == $content || \"..\" == $content) continue;\n        printf(\"Returned (%s)\\n\", $content);\n        printf(\"Encoding: %s\\n\", mb_detect_encoding($content));\n        if ($content != get_basename_with_cp($prefix . $content, 65001, false)) {\n        echo \"Verification failed!\\n\";\n    }\n    echo \"\\n\";\n}\nforeach ($dirs as $d) {\n    rmdir($prefix . $d);\n}\nrmdir($prefix);\n?>")).toMatchSnapshot();
  });
});

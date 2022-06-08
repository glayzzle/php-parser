// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug74719.phpt
  it("Bug #74719 Allow NULL as context, testing fopen, rename, unlink, mkdir and rmdir", function () {
    expect(parser.parseCode("<?php\n// fopen\n$tmpFile = __DIR__ . \"/bug74719.tmp\";\n$h = fopen($tmpFile, \"w\", false, NULL);\nif ($h !== false) {\n    echo \"ok\\n\";\n    fclose($h);\n}\n$newTmpFile = __DIR__ . \"/bug74719_renamed.tmp\";\nif (rename($tmpFile, $newTmpFile, NULL)) {\n    echo \"ok\\n\";\n}\nif (unlink($newTmpFile, NULL)) {\n    echo \"ok\\n\";\n}\n$tmpDir = __DIR__ . \"/bug74719_dir\";\nif (mkdir($tmpDir, 0777, false, NULL)) {\n    echo \"ok\\n\";\n}\nif (rmdir($tmpDir, NULL)) {\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

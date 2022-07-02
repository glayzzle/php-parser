// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug41518.phpt
  it("Bug #41518 (file_exists() warns of open_basedir restriction on non-existent file)", function () {
    expect(parser.parseCode("<?php\n$tmp_dir = __DIR__ . \"/bug41518/\";\n@mkdir($tmp_dir);\n$tmp_file = $tmp_dir.\"/bug41418.tmp\";\ntouch($tmp_file);\nvar_dump(file_exists($tmp_file)); //exists\nvar_dump(file_exists($tmp_file.\"nosuchfile\")); //doesn't exist\n@unlink($tmp_file);\n@rmdir($tmp_dir);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

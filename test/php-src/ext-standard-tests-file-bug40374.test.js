// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug40374.phpt
  it("Bug #40374 (php_shutdown_temporary_directory() tries to free local value)", function () {
    expect(parser.parseCode("<?php\n$file = tempnam(sys_get_temp_dir(), \"test_\");\nvar_dump($file);\n$fp = fopen($file, \"wt\");\nfwrite($fp, \"test\");\nfclose($fp);\nunlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

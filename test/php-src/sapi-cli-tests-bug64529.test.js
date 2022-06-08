// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug64529.phpt
  it("Bug #64529 (Ran out of opcode space)", function () {
    expect(parser.parseCode("<?php\n$expect_executable = trim(`which expect`);\n$php_executable = getenv('TEST_PHP_EXECUTABLE');\n$script = __DIR__ . \"/expect.sh\";\nif (extension_loaded(\"readline\")) {\n    $expect_script = <<<SCRIPT\nset php_executable [lindex \\$argv 0]\nspawn \\$php_executable -n -d cli.prompt=\"\" -a\nexpect \"php >\"\nsend \"echo 'hello world';\\n\"\nsend \"\\04\"\nexpect eof\nexit\nSCRIPT;\n} else {\n    $expect_script = <<<SCRIPT\nset php_executable [lindex \\$argv 0]\nspawn \\$php_executable -n -d cli.prompt=\"\" -a\nexpect \"Interactive mode enabled\"\nsend \"<?php echo 'hello world';\\n\"\nsend \"\\04\"\nexpect eof\nexit\nSCRIPT;\n}\nfile_put_contents($script, $expect_script);\nsystem($expect_executable . \" \" . $script . \" \" . $php_executable);\n@unlink($script);\n?>")).toMatchSnapshot();
  });
});

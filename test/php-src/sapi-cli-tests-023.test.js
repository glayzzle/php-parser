// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/023.phpt
  it("HOST/PATH ini sections test for cli", function () {
    expect(parser.parseCode("<?php\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$cwd = getcwd();\n$ini_file = __DIR__ . \"/023.ini\";\nfile_put_contents($ini_file, <<<INI\n; no sections should match as cli doesn't support any\nmemory_limit = 40M\n[PATH={$cwd}]\nmemory_limit = 50M\n[PATH=/does/not/exist]\nmemory_limit = 60M\n[HOST=some_fake_host]\nmemory_limit = 70M\nINI\n);\n$desc = array(\n    0 => array(\"pipe\", \"r\"),\n    1 => array(\"pipe\", \"w\"),\n    2 => array(\"pipe\", \"w\"),\n);\n$pipes = array();\n$proc = proc_open(\"$php -c $ini_file -r 'echo ini_get(\\\"memory_limit\\\");'\", $desc, $pipes);\nif (!$proc) {\n    exit(1);\n}\nvar_dump(stream_get_contents($pipes[1]));\nvar_dump(stream_get_contents($pipes[2]));\nproc_terminate($proc);\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug74600.phpt
  it("Bug #74600 (crash (SIGSEGV) in _zend_hash_add_or_update_i)", function () {
    expect(parser.parseCode("<?php\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$ini_file = __DIR__ . \"/bug74600.ini\";\nfile_put_contents($ini_file, <<<INI\n[PHP]\\n;\\rs=\\000\\000=\\n;\\r[PATH\\000]\\000\\376 =\\n\nINI\n);\n$desc = array(\n    0 => array(\"pipe\", \"r\"),\n    1 => array(\"pipe\", \"w\"),\n    2 => array(\"pipe\", \"w\"),\n);\n$pipes = array();\n$proc = proc_open(\"$php -c $ini_file -r 'echo \\\"okey\\\";'\", $desc, $pipes);\nif (!$proc) {\n    exit(1);\n}\nvar_dump(stream_get_contents($pipes[1]));\nvar_dump(stream_get_contents($pipes[2]));\nproc_terminate($proc);\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});

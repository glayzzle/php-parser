// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug46024.phpt
  it("Bug #46024 stream_select() doesn't return the correct number", function () {
    expect(parser.parseCode("<?php\n$php = realpath(getenv('TEST_PHP_EXECUTABLE'));\n$pipes = array();\n$proc = proc_open(\n    \"$php -n -i\"\n    ,array(0 => array('pipe', 'r'), 1 => array('pipe', 'w'))\n    ,$pipes, __DIR__, array(), array()\n);\nvar_dump($proc);\nif (!$proc) {\n    exit(1);\n}\n$r = array($pipes[1]);\n$w = array($pipes[0]);\n$e = null;\n$ret = stream_select($r, $w, $e, 1);\nvar_dump($ret === (count($r) + count($w)));\nfread($pipes[1], 1);\n$r = array($pipes[1]);\n$w = array($pipes[0]);\n$e = null;\n$ret = stream_select($r, $w, $e, 1);\nvar_dump($ret === (count($r) + count($w)));\nforeach($pipes as $pipe) {\n    fclose($pipe);\n}\nproc_terminate($proc);\nif (defined('SIGKILL')) {\n    proc_terminate($proc, SIGKILL);\n} else {\n    proc_terminate($proc);\n}\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});

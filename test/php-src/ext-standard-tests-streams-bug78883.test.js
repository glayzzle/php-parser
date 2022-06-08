// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug78883.phpt
  it("Bug #78883 (fgets(STDIN) fails on Windows)", function () {
    expect(parser.parseCode("<?php\n$descriptorspec = array(\n   0 => array(\"pipe\", \"rb\"),\n   1 => array(\"pipe\", \"wb\"),\n   //2 => array(\"file\", \"stderr.txt\", \"ab\")\n);\n$pipes = [];\n$cmd = 'cmd.exe \"/c START ^\"^\" /WAIT ' . PHP_BINARY . ' -r ^\"var_dump(fgets(STDIN));\"';\n$proc = proc_open($cmd, $descriptorspec, $pipes);\nvar_dump(is_resource($proc));\n$pid = proc_get_status($proc)['pid'];\nsleep(3);\n$bug_is_present = !proc_get_status($proc)['running'];\nif (!$bug_is_present) {\n    // if the bug is not present, it will hang waiting for stdin,\n    // thus cmd is still running and we should kill it\n    shell_exec(\"taskkill /T /F /PID {$pid} 2>nul\");\n}\nfclose($pipes[0]);\nfclose($pipes[1]);\nproc_close($proc);\nvar_dump($bug_is_present);\n?>")).toMatchSnapshot();
  });
});

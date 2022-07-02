// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug69442.phpt
  it("proc_open with PTY closes incorrect file descriptor", function () {
    expect(parser.parseCode("<?php\n$cmd = '(echo \"foo\" ; exit 42;) 3>/dev/null; code=$?; echo $code >&3; exit $code';\n$descriptors = array(array(\"pty\"), array(\"pty\"), array(\"pty\"), array(\"pipe\", \"w\"));\n$pipes = array();\n$process = proc_open($cmd, $descriptors, $pipes);\nfunction read_from_pipe($pipe) {\n    $result = fread($pipe, 1000);\n    /* We can't guarantee that everything written to the pipe will be returned by a single call\n     *   to fread(), even if it was written with a single syscall and the number of bytes written\n     *   was small */\n    $again  = @fread($pipe, 1000);\n    if ($again) {\n        $result .= $again;\n    }\n    return $result;\n}\n$data0 = read_from_pipe($pipes[0]);\necho 'read from pipe 0: ';\nvar_dump($data0);\nfclose($pipes[0]);\n$data3 = read_from_pipe($pipes[3]);\necho 'read from pipe 3: ';\nvar_dump($data3);\nfclose($pipes[3]);\nproc_close($process);\n?>")).toMatchSnapshot();
  });
});

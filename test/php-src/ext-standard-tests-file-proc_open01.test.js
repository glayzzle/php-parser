// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/proc_open01.phpt
  it("proc_open() regression test 1 (proc_open() leak)", function () {
    expect(parser.parseCode("<?php\n$pipes = array(1, 2, 3);\n$orig_pipes = $pipes;\n$php = getenv('TEST_PHP_EXECUTABLE');\nif ($php === false) {\n    die(\"no php executable defined\");\n}\n$proc = proc_open(\n    \"$php -n\",\n    array(0 => array('pipe', 'r'), 1 => array('pipe', 'w')),\n    $pipes, getcwd(), array(), array()\n);\nif ($proc === false) {\n    print \"something went wrong.\\n\";\n}\nvar_dump($pipes);\nstream_set_blocking($pipes[1], FALSE);\n$test_string = \"yay!\\n\";\nfwrite($pipes[0], $test_string);\nfflush($pipes[0]);\nfclose($pipes[0]);\n$cnt = '';\n$n=0;\nfor ($left = strlen($test_string); $left > 0;) {\n    if (++$n >1000) {\n      print \"terminated after 1000 iterations\\n\";\n      break;\n    }\n    $read_fds = array($pipes[1]);\n    $write_fds = NULL;\n    $exp_fds = NULL;\n    $retval = stream_select($read_fds, $write_fds, $exp_fds, 5);\n    if ($retval === false) {\n        print \"select() failed\\n\";\n        break;\n    }\n    if ($retval === 0) {\n        print \"timed out\\n\";\n        break;\n    }\n    $buf = fread($pipes[1], 1024);\n    $cnt .= $buf;\n    $left -= strlen($buf);\n}\nvar_dump($cnt);\nfclose($pipes[1]);\nproc_close($proc);\nvar_dump($orig_pipes);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/proc_open_bug51800_right.phpt
  it("Bug #51800 proc_open on Windows hangs forever, the right way to do it", function () {
    expect(parser.parseCode("<?php\n$callee = __DIR__ . \"/process_proc_open_bug51800_right.php\";\n$php = PHP_BINARY;\n$cmd = \"$php -n $callee\";\n$status;\n$stdout = \"\";\n$stderr = \"\";\n$pipes = array();\n$descriptors = array(\n        0 => array(\"pipe\", \"rb\"),       // stdin\n        1 => array(\"pipe\", \"wb\"),       // stdout\n        2 => array(\"pipe\", \"wb\")                // stderr\n        );\n/* create the proc file */\n$r = file_put_contents($callee, '<?php\n$how_much = 10000;\n$data0 = str_repeat(\"a\", $how_much);\n$data1 = str_repeat(\"b\", $how_much);\nfwrite(STDOUT, $data0);\nfwrite(STDERR, $data1);\nexit(0);\n');\nif (!$r) {\n    die(\"couldn't create helper script '$callee'\");\n}\n$process = proc_open($cmd, $descriptors, $pipes);\nif (is_resource($process))\n{\n        fclose($pipes[0]);\n        while (!feof($pipes[1]) || !feof($pipes[2])) {\n                $stdout .= fread($pipes[1], 1024);\n                $stderr .= fread($pipes[2], 1024);\n        }\n        fclose($pipes[1]);\n        fclose($pipes[2]);\n        $status = proc_close($process);\n}\nvar_dump(array(\n        \"status\" => $status,\n        \"stdout\" => $stdout,\n        \"stderr\" => $stderr,\n), strlen($stdout), strlen($stderr));\n?>")).toMatchSnapshot();
  });
});

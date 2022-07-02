// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/proc_open_bug69900.phpt
  it("Bug #69900 Commandline input/output weird behaviour with STDIO", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$fl = __DIR__ . DIRECTORY_SEPARATOR . \"test69900.php\";\n$max_ms = 20;\n$test_content = '<?php\n$in = fopen(\"php://stdin\", \"rb\", false, stream_context_create(array(\"pipe\" => array(\"blocking\" => true))));\nwhile(!feof($in)){\n$s = fgets($in);\n    fwrite(STDOUT, $s);\n}\n?>';\nfile_put_contents($fl, $test_content);\n$descriptorspec = array(0 => array(\"pipe\", \"r\"),1 => array(\"pipe\", \"w\"));\n$pipes = array();\n$process = proc_open(PHP_BINARY.' -n -f ' . $fl, $descriptorspec, $pipes, NULL, NULL, array(\"blocking_pipes\" => true));\n$moreThanLimit = 0;\nfor($i = 0; $i < 10; $i++){\n    fwrite($pipes[0], \"hello$i\\r\\n\");\n    fflush($pipes[0]);\n    $t0 = microtime(1);\n    $s = fgets($pipes[1]);\n    $t1 = microtime(1);\n    echo $s;\n    $dt_ms = ($t1 - $t0)*1000;\n    if ($dt_ms > $max_ms) {\n        $moreThanLimit++;\n    }\n}\nfclose($pipes[0]);\nfclose($pipes[1]);\nproc_close($process);\n/* It is expected that the first call takes more than the limit.\n * Allow two more to account for possible process switch, etc. */\nif ($moreThanLimit > 3) {\n    echo \"fgets() took more than $max_ms ms $moreThanLimit times\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_sockets1.phpt
  it("proc_open() with output socketpairs", function () {
    expect(parser.parseCode("<?php\n$cmd = [\n    getenv(\"TEST_PHP_EXECUTABLE\"),\n    __DIR__ . '/proc_open_sockets1.inc'\n];\n$spec = [\n    ['null'],\n    ['socket'],\n    ['socket']\n];\n$proc = proc_open($cmd, $spec, $pipes);\nforeach ($pipes as $pipe) {\n    var_dump(stream_set_blocking($pipe, false));\n}\nwhile ($pipes) {\n    $r = $pipes;\n    $w = null;\n    $e = null;\n    if (!stream_select($r, $w, $e, null)) {\n        throw new Error(\"Select failed\");\n    }\n    foreach ($r as $i => $pipe) {\n        if (!is_resource($pipe) || feof($pipe)) {\n            unset($pipes[$i]);\n            continue;\n        }\n        $chunk = @fread($pipe, 8192);\n        if ($chunk === false) {\n            throw new Error(\"Failed to read: \" . (error_get_last()['message'] ?? 'N/A'));\n        }\n        if ($chunk !== '') {\n            echo \"PIPE {$i} << {$chunk}\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});

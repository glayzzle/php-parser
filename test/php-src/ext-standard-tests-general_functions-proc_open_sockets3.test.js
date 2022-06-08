// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_sockets3.phpt
  it("proc_open() with socket and pipe", function () {
    expect(parser.parseCode("<?php\nfunction poll($pipe, $read = true)\n{\n    $r = ($read == true) ? [$pipe] : null;\n    $w = ($read == false) ? [$pipe] : null;\n    $e = null;\n    if (!stream_select($r, $w, $e, null)) {\n        throw new \\Error(\"Select failed\");\n    }\n}\nfunction read_pipe($pipe): string\n{\n    poll($pipe);\n    if (false === ($chunk = @fread($pipe, 8192))) {\n        throw new Error(\"Failed to read: \" . (error_get_last()['message'] ?? 'N/A'));\n    }\n    return $chunk;\n}\n$cmd = [\n    getenv(\"TEST_PHP_EXECUTABLE\"),\n    __DIR__ . '/proc_open_sockets2.inc'\n];\n$spec = [\n    ['pipe', 'r'],\n    ['socket']\n];\n$proc = proc_open($cmd, $spec, $pipes);\nvar_dump(stream_set_blocking($pipes[1], false));\nprintf(\"STDOUT << %s\\n\", read_pipe($pipes[1]));\nprintf(\"STDOUT << %s\\n\", read_pipe($pipes[1]));\nfwrite($pipes[0], 'done');\nfclose($pipes[0]);\nprintf(\"STDOUT << %s\\n\", read_pipe($pipes[1]));\n?>")).toMatchSnapshot();
  });
});

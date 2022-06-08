// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/022.phpt
  it("STDIN/OUT/ERR stream type", function () {
    expect(parser.parseCode("<?php\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$socket_file = tempnam(sys_get_temp_dir(), pathinfo(__FILE__, PATHINFO_FILENAME) . '.sock');\n$test_file = __DIR__ . '/' . pathinfo(__FILE__, PATHINFO_FILENAME) . '.inc';\nif (file_exists($socket_file)) {\n    unlink($socket_file);\n}\n$socket = stream_socket_server('unix://' . $socket_file);\nvar_dump($socket);\nif (!$socket) {\n    exit(1);\n}\n$desc = array(\n    0 => $socket,\n    1 => STDOUT,\n    2 => STDERR,\n);\n$pipes = array();\n$proc = proc_open(\"$php -n \" . escapeshellarg($test_file), $desc, $pipes);\nvar_dump($proc);\nif (!$proc) {\n    exit(1);\n}\n$client_socket = stream_socket_client('unix://' . $socket_file);\nvar_dump($client_socket);\necho stream_get_contents($client_socket);\nfclose($client_socket);\nproc_terminate($proc);\nproc_close($proc);\nunlink($socket_file);\n?>")).toMatchSnapshot();
  });
});

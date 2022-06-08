// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug60106.phpt
  it("Bug#60106 (stream_socket_server silently truncates long unix socket paths)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL | E_NOTICE);\n$socket_file = \"/tmp/\" . str_repeat(\"a\", 512);\nfunction get_truncated_socket_filename($errno, $errmsg, $file, $line) {\n    global $socket_file;\n    print_r ($errmsg);\n    preg_match(\"#maximum allowed length of (\\d+) bytes#\", $errmsg, $matches);\n    $socket_file = substr($socket_file, 0, intval($matches[1]) - 1);\n}\nset_error_handler(\"get_truncated_socket_filename\", E_NOTICE);\nstream_socket_server(\"unix://\" . $socket_file);\nunlink($socket_file);\n?>")).toMatchSnapshot();
  });
});

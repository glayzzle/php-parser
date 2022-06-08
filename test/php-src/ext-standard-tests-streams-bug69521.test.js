// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug69521.phpt
  it("Bug #69521\tSegfault in gc_collect_cycles()", function () {
    expect(parser.parseCode("<?php\n$serverUri = \"tcp://127.0.0.1:74321\";\n$sock = stream_socket_server($serverUri, $errno, $errstr, STREAM_SERVER_BIND | STREAM_SERVER_LISTEN);\n$fp = stream_socket_client($serverUri, $errNumber, $errString, 5, STREAM_CLIENT_CONNECT);\n$written = 0;\n$data = \"test\";\n$written += fwrite($fp, substr($data, $written, 100));\n$link = stream_socket_accept($sock);\nfread($link, 1000);\nfwrite($link, \"Sending bug 69521\\n\");\nfclose($link);\nwhile (!feof($fp))\n{\n    $read = $write = array($fp);\n    if ($written === strlen($data))\n        $write = array();\n    $changed = stream_select($read, $write, $except, 0, 500000);\n    if (!empty($read))\n        echo fread($fp, 4);\n}\n?>")).toMatchSnapshot();
  });
});

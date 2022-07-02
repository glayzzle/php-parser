// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_context_tcp_nodelay_server.phpt
  it("stream context tcp_nodelay server", function () {
    expect(parser.parseCode("<?php\n$serverCode = <<<'CODE'\n   $ctxt = stream_context_create([\n        \"socket\" => [\n            \"tcp_nodelay\" => true\n        ]\n    ]);\n    $server = stream_socket_server(\n        \"tcp://127.0.0.1:9099\", $errno, $errstr, STREAM_SERVER_BIND | STREAM_SERVER_LISTEN, $ctxt);\n    $client = stream_socket_accept($server);\n    var_dump(socket_get_option(\n                socket_import_stream($server),\n                    SOL_TCP, TCP_NODELAY) > 0);\n    var_dump(socket_get_option(\n                socket_import_stream($client),\n                    SOL_TCP, TCP_NODELAY) > 0);\n    fclose($client);\n    fclose($server);\nCODE;\n$clientCode = <<<'CODE'\n    $test = stream_socket_client(\n        \"tcp://127.0.0.1:9099\", $errno, $errstr, 10);\n    sleep(1);\n    fclose($test);\nCODE;\ninclude sprintf(\n    \"%s/../../../openssl/tests/ServerClientTestCase.inc\",\n    __DIR__);\nServerClientTestCase::getInstance()->run($serverCode, $clientCode);\n?>")).toMatchSnapshot();
  });
});

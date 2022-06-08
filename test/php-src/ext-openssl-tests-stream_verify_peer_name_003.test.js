// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/stream_verify_peer_name_003.phpt
  it("Host name mismatch triggers error", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'stream_verify_peer_name_003.pem.tmp';\n$cacertFile = __DIR__ . DIRECTORY_SEPARATOR . 'stream_verify_peer_name_003-ca.pem.tmp';\n$serverCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $serverFlags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN;\n    $serverCtx = stream_context_create(['ssl' => [\n        'local_cert' => '%s'\n    ]]);\n    $server = stream_socket_server($serverUri, $errno, $errstr, $serverFlags, $serverCtx);\n    phpt_notify();\n    @stream_socket_accept($server, 1);\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$actualPeerName = 'stream_verify_peer_name_003';\n$clientCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $clientFlags = STREAM_CLIENT_CONNECT;\n    $clientCtx = stream_context_create(['ssl' => [\n        'verify_peer' => true,\n        'cafile' => '%s'\n    ]]);\n    phpt_wait();\n    $client = stream_socket_client($serverUri, $errno, $errstr, 1, $clientFlags, $clientCtx);\n    var_dump($client);\nCODE;\n$clientCode = sprintf($clientCode, $cacertFile);\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveCaCert($cacertFile);\n$certificateGenerator->saveNewCertAsFileWithKey($actualPeerName, $certFile);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});

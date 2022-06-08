// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug54992.phpt
  it("Bug #54992: Stream not closed and error not returned when SSL CN_match fails", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'bug54992.pem.tmp';\n$cacertFile = __DIR__ . DIRECTORY_SEPARATOR . 'bug54992-ca.pem.tmp';\n$serverCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $serverFlags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN;\n    $serverCtx = stream_context_create(['ssl' => [\n        'local_cert' => '%s',\n    ]]);\n    $server = stream_socket_server($serverUri, $errno, $errstr, $serverFlags, $serverCtx);\n    phpt_notify();\n    @stream_socket_accept($server, 1);\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$peerName = 'bug54992_actual_peer_name';\n$wrongPeerName = 'bug54992_expected_peer_name';\n$clientCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $clientFlags = STREAM_CLIENT_CONNECT;\n    $clientCtx = stream_context_create(['ssl' => [\n        'verify_peer' => true,\n        'cafile' => '%s',\n        'peer_name' => '%s',\n    ]]);\n    phpt_wait();\n    $client = stream_socket_client($serverUri, $errno, $errstr, 2, $clientFlags, $clientCtx);\n    var_dump($client);\nCODE;\n$clientCode = sprintf($clientCode, $cacertFile, $wrongPeerName);\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveCaCert($cacertFile);\n$certificateGenerator->saveNewCertAsFileWithKey($peerName, $certFile);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});

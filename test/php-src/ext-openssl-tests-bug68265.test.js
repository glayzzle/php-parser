// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug68265.phpt
  it("Bug #68265: SAN match fails with trailing DNS dot", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'bug68265.pem.tmp';\n$san = 'DNS:debs.ak-online.be., DNS:debs.ak-online.net.';\n$serverCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $serverFlags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN;\n    $serverCtx = stream_context_create(['ssl' => [\n        'local_cert' => '%s',\n    ]]);\n    $server = stream_socket_server($serverUri, $errno, $errstr, $serverFlags, $serverCtx);\n    phpt_notify();\n    stream_socket_accept($server, 30);\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$clientCode = <<<'CODE'\n    $serverUri = \"ssl://127.0.0.1:64321\";\n    $clientFlags = STREAM_CLIENT_CONNECT;\n    $clientCtx = stream_context_create(['ssl' => [\n        'verify_peer' => false,\n        'verify_peer_name' => true,\n        'peer_name' => 'debs.ak-online.net',\n    ]]);\n    phpt_wait();\n    var_dump(stream_socket_client($serverUri, $errno, $errstr, 1, $clientFlags, $clientCtx));\nCODE;\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveNewCertAsFileWithKey('test.com', $certFile, null, $san);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug62890.phpt
  it("Bug #62890 (default_socket_timeout=-1 causes connection to timeout)", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'bug62890.pem.tmp';\n$serverCode = <<<'CODE'\n    $flags = STREAM_SERVER_BIND|STREAM_SERVER_LISTEN;\n    $ctx = stream_context_create(['ssl' => [\n        'local_cert' => '%s',\n        'security_level' => 1,\n    ]]);\n    $server = stream_socket_server('tls://127.0.0.1:64321', $errno, $errstr, $flags, $ctx);\n    phpt_notify();\n    @stream_socket_accept($server, 3);\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$clientCode = <<<'CODE'\n    $flags = STREAM_CLIENT_CONNECT;\n    $ctx = stream_context_create(['ssl' => [\n        'verify_peer' => false,\n        'verify_peer_name' => false,\n        'security_level' => 1,\n    ]]);\n    phpt_wait();\n    $client = stream_socket_client(\"tls://127.0.0.1:64321\", $errno, $errstr, 3, $flags, $ctx);\n    var_dump($client);\nCODE;\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveNewCertAsFileWithKey('bug62890', $certFile);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});

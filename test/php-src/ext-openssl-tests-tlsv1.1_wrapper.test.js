// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/tlsv1.1_wrapper.phpt
  it("tlsv1.1 stream wrapper", function () {
    expect(parser.parseCode("<?php\n$certFile = __DIR__ . DIRECTORY_SEPARATOR . 'tlsv1.1_wrapper.pem.tmp';\n$serverCode = <<<'CODE'\n    $flags = STREAM_SERVER_BIND|STREAM_SERVER_LISTEN;\n    $ctx = stream_context_create(['ssl' => [\n        'local_cert' => '%s',\n        'security_level' => 0,\n    ]]);\n    $server = stream_socket_server('tlsv1.1://127.0.0.1:64321', $errno, $errstr, $flags, $ctx);\n    phpt_notify();\n    for ($i = 0; $i < (phpt_has_sslv3() ? 3 : 2); $i++) {\n        @stream_socket_accept($server, 3);\n    }\nCODE;\n$serverCode = sprintf($serverCode, $certFile);\n$clientCode = <<<'CODE'\n    $flags = STREAM_CLIENT_CONNECT;\n    $ctx = stream_context_create(['ssl' => [\n        'verify_peer' => false,\n        'verify_peer_name' => false,\n        'security_level' => 0,\n    ]]);\n    phpt_wait();\n    $client = stream_socket_client(\"tlsv1.1://127.0.0.1:64321\", $errno, $errstr, 3, $flags, $ctx);\n    var_dump($client);\n    $client = @stream_socket_client(\"sslv3://127.0.0.1:64321\", $errno, $errstr, 3, $flags, $ctx);\n    var_dump($client);\n    $client = @stream_socket_client(\"tlsv1.2://127.0.0.1:64321\", $errno, $errstr, 3, $flags, $ctx);\n    var_dump($client);\nCODE;\ninclude 'CertificateGenerator.inc';\n$certificateGenerator = new CertificateGenerator();\n$certificateGenerator->saveNewCertAsFileWithKey('tlsv1.1_wrapper', $certFile);\ninclude 'ServerClientTestCase.inc';\nServerClientTestCase::getInstance()->run($clientCode, $serverCode);\n?>")).toMatchSnapshot();
  });
});

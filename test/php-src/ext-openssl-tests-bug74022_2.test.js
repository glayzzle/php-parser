// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug74022_2.phpt
  it("Bug #74022 PHP Fast CGI crashes when reading from a pfx file with valid password, multiple extra certs", function () {
    expect(parser.parseCode("<?php\nfunction test($p12_contents, $password) {\n    openssl_pkcs12_read($p12_contents, $cert_data, $password);\n    openssl_error_string();\n    var_dump(count($cert_data['extracerts']));\n}\n$cert = file_get_contents(__DIR__ . \"/public.crt\");\n$priv = file_get_contents(__DIR__ . \"/private.crt\");\n$extracert = file_get_contents(__DIR__ . \"/cert.crt\");\n$pass = \"qwerty\";\nopenssl_pkcs12_export($cert, $p12, $priv, $pass, array('extracerts' => [$extracert, $extracert]));\ntest($p12, $pass);\n?>")).toMatchSnapshot();
  });
});

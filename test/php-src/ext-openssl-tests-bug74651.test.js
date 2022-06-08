// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug74651.phpt
  it("Bug #74651: negative-size-param (-1) in memcpy in zif_openssl_seal()", function () {
    expect(parser.parseCode("<?php\n$inputstr = file_get_contents(__DIR__ . \"/74651.pem\");\n$pub_key_id = openssl_get_publickey($inputstr);\nvar_dump($pub_key_id);\nvar_dump(openssl_seal($inputstr, $sealed, $ekeys, array($pub_key_id, $pub_key_id), 'AES-128-ECB'));\n?>")).toMatchSnapshot();
  });
});

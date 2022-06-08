// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug55259.phpt
  it("Bug #55259 (openssl extension does not get the DH parameters from DH key resource)", function () {
    expect(parser.parseCode("<?php\n$phex = 'dcf93a0b883972ec0e19989ac5a2ce310e1d37717e8d9571bb7623731866e61e' .\n        'f75a2e27898b057f9891c2e27a639c3f29b60814581cd3b2ca3986d268370557' .\n        '7d45c2e7e52dc81c7a171876e5cea74b1448bfdfaf18828efd2519f14e45e382' .\n        '6634af1949e5b535cc829a483b8a76223e5d490a257f05bdff16f2fb22c583ab';\n$dh_details = array('p' => $phex, 'g' => '2');\n$dh = openssl_pkey_new(array('dh'=> array('p' => $phex, 'g' => '2')));\nvar_dump($dh);\n$dh = openssl_pkey_new(array('dh'=> array( 'p' => hex2bin($phex), 'g' => '2')));\n$details = openssl_pkey_get_details($dh);\nvar_dump(bin2hex($details['dh']['p']));\nvar_dump($details['dh']['g']);\nvar_dump(strlen($details['dh']['pub_key']) > 0);\nvar_dump(strlen($details['dh']['priv_key']) > 0);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

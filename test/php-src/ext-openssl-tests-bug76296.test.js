// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug76296.phpt
  it("Bug #76296 openssl_pkey_get_public does not respect open_basedir", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/bug76296_openbasedir';\n$pem = 'file://' . __DIR__ . '/public.key';\nif (!is_dir($dir)) {\n    mkdir($dir);\n}\nini_set('open_basedir', $dir);\nvar_dump(openssl_pkey_get_public($pem));\n?>")).toMatchSnapshot();
  });
});

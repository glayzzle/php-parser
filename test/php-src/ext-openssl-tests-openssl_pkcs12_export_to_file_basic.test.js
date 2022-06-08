// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkcs12_export_to_file_basic.phpt
  it("openssl_pkcs12_export_to_file() tests", function () {
    expect(parser.parseCode("<?php\n$pkcsfile = __DIR__ . \"/openssl_pkcs12_export_to_file__pkcsfile.tmp\";\n$cert_file = __DIR__ . \"/public.crt\";\n$cert = file_get_contents($cert_file);\n$cert_path = \"file://\" . $cert_file;\n$priv_file = __DIR__ . \"/private.crt\";\n$priv = file_get_contents($priv_file);\n$priv_path = \"file://\" . $priv_file;\n$cert_res = openssl_x509_read($cert);\n$priv_res = openssl_pkey_get_private($priv);\n$pass = \"test\";\n$invalid = \"\";\n$invalid_path = __DIR__ . \"/invalid_path\";\n$opts = [];\nvar_dump(openssl_pkcs12_export_to_file($cert, $pkcsfile, $priv, $pass));\nvar_dump(openssl_pkcs12_read(file_get_contents($pkcsfile), $opts, $pass));\nvar_dump(openssl_pkcs12_export_to_file($cert_path, $pkcsfile, $priv_path, $pass));\nvar_dump(openssl_pkcs12_read(file_get_contents($pkcsfile), $opts, $pass));\nvar_dump(openssl_pkcs12_export_to_file($cert_res, $pkcsfile, $priv_res, $pass));\nvar_dump(openssl_pkcs12_read(file_get_contents($pkcsfile), $opts, $pass));\nvar_dump(openssl_pkcs12_export_to_file($cert_res, $pkcsfile, $priv_res, $pass, array('extracerts' => $cert)));\nvar_dump(openssl_pkcs12_read(file_get_contents($pkcsfile), $opts, $pass));\nvar_dump(openssl_pkcs12_export_to_file($invalid, $pkcsfile, $invalid, $pass));\nvar_dump(openssl_pkcs12_export_to_file($invalid_path, $pkcsfile, $invalid_path, $pass));\ntry {\n    var_dump(openssl_pkcs12_export_to_file($priv_res, $pkcsfile, $cert_res, $pass));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_csr_new_basic.phpt
  it("openssl_csr_new() tests", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$conf = array('config' => __DIR__ . DIRECTORY_SEPARATOR . 'openssl.cnf');\ntry {\n    var_dump(openssl_csr_new(array(), $a, $conf, array()));\n    var_dump($keyFailed);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// this leaks\n$a = array(1,2);\n$b = array(1,2);\nvar_dump(openssl_csr_new($a, $b, $conf));\n// options type check\n$x = openssl_pkey_new($conf);\nvar_dump(openssl_csr_new([\"countryName\" => \"DE\"], $x, $conf + [\"x509_extensions\" => 0xDEADBEEF]));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug36732.phpt
  it("Bug #36732 (add support for req_extensions in openss_csr_new and sign)", function () {
    expect(parser.parseCode("<?php\n$configargs = array(\n    \"req_extensions\" => \"v3_req\",\n    \"x509_extensions\" => \"usr_cert\",\n    \"config\" => __DIR__. DIRECTORY_SEPARATOR . \"openssl.cnf\",\n);\n$dn = array(\n    \"countryName\" => \"GB\",\n    \"stateOrProvinceName\" => \"Berkshire\",\n    \"localityName\" => \"Newbury\",\n    \"organizationName\" => \"My Company Ltd\",\n    \"commonName\" => \"Demo Cert\"\n);\n$key = openssl_pkey_new();\n$csr = openssl_csr_new($dn, $key, $configargs);\n$crt = openssl_csr_sign($csr, NULL, $key, 365, $configargs);\n$str = '';\nopenssl_csr_export($csr, $str, false);\nif (strpos($str, 'Requested Extensions:')) {\n    echo \"Ok\\n\";\n}\nopenssl_x509_export($crt, $str, false);\nif (strpos($str, 'X509v3 extensions:')) {\n    echo \"Ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

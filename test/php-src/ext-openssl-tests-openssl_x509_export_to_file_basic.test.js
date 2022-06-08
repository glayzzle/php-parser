// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_export_to_file_basic.phpt
  it("openssl_x509_export_to_file() tests", function () {
    expect(parser.parseCode("<?php\n$outfilename = __DIR__ . \"/openssl_x509_export_to_file__outfilename.tmp\";\n$cert_file = __DIR__ . \"/cert.crt\";\n$a = file_get_contents($cert_file);\n$b = \"file://\" . $cert_file;\n$c = \"invalid cert\";\n$d = openssl_x509_read($a);\n$e = array();\nvar_dump(openssl_x509_export_to_file($a, $outfilename)); // read cert as a binary string\nvar_dump(openssl_x509_export_to_file($b, $outfilename)); // read cert from a filename string\nvar_dump(openssl_x509_export_to_file($c, $outfilename)); // read an invalid cert, fails\nvar_dump(openssl_x509_export_to_file($d, $outfilename)); // read cert from a resource\ntry {\n    openssl_x509_export_to_file($e, $outfilename); // read an array, fails\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"---\\n\";\nvar_dump($exists = file_exists($outfilename));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_export_basic.phpt
  it("openssl_x509_export() tests", function () {
    expect(parser.parseCode("<?php\n$cert_file = __DIR__ . \"/cert.crt\";\n$a = file_get_contents($cert_file);\n$b = \"file://\" . $cert_file;\n$c = \"invalid cert\";\n$d = openssl_x509_read($a);\n$e = array();\nvar_dump(openssl_x509_export($a, $output));  // read cert as a binary string\nvar_dump(openssl_x509_export($b, $output2)); // read cert from a filename string\nvar_dump(openssl_x509_export($c, $output3)); // read an invalid cert, fails\nvar_dump(openssl_x509_export($d, $output4)); // read cert from a resource\ntry {\n    openssl_x509_export($e, $output5); // read an array, fails\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nif (PHP_EOL !== \"\\n\") {\n    $a = str_replace(PHP_EOL, \"\\n\", $a);\n}\nvar_dump(strcmp($output, $a));\nvar_dump(strcmp($output, $output2));\nvar_dump(strcmp($output, $output4));\nvar_dump($output3);\nvar_dump($output5);\n?>")).toMatchSnapshot();
  });
});

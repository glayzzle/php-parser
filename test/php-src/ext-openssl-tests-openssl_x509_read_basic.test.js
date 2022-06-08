// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_x509_read_basic.phpt
  it("openssl_x509_read() tests", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__ . \"/cert.crt\",\"r\");\n$a = fread($fp,8192);\nfclose($fp);\n$b = \"file://\" . __DIR__ . \"/cert.crt\";\n$c = \"invalid cert\";\n$d = openssl_x509_read($a);\n$e = array();\n$f = array($b);\nvar_dump(openssl_x509_read($a)); // read cert as a string\nvar_dump(openssl_x509_read($b)); // read cert as a filename string\nvar_dump(openssl_x509_read($c)); // read an invalid cert, fails\nvar_dump(openssl_x509_read($d)); // read cert from a resource\ntry {\n    openssl_x509_read($e); // read an array\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    openssl_x509_read($f); // read an array with the filename\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

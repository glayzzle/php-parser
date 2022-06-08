// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_cms_decrypt_error.phpt
  it("openssl_cms_decrypt() and invalid parameters", function () {
    expect(parser.parseCode("<?php\nfunction myErrorHandler($errno, $errstr, $errfile, $errline) {\n    var_dump($errstr);\n}\nset_error_handler(\"myErrorHandler\");\n$a = 1;\n$b = 1;\n$c = new stdclass;\n$d = new stdclass;\ntry {\n    var_dump(openssl_cms_decrypt($a, $b, $c, $d));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($c);\nvar_dump(openssl_cms_decrypt($b, $b, $b, $b));\nvar_dump(openssl_cms_decrypt($a, $b, \"\", \"\"));\nvar_dump(openssl_cms_decrypt($a, $b, true, false));\nvar_dump(openssl_cms_decrypt($a, $b, 0, 0));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

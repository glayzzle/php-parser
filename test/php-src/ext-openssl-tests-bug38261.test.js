// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug38261.phpt
  it("openssl key from zval leaks", function () {
    expect(parser.parseCode("<?php\n$cert = false;\nclass test {\n    function __toString() {\n        return \"test object\";\n    }\n}\n$t = new test;\nvar_dump(openssl_x509_parse(\"foo\"));\ntry {\n    var_dump(openssl_x509_parse($t));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    openssl_x509_parse([]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(openssl_x509_parse($cert));\ntry {\n    openssl_x509_parse(new stdClass);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

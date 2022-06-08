// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug68912.phpt
  it("Bug #68912 (Segmentation fault at openssl_spki_new)", function () {
    expect(parser.parseCode("<?php\n$var1=fopen(__FILE__, 'r');\n$var2=2;\n$var3=3;\ntry {\n    openssl_spki_new($var1, $var2, $var3);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

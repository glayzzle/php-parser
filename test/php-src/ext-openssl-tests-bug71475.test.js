// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/bug71475.phpt
  it("Bug #71475: openssl_seal() uninitialized memory usage", function () {
    expect(parser.parseCode("<?php\n$_ = str_repeat(\"A\", 512);\ntry {\n    openssl_seal($_, $_, $_, array_fill(0,64,0));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});

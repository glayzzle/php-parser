// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_verify_error.phpt
  it("Test error operation of password_verify()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\ntry {\n    var_dump(password_verify(\"foo\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

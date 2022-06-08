// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76477.phpt
  it("Bug #76477 (Opcache causes empty return value)", function () {
    expect(parser.parseCode("<?php\ntestString();\nfunction testString()\n{\n    $token = \"ABC\";\n    $lengthBytes = strlenb($token);\n    var_dump($lengthBytes == 0);\n}\nfunction strlenb() { return call_user_func_array(\"strlen\", func_get_args()); }\n?>")).toMatchSnapshot();
  });
});

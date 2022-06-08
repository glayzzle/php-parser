// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/send_val_001.phpt
  it("JIT SEND_VAL: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($type) {\n        $key = md5(\n            is_array($type) ? \\implode('_', $type) : $type .\n            \"ops\"\n        );\n        return $key;\n}\nvar_dump(foo(\"int\"));\nvar_dump(foo([\"int\"]));\n?>")).toMatchSnapshot();
  });
});

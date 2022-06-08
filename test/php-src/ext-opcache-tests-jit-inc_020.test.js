// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_020.phpt
  it("JIT INC: 020", function () {
    expect(parser.parseCode("<?php\nfunction foo($row) {\n    foreach ($row as $key => $value) {\n        if (is_int($key)) {\n            $key++;\n        }\n        if (isset($row[$key])) {\n            return false;\n        }\n    }\n    return true;\n}\n?>\nOK")).toMatchSnapshot();
  });
});

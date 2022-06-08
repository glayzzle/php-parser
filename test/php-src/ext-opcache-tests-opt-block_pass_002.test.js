// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/block_pass_002.phpt
  it("Block Pass 002: QM_ASSIGN and INIT_ARRAY", function () {
    expect(parser.parseCode("<?php\nfunction foo($key, $value, array $attributes) {\n    return is_array($value)\n        ? [$key, array_merge($value, $attributes)]\n        : [$value, $attributes];\n}\n?>\nOK")).toMatchSnapshot();
  });
});

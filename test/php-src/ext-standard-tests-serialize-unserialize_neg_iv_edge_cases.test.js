// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_neg_iv_edge_cases.phpt
  it("Negative parse_iv2 edge cases", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('i:-9223372036854775808;'));\nvar_dump(unserialize('i:-0;'));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_precision_002.phpt
  it("Test serialize_precision (part 2)", function () {
    expect(parser.parseCode("<?php\nvar_dump(serialize(0.1));\n?>")).toMatchSnapshot();
  });
});

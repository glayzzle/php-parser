// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_precision_001.phpt
  it("Test serialize_precision (part 1)", function () {
    expect(parser.parseCode("<?php\nvar_dump(serialize(0.1));\n?>")).toMatchSnapshot();
  });
});

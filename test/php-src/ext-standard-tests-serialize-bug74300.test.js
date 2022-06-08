// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug74300.phpt
  it("Bug #74300 (unserialize() for float nvexp part)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('d:2e+2;'));\nvar_dump(unserialize('d:2e++2;'));\n?>")).toMatchSnapshot();
  });
});

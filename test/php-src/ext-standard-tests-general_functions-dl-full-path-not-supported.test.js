// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/dl-full-path-not-supported.phpt
  it("dl() fails when trying to load full path to module", function () {
    expect(parser.parseCode("<?php\nvar_dump(dl('/path/to/module'));\n?>")).toMatchSnapshot();
  });
});

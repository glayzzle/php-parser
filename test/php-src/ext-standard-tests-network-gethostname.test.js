// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostname.phpt
  it("string gethostname(void);", function () {
    expect(parser.parseCode("<?php\nvar_dump(gethostname());\n?>")).toMatchSnapshot();
  });
});

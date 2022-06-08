// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/skeleton/tests/003.phpt
  it("test2() Basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(test2());\nvar_dump(test2('PHP'));\n?>")).toMatchSnapshot();
  });
});

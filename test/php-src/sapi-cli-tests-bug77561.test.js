// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug77561.phpt
  it("Bug #77561: Shebang line not stripped for non-primary script", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/bug77561.inc';\n?>")).toMatchSnapshot();
  });
});

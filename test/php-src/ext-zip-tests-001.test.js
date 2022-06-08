// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/001.phpt
  it("Check for zip presence", function () {
    expect(parser.parseCode("<?php\necho \"zip extension is available\";\n?>")).toMatchSnapshot();
  });
});

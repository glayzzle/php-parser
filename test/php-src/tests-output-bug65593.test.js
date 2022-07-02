// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug65593.phpt
  it("Bug #65593 (ob_start(function(){ob_start();});)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\nob_start(function(){ob_start();});\n?>")).toMatchSnapshot();
  });
});

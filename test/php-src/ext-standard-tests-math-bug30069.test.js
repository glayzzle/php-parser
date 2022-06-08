// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug30069.phpt
  it("Bug #30069 (floats as strings used in calculations do not work)", function () {
    expect(parser.parseCode("<?php\necho \".1\" * \"2\";\necho \"\\n\";\necho \"-.1\" * \"2\";\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});

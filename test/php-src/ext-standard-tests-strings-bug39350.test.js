// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug39350.phpt
  it("Bug #39350 (implode/join() crash on empty input strings)", function () {
    expect(parser.parseCode("<?php\nimplode('', array(null));\nimplode('', array(false));\nimplode('', array(\"\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

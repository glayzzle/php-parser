// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/addcslashes_005.phpt
  it("addcslashes(); function test with warning", function () {
    expect(parser.parseCode("<?php\necho addcslashes(\"zoo['.']\",\"z..A\");\n?>")).toMatchSnapshot();
  });
});

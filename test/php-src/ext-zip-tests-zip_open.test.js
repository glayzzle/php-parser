// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_open.phpt
  it("zip_open() function", function () {
    expect(parser.parseCode("<?php\n$zip = zip_open(__DIR__.\"/test_procedural.zip\");\necho is_resource($zip) ? \"OK\" : \"Failure\";\n?>")).toMatchSnapshot();
  });
});

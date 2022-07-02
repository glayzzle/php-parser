// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug61374.phpt
  it("Bug #61374: html_entity_decode tries to decode code points that don't exist in ISO-8859-1", function () {
    expect(parser.parseCode("<?php\necho html_entity_decode('&OElig;', 0, 'ISO-8859-1');\n?>")).toMatchSnapshot();
  });
});

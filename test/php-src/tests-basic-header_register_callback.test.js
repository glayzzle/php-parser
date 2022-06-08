// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/header_register_callback.phpt
  it("Test header_register_callback", function () {
    expect(parser.parseCode("<?php\nheader_register_callback(function() { echo \"sent\";});\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/http_response_code.phpt
  it("Test http_response_code basic functionality", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    // Get the current default response code\n    http_response_code(),\n    // Set a response code\n    http_response_code(201),\n    // Get the new response code\n    http_response_code()\n);\n?>")).toMatchSnapshot();
  });
});

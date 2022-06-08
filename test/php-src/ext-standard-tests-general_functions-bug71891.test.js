// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug71891.phpt
  it("Bug #71891 (header_register_callback() and register_shutdown_function())", function () {
    expect(parser.parseCode("<?php\nheader_register_callback(function () {\n    echo 'header';\n    register_shutdown_function(function () {\n        echo 'shutdown';\n    });\n});\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/closures_001.phpt
  it("register_shutdown_function() & closure", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function () { echo \"Hello World!\\n\"; });\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

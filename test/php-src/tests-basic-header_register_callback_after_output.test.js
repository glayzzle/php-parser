// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/header_register_callback_after_output.phpt
  it("Call header_register_callback() after headers sent", function () {
    expect(parser.parseCode("<?php\necho \"Send headers.\\n\";\nheader_register_callback(function() { echo \"Too late\";});\n?>")).toMatchSnapshot();
  });
});

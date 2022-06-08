// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug51827.phpt
  it("Bug #51827 (Bad warning when register_shutdown_function called with wrong num of parameters)", function () {
    expect(parser.parseCode("<?php\nfunction abc() {\n    var_dump(1);\n}\nregister_shutdown_function('timE');\nregister_shutdown_function('ABC');\nregister_shutdown_function('exploDe');\n?>")).toMatchSnapshot();
  });
});

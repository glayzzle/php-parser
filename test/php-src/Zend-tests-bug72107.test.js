// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72107.phpt
  it("Bug #72107: Segfault when using func_get_args as error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler('func_get_args');\nfunction test($a) {\n    echo $undef;\n}\ntry {\n    test(1);\n} catch (\\Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

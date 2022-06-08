// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug52339.phpt
  it("Bug #52339: SPL autoloader breaks class_exists()", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists('asdfasdf'));\nspl_autoload_register();\nvar_dump(class_exists('asdfasdf'));\n?>")).toMatchSnapshot();
  });
});

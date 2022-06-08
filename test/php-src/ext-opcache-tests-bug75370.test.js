// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75370.phpt
  it("Bug #75370 (Webserver hangs on valid PHP text)", function () {
    expect(parser.parseCode("<?php\nfunction test()\n{\n    $success = true;\n    $success = $success AND true;\n    return $success;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});

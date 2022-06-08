// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug79535.phpt
  it("Bug #79535: PHP crashes with specific opcache.optimization_level", function () {
    expect(parser.parseCode("<?php\nfunction create() {\n    $name = stdClass::class;\n    return new $name;\n}\nvar_dump(create());\n?>")).toMatchSnapshot();
  });
});

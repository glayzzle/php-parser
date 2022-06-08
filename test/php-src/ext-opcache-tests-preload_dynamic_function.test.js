// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_dynamic_function.phpt
  it("Defining a dynamic function inside the preload script", function () {
    expect(parser.parseCode("<?php\nvar_dump(function_exists(\"f\"));\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/001.phpt
  it("Phar::apiVersion", function () {
    expect(parser.parseCode("<?php\nvar_dump(Phar::apiVersion());\n?>")).toMatchSnapshot();
  });
});

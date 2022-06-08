// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/bug54682.phpt
  it("Tidy::diagnose() NULL pointer dereference", function () {
    expect(parser.parseCode("<?php\n$nx = new Tidy(\"*\");\n$nx->diagnose();\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/extensions-static.phpt
  it("phpt EXTENSIONS directive - static extension is present", function () {
    expect(parser.parseCode("<?php\nvar_dump(extension_loaded('standard'));")).toMatchSnapshot();
  });
});

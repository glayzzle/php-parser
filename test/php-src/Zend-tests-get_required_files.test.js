// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_required_files.phpt
  it("Check if get_required_files works", function () {
    expect(parser.parseCode("<?php\n$files = get_required_files();\nvar_dump($files);\n?>")).toMatchSnapshot();
  });
});

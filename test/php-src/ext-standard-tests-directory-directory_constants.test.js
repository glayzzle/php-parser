// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/directory/directory_constants.phpt
  it("Test that the Directory extension constants are correctly defined.", function () {
    expect(parser.parseCode("<?php\necho DIRECTORY_SEPARATOR;\necho \"\\n\";\necho PATH_SEPARATOR;\necho \"\\n\";\necho \"done\";\n?>")).toMatchSnapshot();
  });
});

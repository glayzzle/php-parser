// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_error_004.phpt
  it("Test ob_start() with non existent callback method.", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nClass C {\n}\n$c = new C;\nvar_dump(ob_start(array($c, 'f')));\necho \"done\"\n?>")).toMatchSnapshot();
  });
});

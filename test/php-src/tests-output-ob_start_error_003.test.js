// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_error_003.phpt
  it("Test ob_start() with object supplied but no method.", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nClass C {\n}\n$c = new C;\nvar_dump(ob_start(array($c)));\necho \"done\"\n?>")).toMatchSnapshot();
  });
});

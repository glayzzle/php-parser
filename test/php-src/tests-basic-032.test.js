// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/032.phpt
  it("Bug#18792 (no form variables after multipart/form-data)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});

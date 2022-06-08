// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cgi/tests/bug69487.phpt
  it("Bug #69487 (SAPI may truncate POST data)", function () {
    expect(parser.parseCode("<?php\nvar_dump(isset($_POST['foo']));\nvar_dump(strlen(file_get_contents('php://input')));\n?>")).toMatchSnapshot();
  });
});

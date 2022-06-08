// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/enable_post_data_reading_02.phpt
  it("enable_post_data_reading: rfc1867", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\nvar_dump(file_get_contents(\"php://input\"));\nvar_dump(file_get_contents(\"php://input\"));\n?>")).toMatchSnapshot();
  });
});

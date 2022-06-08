// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_uploaded_file_basic.phpt
  it("is_uploaded_file() function", function () {
    expect(parser.parseCode("<?php\n// uploaded file\nvar_dump(is_uploaded_file($_FILES['pics']['tmp_name']));\n// not an uploaded file\nvar_dump(is_uploaded_file($_FILES['pics']['name']));\n// not an uploaded file\nvar_dump(is_uploaded_file('random_filename.txt'));\n// not an uploaded file\nvar_dump(is_uploaded_file('__FILE__'));\n?>")).toMatchSnapshot();
  });
});

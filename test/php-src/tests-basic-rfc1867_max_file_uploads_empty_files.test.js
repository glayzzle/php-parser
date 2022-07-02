// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/rfc1867_max_file_uploads_empty_files.phpt
  it("rfc1867 max_file_uploads - empty files shouldn't count", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\nif (is_uploaded_file($_FILES[\"file1\"][\"tmp_name\"])) {\n    var_dump(file_get_contents($_FILES[\"file1\"][\"tmp_name\"]));\n}\nif (is_uploaded_file($_FILES[\"file4\"][\"tmp_name\"])) {\n    var_dump(file_get_contents($_FILES[\"file4\"][\"tmp_name\"]));\n}\n?>")).toMatchSnapshot();
  });
});

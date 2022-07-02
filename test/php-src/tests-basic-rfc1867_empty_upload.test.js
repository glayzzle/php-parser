// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/rfc1867_empty_upload.phpt
  it("rfc1867 empty upload", function () {
    expect(parser.parseCode("<?php\nvar_dump($_FILES);\nvar_dump($_POST);\nif (is_uploaded_file($_FILES[\"file1\"][\"tmp_name\"])) {\n    var_dump(file_get_contents($_FILES[\"file1\"][\"tmp_name\"]));\n}\nif (is_uploaded_file($_FILES[\"file3\"][\"tmp_name\"])) {\n    var_dump(file_get_contents($_FILES[\"file3\"][\"tmp_name\"]));\n}\n?>")).toMatchSnapshot();
  });
});

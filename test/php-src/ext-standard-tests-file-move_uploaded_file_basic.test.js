// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/move_uploaded_file_basic.phpt
  it("move_uploaded_file() function", function () {
    expect(parser.parseCode("<?php\necho \"Valid move\\n\";\n$destination1 = __FILE__ . \".tmp\";\nvar_dump(move_uploaded_file($_FILES['file1']['tmp_name'], $destination1));\n$file_contents = file_get_contents($destination1);\n$contents_matches = ($file_contents == \"abcdef123456789xxxDDDxxxDDDxxxDDD\");\nvar_dump($contents_matches);\nunlink($destination1);\necho \"\\n\";\necho \"Original name of uploaded file\\n\";\n$destination2 = __FILE__ . \".tmp2\";\nvar_dump(move_uploaded_file($_FILES['file1']['name'], $destination2));\necho \"Non-uploaded source file\\n\";\n$source = __FILE__;\n$destination3 = __FILE__ . \".tmp3\";\nvar_dump(move_uploaded_file($source, $destination3));\necho \"Valid move to existing file\\n\";\n$destination4 = __FILE__ . \".tmp4\";\n$fd = fopen($destination4, \"w\");\nfclose($fd);\nvar_dump(move_uploaded_file($_FILES['file2']['tmp_name'], $destination4));\nunlink($destination4);\n?>")).toMatchSnapshot();
  });
});

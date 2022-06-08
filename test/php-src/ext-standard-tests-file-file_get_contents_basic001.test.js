// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_basic001.phpt
  it("file_get_contents() test using basic syntax", function () {
    expect(parser.parseCode("<?php\n    $file_content = \"Bienvenue au CodeFest a Montreal\";\n    $temp_filename = __DIR__.\"/fichier_a_lire.txt\";\n    $handle = fopen($temp_filename,\"w\");\n    fwrite($handle,$file_content);\n    fclose($handle);\n    $var = file_get_contents($temp_filename);\n    echo $var;\n?>")).toMatchSnapshot();
  });
});

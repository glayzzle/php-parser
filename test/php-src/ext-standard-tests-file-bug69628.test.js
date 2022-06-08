// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug69628.phpt
  it("Bug #69628: GLOB_BRACE with multiple brackets within the braces fails", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\n// temp dirname used here\n$dirname = \"$file_path/bug69628\";\n// temp dir created\nmkdir($dirname);\n// temp files created\nfile_put_contents(\"$dirname/image.jPg\", '');\nfile_put_contents(\"$dirname/image.gIf\", '');\nfile_put_contents(\"$dirname/image.png\", '');\nsort_var_dump(glob(\"$dirname/*.{[jJ][pP][gG],[gG][iI][fF]}\", GLOB_BRACE));\nfunction sort_var_dump($results) {\n   sort($results);\n   var_dump($results);\n}\n?>")).toMatchSnapshot();
  });
});

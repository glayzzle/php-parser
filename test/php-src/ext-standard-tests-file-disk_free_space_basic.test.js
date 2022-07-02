// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/disk_free_space_basic.phpt
  it("Test disk_free_space and its alias diskfreespace() functions : basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"*** Testing with existing directory ***\\n\";\nvar_dump( disk_free_space($file_path) );\nvar_dump( diskfreespace($file_path) );\necho \"*** Testing with newly created directory ***\\n\";\n$dir = \"/disk_free_space\";\nmkdir($file_path.$dir);\necho\" \\n Free Space before writing to a file\\n\";\n$space1 =  disk_free_space($file_path.$dir);\nvar_dump( $space1 );\n$fh = fopen($file_path.$dir.\"/disk_free_space.tmp\", \"a\");\n$data = str_repeat(\"x\", 0xffff);\nfwrite($fh, $data);\nfclose($fh);\necho \"\\n Free Space after writing to a file\\n\";\n$space2 =  disk_free_space($file_path.$dir);\nvar_dump( $space2 );\nif($space1 > $space2 )\n  echo \"\\n Free Space Value Is Correct\\n\";\nelse {\n  echo \"\\n Free Space Value Is Incorrect\\n\";\n  var_dump($space1, $space2);\n}\necho \"*** Testing with Binary Input ***\\n\";\nvar_dump( disk_free_space(b\"$file_path\") );\necho\"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});

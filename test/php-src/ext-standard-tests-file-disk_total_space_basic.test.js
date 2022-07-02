// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/disk_total_space_basic.phpt
  it("Test disk_total_space() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$file_path = __DIR__;\necho \"*** Testing with normal directory ***\\n\";\nvar_dump( disk_total_space($file_path) );\necho \"*** Testing with newly created directory ***\\n\";\n$dir = \"/disk_total_space\";\nmkdir($file_path.$dir);\nvar_dump( disk_total_space($file_path.$dir) );\n$fh = fopen($file_path.$dir.\"/disk_total_space.tmp\", \"w\");\nfwrite($fh, \"Garbage Data Garbage Data Garbage Data Garbage Data Garbage Data Garbage Data Garbage Data\");\nfclose($fh);\necho\"\\nTotal Space after writing to a file\\n\";\nvar_dump( disk_total_space($file_path.$dir) );\necho\"\\n-- Done --\";\n?>")).toMatchSnapshot();
  });
});

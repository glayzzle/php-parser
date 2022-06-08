// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation10-win32.phpt
  it("Test readfile() function : variation - various invalid paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing readfile() : variation ***\\n\";\n/* An array of files */\n$names_arr = array(\n  /* Invalid args */\n  \"-1\" => -1,\n  \"TRUE\" => TRUE,\n  \"FALSE\" => FALSE,\n  \"\\\"\\\"\" => \"\",\n  \"\\\" \\\"\" => \" \",\n  \"\\\\0\" => \"\\0\",\n  \"array()\" => array(),\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\" => \"/no/such/file/dir\",\n  \"php/php\"=> \"php/php\"\n);\nforeach($names_arr as $key => $value) {\n    echo \"\\n-- Filename: $key --\\n\";\n    try {\n        readfile($value);\n    } catch (\\TypeError|\\ValueError $e) {\n        echo get_class($e) . ': ' . $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation10.phpt
  it("Test readfile() function : variation - various invalid paths", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing readfile() : variation ***\\n\";\n/* An array of files */\n$names_arr = array(\n  /* Invalid args */\n  -1,\n  TRUE,\n  FALSE,\n  \"\",\n  \" \",\n  \"\\0\",\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\",\n  \"php/php\"\n);\nfor( $i=0; $i<count($names_arr); $i++ ) {\n    $name = $names_arr[$i];\n    echo \"-- testing '$name' --\\n\";\n    try {\n        readfile($name);\n    } catch (\\TypeError|\\ValueError $e) {\n        echo get_class($e) . ': ' . $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});

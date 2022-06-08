// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_variation8.phpt
  it("Test file_get_contents() function : variation - obscure filenames", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_get_contents() : variation ***\\n\";\n/* An array of filenames */\n$names_arr = array(\n  /* Invalid args */\n  -1,\n  TRUE,\n  FALSE,\n  \"\",\n  \" \",\n  \"\\0\",\n  array(),\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\",\n  \"php/php\"\n);\nfor( $i=0; $i<count($names_arr); $i++ ) {\n    echo \"-- Iteration $i --\\n\";\n    try {\n        var_dump(file_get_contents($names_arr[$i]));\n    } catch (\\TypeError|\\ValueError $e) {\n        echo get_class($e) . ': ' . $e->getMessage(), \"\\n\";\n    }\n}\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});

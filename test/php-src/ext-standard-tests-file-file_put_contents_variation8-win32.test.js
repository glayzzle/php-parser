// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation8-win32.phpt
  it("Test file_put_contents() function : usage variation - obscure filenames", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_put_contents() : usage variation ***\\n\";\n/* An array of filenames */\n$names_arr = array(\n  \"-1\" => -1,\n  \"TRUE\" => TRUE,\n  \"FALSE\" => FALSE,\n  \"\\\"\\\"\" => \"\",\n  \"\\\" \\\"\" => \" \",\n  \"\\\\0\" => \"\\0\",\n  \"array()\" => array(),\n  /* prefix with path separator of a non existing directory*/\n  \"/no/such/file/dir\" => \"/no/such/file/dir\",\n  \"php/php\"=> \"php/php\"\n);\nforeach($names_arr as $key =>$value) {\n    echo \"\\n-- Filename: $key --\\n\";\n    try {\n        $res = file_put_contents($value, \"Some data\");\n        if ($res !== false && $res != null) {\n            echo \"$res bytes written to: '$value'\\n\";\n            unlink($value);\n        } else {\n            echo \"Failed to write data to: $key\\n\";\n        }\n    } catch (\\TypeError|\\ValueError $e) {\n        echo get_class($e) . ': ' . $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});

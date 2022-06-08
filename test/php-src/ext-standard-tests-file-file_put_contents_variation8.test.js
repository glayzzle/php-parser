// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation8.phpt
  it("Test file_put_contents() function : usage variation - obscure filenames", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_put_contents() : usage variation ***\\n\";\n$dir = __DIR__ . '/file_put_contents_variation8';\nmkdir($dir);\nchdir($dir);\n/* An array of filenames */\n$names_arr = array(\n  -1,\n  TRUE,\n  FALSE,\n  \"\",\n  \" \",\n  //this one also generates a java message rather than our own so we don't replicate php message\n  \"\\0\",\n  array(),\n  //the next 2 generate java messages so we don't replicate the php messages\n  \"/no/such/file/dir\",\n  \"php/php\"\n);\nfor( $i=0; $i<count($names_arr); $i++ ) {\n    echo \"-- Iteration $i --\\n\";\n    try {\n        $res = file_put_contents($names_arr[$i], \"Some data\");\n        if ($res !== false && $res != null) {\n            echo \"$res bytes written to: '$names_arr[$i]'\\n\";\n            unlink($names_arr[$i]);\n        } else {\n            echo \"Failed to write data to: '$names_arr[$i]'\\n\";\n        }\n    } catch (\\TypeError|\\ValueError $e) {\n        echo get_class($e) . ': ' . $e->getMessage(), \"\\n\";\n    }\n}\nrmdir($dir);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});

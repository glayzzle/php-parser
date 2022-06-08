// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation7-win32.phpt
  it("Test tempnam() function: usage variations - invalid/non-existing dir", function () {
    expect(parser.parseCode("<?php\n/* Passing invalid/non-existing args for $dir,\n     hence the unique files will be created in temporary dir */\necho \"*** Testing tempnam() with invalid/non-existing directory names ***\\n\";\n/* An array of names, which will be passed as a dir name */\n$names_arr = array(\n    /* Invalid args */\n    -1,\n    TRUE,\n    FALSE,\n    \"\",\n    \" \",\n    \"\\0\",\n    array(),\n    /* Non-existing dirs */\n    \"/no/such/file/dir\",\n    \"php\"\n);\nfor( $i=0; $i<count($names_arr); $i++ ) {\n    echo \"-- Iteration $i --\\n\";\n    try {\n        $file_name = tempnam($names_arr[$i], \"tempnam_variation3.tmp\");\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n        continue;\n    }\n    if( file_exists($file_name) ){\n        echo \"File name is => \";\n        print($file_name);\n        echo \"\\n\";\n        echo \"File permissions are => \";\n        printf(\"%o\", fileperms($file_name) );\n        echo \"\\n\";\n        echo \"File created in => \";\n        $file_dir = dirname($file_name);\n        if (realpath($file_dir) == realpath(sys_get_temp_dir()) || realpath($file_dir.\"\\\\\") == realpath(sys_get_temp_dir())) {\n            echo \"temp dir\\n\";\n        } else {\n            echo \"unknown location\\n\";\n        }\n    } else {\n        echo \"-- File is not created --\\n\";\n    }\n    unlink($file_name);\n}\n?>")).toMatchSnapshot();
  });
});

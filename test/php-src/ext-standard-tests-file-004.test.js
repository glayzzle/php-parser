// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/004.phpt
  it("file_put_contents() test", function () {
    expect(parser.parseCode("<?php\n    chdir(__DIR__);\n    for ($i = 1; $i < 6; $i++) {\n        @unlink(\"./TEST{$i}\");\n    }\n    echo \"String Test: \";\n    echo file_put_contents(\"TEST1\", file_get_contents(__FILE__)) !== FALSE ? 'OK' : 'FAIL';\n    echo \"\\n\";\n    $old_int = $int = rand();\n    $ret = file_put_contents(\"TEST2\", $int);\n    echo \"Integer Test: \";\n    if ($int === $old_int && $ret !== FALSE && md5($int) == md5_file(\"TEST2\")) {\n        echo 'OK';\n    } else {\n        echo 'FAIL';\n    }\n    echo \"\\n\";\n    $old_int = $int = time() / 1000;\n    $ret = file_put_contents(\"TEST3\", $int);\n    echo \"Float Test: \";\n    if ($int === $old_int && $ret !== FALSE && md5($int) == md5_file(\"TEST3\")) {\n        echo 'OK';\n    } else {\n        echo 'FAIL';\n    }\n    echo \"\\n\";\n    $ret = file_put_contents(\"TEST4\", __FILE__);\n    echo \"Bool Test: \";\n    if ($ret !== FALSE && md5(__FILE__) == md5_file(\"TEST4\")) {\n        echo 'OK';\n    } else {\n        echo 'FAIL';\n    }\n    echo \"\\n\";\n    $ret = @file_put_contents(\"TEST5\", $_SERVER);\n    echo \"Array Test: \";\n    if ($ret !== FALSE && @md5(implode('', $_SERVER)) == md5_file(\"TEST5\")) {\n        echo 'OK';\n    } else {\n        echo 'FAIL';\n    }\n    echo \"\\n\";\n    for ($i = 1; $i < 6; $i++) {\n        @unlink(\"./TEST{$i}\");\n    }\n?>")).toMatchSnapshot();
  });
});

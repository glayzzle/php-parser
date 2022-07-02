// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_acls/bug44859_3.phpt
  it("bug #44859 (incorrect result with NTFS ACL permissions, is_executable)", function () {
    expect(parser.parseCode("<?php\ninclude_once __DIR__ . '/common.inc';\nfix_acls();\n$iteration = array(\n    'tiny.exe' => true,\n    //'tiny.bat' => true, To be fixed in _access\n    __FILE__ => false\n);\n$i = 1;\n$path = __DIR__;\nforeach ($iteration as $file => $exp) {\n    $path = __DIR__ . '/' . $file;\n    echo 'Iteration #' . $i++ . ': ';\n    if (is_executable($path) == $exp) {\n        echo \"passed.\\n\";\n    } else {\n        var_dump(is_executable($path), $exp);\n        echo \"failed.\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});

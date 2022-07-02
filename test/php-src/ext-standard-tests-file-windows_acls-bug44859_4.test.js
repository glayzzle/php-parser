// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_acls/bug44859_4.phpt
  it("bug #44859 (incorrect result with NTFS ACL permissions, is_readable)", function () {
    expect(parser.parseCode("<?php\n$uniqueBaseName = basename(substr(__FILE__, 0, strrpos(__FILE__, '.')));\ninclude_once __DIR__ . '/common.inc';\nfix_acls();\n$iteration = array(\n    PHPT_ACL_READ => true,\n    PHPT_ACL_NONE => false,\n    PHPT_ACL_WRITE => false,\n    PHPT_ACL_WRITE|PHPT_ACL_READ => true,\n);\necho \"Testing file with relative path:\\n\";\n$i = 1;\n$path = './' . $uniqueBaseName . '_file.txt';\nforeach ($iteration as $perms => $exp) {\n    create_file($path, $perms);\n    clearstatcache(true, $path);\n    echo 'Iteration #' . $i++ . ': ';\n    if (is_readable($path) == $exp) {\n        echo \"passed.\\n\";\n    } else {\n        var_dump(is_readable($path), $exp);\n        echo \"failed.\\n\";\n    }\n    delete_file($path);\n}\necho \"Testing directory with relative path:\\n\";\n$path = $uniqueBaseName . '_dir';\n$i = 1;\nforeach ($iteration as $perms => $exp) {\n    create_dir($path, $perms);\n    clearstatcache(true, $path);\n    echo 'Iteration #' . $i++ . ': ';\n    if (is_readable($path) == $exp) {\n        echo \"passed.\\n\";\n    } else {\n        var_dump(is_readable($path), $exp);\n        echo \"failed.\\n\";\n    }\n    delete_dir($path);\n}\n?>")).toMatchSnapshot();
  });
});

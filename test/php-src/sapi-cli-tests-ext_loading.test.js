// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/ext_loading.phpt
  it("Extension loading", function () {
    expect(parser.parseCode("<?php\nfunction loadZendExt($extension) {\n    $cmd = [\n        PHP_BINARY, '-n',\n        '-dextension_dir=' . ini_get('extension_dir'),\n        '-dzend_extension=' . $extension,\n        '-r', 'echo \"Done.\";'\n    ];\n    $proc = proc_open($cmd, [['null'], ['pipe', 'w'], ['redirect', 1]], $pipes);\n    echo \"Output: \", stream_get_contents($pipes[1]), \"\\n\";\n}\necho \"Only extension name:\\n\";\nloadZendExt('opcache');\necho \"Name with file extension:\\n\";\n$name = PHP_OS_FAMILY == 'Windows' ? 'php_opcache.dll' : 'opcache.so';\nloadZendExt($name);\necho \"Absolute path:\\n\";\n$path = ini_get('extension_dir') . DIRECTORY_SEPARATOR . $name;\nloadZendExt($path);\necho \"Unknown extension name (unknown):\\n\";\nloadZendExt('unknown_ext');\necho \"Name with file extension (unknown):\\n\";\n$name = PHP_OS_FAMILY == 'Windows' ? 'php_unknown_ext.dll' : 'unknown_ext.so';\nloadZendExt($name);\necho \"Absolute path (unknown):\\n\";\n$path = ini_get('extension_dir') . DIRECTORY_SEPARATOR . $name;\nloadZendExt($path);\n?>")).toMatchSnapshot();
  });
});

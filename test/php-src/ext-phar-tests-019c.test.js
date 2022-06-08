// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/019c.phpt
  it("Phar: opendir test, recurse into", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = 'a';\n$files['b/a'] = 'b';\n$files['b/c/d'] = 'c';\n$files['bad/c'] = 'd';\ninclude 'files/phar_test.inc';\ninclude $fname;\nfunction dump($phar, $base)\n{\n    var_dump($phar . $base);\n    $dir = opendir($phar . $base);\n    if ($base == '/')\n    {\n        $base = '';\n    }\n    while (false !== ($entry = readdir($dir))) {\n        $entry = $base . '/' . $entry;\n        var_dump($entry);\n        var_dump(is_dir($phar . $entry));\n        if (is_dir($phar . $entry))\n        {\n            dump($phar, $entry);\n        }\n        else\n        {\n            var_dump(file_get_contents($phar . $entry));\n        }\n    }\n}\ndump('phar://hio', '/');\n?>")).toMatchSnapshot();
  });
});

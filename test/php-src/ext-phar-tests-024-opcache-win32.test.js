// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/024-opcache-win32.phpt
  it("Phar: phar:// include with Opcache", function () {
    expect(parser.parseCode("<?php\n$fname = dirname(__FILE__) . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\ninclude 'files/phar_test.inc';\ninclude $pname . '/a.php';\ninclude $pname . '/b.php';\ninclude $pname . '/b/c.php';\n$cache_dir = ini_get(\"opcache.file_cache\");\nif (is_dir($cache_dir)) {\n    $it = new RecursiveIteratorIterator(\n        new RecursiveDirectoryIterator($cache_dir, RecursiveDirectoryIterator::SKIP_DOTS), RecursiveIteratorIterator::CHILD_FIRST\n    );\n    foreach ($it as $fi) {\n        $fn = ($fi->isDir() ? 'rmdir' : 'unlink');\n        $fn($fi->getRealPath());\n    }\n    rmdir($cache_dir);\n}\n?>")).toMatchSnapshot();
  });
});

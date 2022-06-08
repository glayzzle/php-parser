// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/refcount1.phpt
  it("Phar: test that refcounting avoids problems with deleting a file zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->setStub(\"<?php __HALT_COMPILER(); ?>\");\n$phar->setAlias('hio');\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\nforeach ($files as $n => $file) {\n    $phar[$n] = $file;\n}\n$phar->stopBuffering();\n$fp = fopen($alias . '/b/c.php', 'wb');\nfwrite($fp, \"extra\");\nfclose($fp);\necho \"===CLOSE===\\n\";\n$b = fopen($alias . '/b/c.php', 'rb');\n$a = $phar['b/c.php'];\nvar_dump($a);\nvar_dump(fread($b, 20));\nrewind($b);\necho \"===UNLINK===\\n\";\nunlink($alias . '/b/c.php');\nvar_dump($a);\nvar_dump(fread($b, 20));\ninclude $alias . '/b/c.php';\n?>")).toMatchSnapshot();
  });
});

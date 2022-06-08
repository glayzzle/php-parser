// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/refcount1.phpt
  it("Phar: test that refcounting avoids problems with deleting a file tar-based", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://' . $fname;\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('.phar/stub.php', \"<?php __HALT_COMPILER(); ?>\");\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\n$files['.phar/alias.txt'] = 'hio';\nforeach ($files as $n => $file) {\n    $tar->addFile($n, $file);\n}\n$tar->close();\n$fp = fopen($alias . '/b/c.php', 'wb');\nfwrite($fp, \"extra\");\nfclose($fp);\necho \"===CLOSE===\\n\";\n$phar = new Phar($fname);\n$b = fopen($alias . '/b/c.php', 'rb');\n$a = $phar['b/c.php'];\nvar_dump($a);\nvar_dump(fread($b, 20));\nrewind($b);\necho \"===UNLINK===\\n\";\nunlink($alias . '/b/c.php');\nvar_dump($a);\nvar_dump(fread($b, 20));\ninclude $alias . '/b/c.php';\n?>")).toMatchSnapshot();
  });
});

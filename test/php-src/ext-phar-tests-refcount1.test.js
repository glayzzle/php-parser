// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/refcount1.phpt
  it("Phar: test that refcounting avoids problems with deleting a file", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a.php'] = '<?php echo \"This is a\\n\"; ?>';\n$files['b.php'] = '<?php echo \"This is b\\n\"; ?>';\n$files['b/c.php'] = '<?php echo \"This is b/c\\n\"; ?>';\ninclude 'files/phar_test.inc';\n$fp = fopen($pname . '/b/c.php', 'wb');\nfwrite($fp, \"extra\");\nfclose($fp);\necho \"===CLOSE===\\n\";\n$p = new Phar($fname);\n$b = fopen($pname . '/b/c.php', 'rb');\n$a = $p['b/c.php'];\nvar_dump($a);\nvar_dump(fread($b, 20));\nrewind($b);\necho \"===UNLINK===\\n\";\nunlink($pname . '/b/c.php');\nvar_dump($a);\nvar_dump(fread($b, 20));\ninclude $pname . '/b/c.php';\n?>")).toMatchSnapshot();
  });
});

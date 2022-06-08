// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/phar_stub.phpt
  it("Phar::setStub() (tar-based)", function () {
    expect(parser.parseCode("<?php\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.tar.php';\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar.php';\n$pname = 'phar://' . $fname;\n$pname2 = 'phar://' . $fname2;\n$p = new Phar($pname2);\n$p->setStub('<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>');\n$p['a'] = 'a';\n$p['b'] = 'b';\n$p['c'] = 'c';\ncopy($fname2, $fname);\n$phar = new Phar($fname);\necho $phar->getStub();\n$file = '<?php echo \"second stub\\n\"; __HALT_COMPILER(); ?>';\n//// 2\n$phar->setStub($file);\necho $phar->getStub();\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '.phartmp.php';\n$file = '<?php echo \"third stub\\n\"; __HALT_COMPILER(); ?>';\n$fp = fopen($fname3, 'wb');\nfwrite($fp, $file);\nfclose($fp);\n$fp = fopen($fname3, 'rb');\n//// 3\n$phar->setStub($fp);\nfclose($fp);\necho $phar->getStub();\n$fp = fopen($fname3, 'ab');\nfwrite($fp, 'booya');\nfclose($fp);\necho file_get_contents($fname3) . \"\\n\";\n$fp = fopen($fname3, 'rb');\n//// 4\n$phar->setStub($fp, strlen($file));\nfclose($fp);\necho $phar->getStub();\n$phar['testing'] = 'hi';\necho $phar->getStub();\n?>")).toMatchSnapshot();
  });
});

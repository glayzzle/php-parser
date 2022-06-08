// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/test_alias_unset.phpt
  it("Phar: test for the odd case where we intend to remove an archive from memory", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.php';\n$pname2 = 'phar://' . $fname2;\n$phar = new Phar($fname);\n$phar->setAlias('first');\n$phar['file1.txt'] = 'hi';\nunset($phar);\n$phar2 = new Phar($fname2);\n$phar2->setAlias('first'); // this works because there are no references to $fname open\n$phar2['file1.txt'] = 'hi';\nunset($phar2);\n$a = fopen($pname . '/file1.txt', 'r'); // this works because there are no references to $fname2 open\ntry {\n$phar2 = new Phar($fname2); // fails because references open to $fname\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\nfclose($a);\n$phar2 = new Phar($fname2); // succeeds because all refs are closed\nvar_dump($phar2->getAlias());\n$a = file_get_contents($pname . '/file1.txt'); // this fails because $fname2 ref exists\n?>")).toMatchSnapshot();
  });
});

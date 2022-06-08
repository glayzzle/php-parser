// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/security.phpt
  it("Phar: test to ensure phar.readonly cannot be circumvented", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.1.php';\n$a = new Phar($fname);\n$a->setStub('<?php\nPhar::mapPhar();\n$phar = new Phar(__FILE__);\nvar_dump($phar->isWritable());\ntry {\n$phar[\"b\"] = \"should not work!\";\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n__HALT_COMPILER();\n?>');\n$a['hi'] = 'hi';\nunset($a);\ncopy($fname, $fname2);\nPhar::unlinkArchive($fname);\nini_set('phar.readonly', 1);\ninclude $fname2;\n?>")).toMatchSnapshot();
  });
});

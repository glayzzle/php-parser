// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_nostub.phpt
  it("Phar: tar-based phar, third-party tar with no stub, Phar->getStub()", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/tar_nostub.phar.tar';\n$alias = 'phar://' . $fname;\n$fname2 = __DIR__ . '/tar_nostub.tar';\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('tar_004.php', '<?php var_dump(__FILE__);');\n$tar->addFile('internal/file/here', \"hi there!\\n\");\n$tar->close();\ntry {\n    $phar = new Phar($fname);\n    var_dump($phar->getStub());\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\ncopy($fname, $fname2);\ntry {\n    $phar = new PharData($fname2);\n    var_dump($phar->getStub());\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

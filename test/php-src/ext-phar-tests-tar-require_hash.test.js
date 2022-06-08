// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/require_hash.phpt
  it("Phar: tar-based phar, require_hash=1, no signature", function () {
    expect(parser.parseCode("<?php\nini_set('phar.require_hash', 1);\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/require_hash.phar.tar';\n$alias = 'phar://' . $fname;\n$fname2 = __DIR__ . '/require_hash.tar';\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('tar_004.php', '<?php var_dump(__FILE__);');\n$tar->addFile('internal/file/here', \"hi there!\\n\");\n$tar->addFile('.phar/stub.php', \"__HALT_COMPILER();\");\n$tar->close();\ntry {\n    $phar = new Phar($fname);\n    var_dump($phar->getStub());\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\nini_set('phar.require_hash', 0);\ntry {\n    $phar = new PharData($fname2);\n    $phar['file'] = 'hi';\n    var_dump($phar->getSignature());\n    $phar->setSignatureAlgorithm(Phar::MD5);\n    var_dump($phar->getSignature());\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

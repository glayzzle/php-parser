// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/require_hash.phpt
  it("Phar: zip-based phar, require_hash=1, no signature", function () {
    expect(parser.parseCode("<?php\nini_set('phar.require_hash', 1);\ninclude __DIR__ . '/files/zipmaker.php.inc';\n$fname = __DIR__ . '/require_hash.phar.zip';\n$alias = 'phar://' . $fname;\n$fname2 = __DIR__ . '/require_hash.zip';\n$zip = new zipmaker($fname);\n$zip->init();\n$zip->addFile('zip_001.php', '<?php var_dump(__FILE__);');\n$zip->addFile('internal/file/here', \"hi there!\\n\");\n$zip->addFile('.phar/stub.php', \"__HALT_COMPILER();\");\n$zip->close();\ntry {\n\t$phar = new Phar($fname);\n\tvar_dump($phar->getStub());\n} catch (Exception $e) {\n\techo $e->getMessage().\"\\n\";\n}\nini_set('phar.require_hash', 0);\ntry {\n\t$phar = new PharData($fname2);\n\t$phar['file'] = 'hi';\n\tvar_dump($phar->getSignature());\n\t$phar->setSignatureAlgorithm(Phar::MD5);\n\tvar_dump($phar->getSignature());\n} catch (Exception $e) {\n\techo $e->getMessage().\"\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});

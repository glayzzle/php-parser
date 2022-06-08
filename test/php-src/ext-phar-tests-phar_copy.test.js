// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_copy.phpt
  it("Phar: copy()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar.php';\n$pname = 'phar://'.$fname;\n$iname = '/file.txt';\n$ename = '/error/..';\n$p = new Phar($fname);\ntry\n{\n    $p['a'] = 'hi';\n    $p->startBuffering();\n    $p->copy('a', 'b');\n    echo file_get_contents($p['b']->getPathName());\n    $p['a']->compress(Phar::GZ);\n    $p['b']->setMetadata('a');\n    $p->copy('b', 'c');\n    $p->stopBuffering();\n    echo file_get_contents($p['c']->getPathName());\n    copy($fname, $fname2);\n    $p->copy('a', $ename);\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\nini_set('phar.readonly',1);\n$p2 = new Phar($fname2);\necho \"\\n\";\necho 'a: ' , file_get_contents($p2['a']->getPathName());\necho 'b: ' ,file_get_contents($p2['b']->getPathName());\necho 'c: ' ,file_get_contents($p2['c']->getPathName()), $p2['c']->getMetaData(), \"\\n\";\nini_set('phar.readonly', 0);\ntry {\n$p2->copy('notexisting', 'another');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$p2->copy('a', 'b');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n$p2['a']->compress(Phar::GZ);\n$p2->copy('a', 'd');\necho $p2['d']->getContent() . \"\\n\";\ntry {\n$p2->copy('d', '.phar/stub.php');\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\ntry {\n$p2->copy('.phar/stub.php', 'd');\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

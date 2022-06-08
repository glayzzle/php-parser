// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_offset_check.phpt
  it("Phar: disallow stub and alias setting via offset*() methods", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://'.$fname;\n$phar = new Phar($fname);\n$phar->setDefaultStub();\n$phar->setAlias('susan');\n$phar['a.txt'] = \"first file\\n\";\n$phar['b.txt'] = \"second file\\n\";\ntry {\n    $phar->offsetGet('.phar/stub.php');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\ntry {\n    $phar->offsetGet('.phar/alias.txt');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\ntry {\n    $phar->offsetSet('.phar/stub.php', '<?php __HALT_COMPILER(); ?>');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\nvar_dump(strlen($phar->getStub()));\ntry {\n    $phar->offsetUnset('.phar/stub.php');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\nvar_dump(strlen($phar->getStub()));\ntry {\n    $phar->offsetSet('.phar/alias.txt', 'dolly');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\nvar_dump($phar->getAlias());\ntry {\n    $phar->offsetUnset('.phar/alias.txt');\n} catch (Exception $e) {\n    echo $e->getMessage().\"\\n\";\n}\nvar_dump($phar->getAlias());\n?>")).toMatchSnapshot();
  });
});

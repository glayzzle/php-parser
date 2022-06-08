// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_setalias2.phpt
  it("Phar::setAlias() error", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\necho $phar->getAlias() . \"\\n\";\n$phar->setAlias('test');\necho $phar->getAlias() . \"\\n\";\n$b = $phar;\n$phar = new Phar(__DIR__ . '/notphar.phar');\ntry {\n    $phar->setAlias('test');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $b = new Phar(__DIR__ . '/nope.phar', 0, 'test');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

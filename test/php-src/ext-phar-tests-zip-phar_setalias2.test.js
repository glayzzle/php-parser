// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_setalias2.phpt
  it("Phar::setAlias() error zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$phar = new Phar($fname);\n$phar->setStub('<?php echo \"first stub\\n\"; __HALT_COMPILER(); ?>');\n$phar->setAlias('hio');\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\nforeach ($files as $n => $file) {\n    $phar[$n] = $file;\n}\n$phar->stopBuffering();\necho $phar->getAlias() . \"\\n\";\n$phar->setAlias('test');\necho $phar->getAlias() . \"\\n\";\n$b = $phar;\n$phar = new Phar(__DIR__ . '/notphar.phar');\ntry {\n    $phar->setAlias('test');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_setdefaultstub.phpt
  it("Phar: Phar::setDefaultStub() with and without arg", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$phar = new Phar($fname);\n$phar['a.php'] = '<php echo \"this is a\\n\"; ?>';\n$phar['b.php'] = '<php echo \"this is b\\n\"; ?>';\n$phar->setDefaultStub();\n$phar->stopBuffering();\nvar_dump($phar->getStub());\necho \"============================================================================\\n\";\necho \"============================================================================\\n\";\n$phar->setDefaultStub('my/custom/thingy.php');\n$phar->stopBuffering();\nvar_dump($phar->getStub());\necho \"============================================================================\\n\";\necho \"============================================================================\\n\";\n$phar->setDefaultStub('my/custom/thingy.php', 'the/web.php');\n$phar->stopBuffering();\nvar_dump($phar->getStub());\necho \"============================================================================\\n\";\necho \"============================================================================\\n\";\ntry {\n    $phar->setDefaultStub(str_repeat('a', 400));\n    $phar->stopBuffering();\n    var_dump(strlen($phar->getStub()));\n    $phar->setDefaultStub(str_repeat('a', 401));\n    $phar->stopBuffering();\n    var_dump(strlen($phar->getStub()));\n} catch(Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

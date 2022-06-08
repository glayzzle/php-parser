// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_begin_setstub_commit.phpt
  it("Phar::startBuffering()/setStub()/stopBuffering()", function () {
    expect(parser.parseCode("<?php\n$p = new Phar(__DIR__ . '/phar_begin_setstub_commit.phar', 0, 'phar_begin_setstub_commit.phar');\n//var_dump($p->getStub());\nvar_dump($p->isBuffering());\n$p->startBuffering();\nvar_dump($p->isBuffering());\n$p['a.php'] = '<?php var_dump(\"Hello\");';\n$p->setStub('<?php var_dump(\"First\"); Phar::mapPhar(\"phar_begin_setstub_commit.phar\"); __HALT_COMPILER(); ?>');\ninclude 'phar://phar_begin_setstub_commit.phar/a.php';\nvar_dump($p->getStub());\n$p['b.php'] = '<?php var_dump(\"World\");';\n$p->setStub('<?php var_dump(\"Second\"); Phar::mapPhar(\"phar_begin_setstub_commit.phar\"); __HALT_COMPILER();');\ninclude 'phar://phar_begin_setstub_commit.phar/b.php';\nvar_dump($p->getStub());\n$p->stopBuffering();\necho \"===COMMIT===\\n\";\nvar_dump($p->isBuffering());\ninclude 'phar://phar_begin_setstub_commit.phar/a.php';\ninclude 'phar://phar_begin_setstub_commit.phar/b.php';\nvar_dump($p->getStub());\n?>")).toMatchSnapshot();
  });
});

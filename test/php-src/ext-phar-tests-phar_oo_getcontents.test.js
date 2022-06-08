// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_getcontents.phpt
  it("Phar object: getContent()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$phar = new Phar($fname);\n$phar['a/b'] = 'file contents\nthis works';\n$phar->addEmptyDir('hi');\necho $phar['a/b']->getContent() . \"\\n\";\ntry {\necho $phar['a']->getContent(), \"\\n\";\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\ntry {\necho $phar['hi']->getContent(), \"\\n\";\n} catch (Exception $e) {\necho $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

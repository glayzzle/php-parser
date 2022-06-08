// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/alias_acrobatics.phpt
  it("Phar: alias edge cases", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.zip';\n$p = new Phar($fname);\n$p->setAlias('foo');\n$p['unused'] = 'hi';\ntry {\n$a = new Phar($fname2, 0, 'foo');\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\ncopy($fname, $fname2);\necho \"2\\n\";\ntry {\n$a = new Phar($fname2);\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\ntry {\n$b = new Phar($fname, 0, 'another');\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

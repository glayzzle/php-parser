// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/invalid_setstubalias.phpt
  it("Phar: invalid set alias or stub via array access", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$p = new Phar($fname);\ntry {\n    $p['.phar/stub.php'] = 'hi';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p['.phar/alias.txt'] = 'hi';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$p = new Phar($fname2);\ntry {\n    $p['.phar/stub.php'] = 'hi';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p['.phar/alias.txt'] = 'hi';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

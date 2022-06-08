// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/addfuncs.phpt
  it("Phar: addFile/addFromString", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->addFromString('a', 'hi');\necho file_get_contents($pname . '/a') . \"\\n\";\n$phar->addFile($pname . '/a', 'b');\necho file_get_contents($pname . '/b') . \"\\n\";\ntry {\n$phar->addFile($pname . '/a');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$phar->addFile($pname . '/a', 'a');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$phar->addFile(__DIR__ . '/does/not/exist');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$phar->addFile($pname . '/a', '.phar/stub.php');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$phar->addFromString('.phar/stub.php', 'hi');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

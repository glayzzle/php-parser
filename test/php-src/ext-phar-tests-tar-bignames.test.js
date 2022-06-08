// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bignames.phpt
  it("Phar: tar with huge filenames", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.tar';\n$fname3 = __DIR__ . '/' . basename(__FILE__, '.php') . '.3.tar';\n$fname4 = __DIR__ . '/' . basename(__FILE__, '.php') . '.4.tar';\n$pname = 'phar://' . $fname;\n$p1 = new PharData($fname);\n$p1[str_repeat('a', 100) . '/b'] = 'hi';\n$p1[str_repeat('a', 155) . '/' . str_repeat('b', 100)] = 'hi2';\ncopy($fname, $fname2);\n$p2 = new PharData($fname2);\necho $p2[str_repeat('a', 100) . '/b']->getContent() . \"\\n\";\necho $p2[str_repeat('a', 155) . '/' . str_repeat('b', 100)]->getContent() . \"\\n\";\ntry {\n    $p2[str_repeat('a', 400)] = 'yuck';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p2 = new PharData($fname3);\n    $p2[str_repeat('a', 101)] = 'yuck';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $p2 = new PharData($fname4);\n    $p2[str_repeat('b', 160) . '/' . str_repeat('a', 90)] = 'yuck';\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

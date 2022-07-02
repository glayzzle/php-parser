// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70914.phpt
  it("Bug #70914 zend_throw_or_error() format string vulnerability", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$st = $db->query('SELECT 1');\ntry {\n    $re = $st->fetchObject('%Z');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

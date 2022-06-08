// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug50728.phpt
  it("Bug #50728 (All PDOExceptions hardcode 'code' property to 0)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $a = new PDO(\"sqlite:/this/path/should/not/exist.db\");\n} catch (PDOException $e) {\n    var_dump($e->getCode());\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug71569.phpt
  it("Bug #71569 (#70389 fix causes segmentation fault)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__. DIRECTORY_SEPARATOR . 'config.inc');\ntry {\n    new PDO(PDO_MYSQL_TEST_DSN, PDO_MYSQL_TEST_USER, PDO_MYSQL_TEST_PASS, [\n        PDO::MYSQL_ATTR_INIT_COMMAND => null,\n    ]);\n} catch (PDOException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

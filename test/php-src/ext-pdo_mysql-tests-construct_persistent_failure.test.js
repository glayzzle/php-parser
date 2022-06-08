// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/construct_persistent_failure.phpt
  it("Failure when creating persistent connection", function () {
    expect(parser.parseCode("<?php\ntry {\n    $pdo = new PDO('mysql:host=localhost', 'invalid_user', 'invalid_password', [\n        PDO::ATTR_PERSISTENT => true,\n    ]);\n} catch (PDOException $e) {\n    echo \"Caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

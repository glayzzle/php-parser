// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_attr_driver_name.phpt
  it("PDO::ATTR_DRIVER_NAME", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    $db = MySQLPDOTest::factory();\n    assert(('' == $db->errorCode()) || ('00000' == $db->errorCode()));\n    $name = $db->getAttribute(PDO::ATTR_DRIVER_NAME);\n    var_dump($name);\n    if (false !== $db->setAttribute(PDO::ATTR_DRIVER_NAME, 'mydriver'))\n        printf(\"[001] Wonderful, I can create new PDO drivers!\\n\");\n    $new_name = $db->getAttribute(PDO::ATTR_DRIVER_NAME);\n    if ($name != $new_name)\n        printf(\"[002] Did we change it from '%s' to '%s'?\\n\", $name, $new_name);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});

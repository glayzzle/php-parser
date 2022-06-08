// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/PDO_getAvaliableDrivers.phpt
  it("public static array PDO::getAvailableDrivers ( void );\narray pdo_drivers ( void );", function () {
    expect(parser.parseCode("<?php\nprint((is_array(PDO::getAvailableDrivers())) ? (\"yes\") : (\"Test failed\"));\n?>")).toMatchSnapshot();
  });
});

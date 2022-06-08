// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_drivers_basic.phpt
  it("Test normal operation of PDO::getAvailableDrivers / pdo_drivers", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_array(PDO::getAvailableDrivers()));\nvar_dump(is_array(pdo_drivers()));\n?>")).toMatchSnapshot();
  });
});

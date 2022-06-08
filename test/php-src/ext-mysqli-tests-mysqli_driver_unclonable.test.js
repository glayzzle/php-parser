// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_driver_unclonable.phpt
  it("Trying to clone mysqli_driver object", function () {
    expect(parser.parseCode("<?php\n    $driver = new mysqli_driver;\n    $driver_clone = clone $driver;\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});

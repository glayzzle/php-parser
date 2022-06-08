// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug74737.phpt
  it("Bug #74737: Incorrect ReflectionFunction information for mysqli_get_client_info", function () {
    expect(parser.parseCode("<?php\n$client_info = mysqli_get_client_info();\n$rf = new ReflectionFunction('mysqli_get_client_info');\necho $rf->getNumberOfParameters();\necho PHP_EOL;\necho $rf->getNumberOfRequiredParameters();\n?>")).toMatchSnapshot();
  });
});

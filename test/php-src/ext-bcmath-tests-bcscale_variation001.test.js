// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcscale_variation001.phpt
  it("bcscale() fails with negative argument", function () {
    expect(parser.parseCode("<?php\necho bcdiv(\"20.56\", \"4\");\ntry {\n    bcscale(-4);\n} catch (\\ValueError $e) {\n    echo \\PHP_EOL . $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

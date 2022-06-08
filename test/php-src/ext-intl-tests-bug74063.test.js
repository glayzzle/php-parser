// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74063.phpt
  it("Bug #74063 (NumberFormatter fails after retrieval from session)", function () {
    expect(parser.parseCode("<?php\n$formatter = new NumberFormatter(\"en_GB\", NumberFormatter::CURRENCY);\ntry {\n    serialize($formatter);\n} catch (Exception $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

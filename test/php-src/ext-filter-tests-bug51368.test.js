// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug51368.phpt
  it("FR #51368 (php_filter_float does not allow custom thousand separators)", function () {
    expect(parser.parseCode("<?php\n$options = ['flags' => FILTER_FLAG_ALLOW_THOUSAND, 'options' => ['thousand' => ' ']];\nvar_dump(\n    filter_var('1 000', FILTER_VALIDATE_FLOAT, $options),\n    filter_var('1 234.567', FILTER_VALIDATE_FLOAT, $options)\n);\n$options = ['flags' => FILTER_FLAG_ALLOW_THOUSAND, 'options' => ['thousand' => '']];\ntry {\n    filter_var('12345', FILTER_VALIDATE_FLOAT, $options);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

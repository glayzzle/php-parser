// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/uchar/tests/bug70453.phpt
  it("Bug #70453 (IntlChar::foldCase() incorrect arguments and missing constants)", function () {
    expect(parser.parseCode("<?php\n$method = new ReflectionMethod('IntlChar', 'foldCase');\n$param = $method->getParameters()[1];\nvar_dump($param->name, $param->isOptional(), $param->isPassedByReference());\nvar_dump(IntlChar::foldCase('I', IntlChar::FOLD_CASE_DEFAULT));\nvar_dump(IntlChar::foldCase('I', IntlChar::FOLD_CASE_EXCLUDE_SPECIAL_I));\n?>")).toMatchSnapshot();
  });
});

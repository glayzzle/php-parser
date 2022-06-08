// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_getErrorCodeMessage_basic.phpt
  it("IntlTimeZone::getErrorCode/Message(): basic test", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$lsb = IntlTimeZone::createTimeZone('Europe/Lisbon');\nvar_dump($lsb->getErrorCode());\nvar_dump($lsb->getErrorMessage());\nvar_dump($lsb->getOffset(INF, 1, $a, $b));\nvar_dump($lsb->getErrorCode());\nvar_dump($lsb->getErrorMessage());\n?>")).toMatchSnapshot();
  });
});

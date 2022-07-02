// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_025.phpt
  it("zend.exception_string_param_max_len ini setting", function () {
    expect(parser.parseCode("<?php\nfunction main($arg) {\n    echo (new Exception()), \"\\n\";\n}\nvar_dump(ini_set('zend.exception_string_param_max_len', '-1'));\nvar_dump(ini_set('zend.exception_string_param_max_len', '1000001'));\nvar_dump(ini_set('zend.exception_string_param_max_len', '1000000'));\nvar_dump(ini_set('zend.exception_string_param_max_len', '20'));\nmain('short');\nmain('123456789012345678901234567890');\nvar_dump(ini_set('zend.exception_string_param_max_len', '0'));\nmain('short');\nmain('');\n?>")).toMatchSnapshot();
  });
});

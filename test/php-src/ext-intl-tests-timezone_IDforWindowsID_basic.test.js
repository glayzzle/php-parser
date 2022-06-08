// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/timezone_IDforWindowsID_basic.phpt
  it("IntlTimeZone::getIDForWindowsID basic test", function () {
    expect(parser.parseCode("<?php\n$tzs = array(\n  'Gnomeregan' => array(NULL),\n  'India Standard Time' => array(NULL),\n  'Pacific Standard Time' => array('001', 'CA', 'MX', 'US', 'ZZ'),\n  'Romance Standard Time' => array('001', 'BE', 'DK', 'ES', 'FR'),\n);\nforeach ($tzs as $tz => $regions) {\n  echo \"** $tz\\n\";\n  foreach ($regions as $region) {\n    var_dump(IntlTimeZone::getIDForWindowsID($tz, $region));\n    if (intl_get_error_code() != U_ZERO_ERROR) {\n      echo \"Error: \", intl_get_error_message(), \"\\n\";\n    }\n  }\n}\n?>")).toMatchSnapshot();
  });
});

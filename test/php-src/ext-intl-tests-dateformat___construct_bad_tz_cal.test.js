// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat___construct_bad_tz_cal.phpt
  it("IntlDateFormatter::__construct(): bad timezone or calendar", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\nini_set(\"intl.default_locale\", \"pt_PT\");\nini_set(\"date.timezone\", 'Atlantic/Azores');\nfunction print_exception($e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" . $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\ntry {\n    var_dump(new IntlDateFormatter(NULL, 0, 0, 'bad timezone'));\n} catch (IntlException $e) {\n    print_exception($e);\n}\ntry {\n    var_dump(new IntlDateFormatter(NULL, 0, 0, NULL, 3));\n} catch (IntlException $e) {\n    print_exception($e);\n}\ntry {\n    var_dump(new IntlDateFormatter(NULL, 0, 0, NULL, new stdclass));\n} catch (TypeError $e) {\n    print_exception($e);\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_offset_get_error.phpt
  it("Test timezone_offset_get() function : error conditions", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"GMT\");\n$tz = timezone_open(\"Europe/London\");\n$date = date_create(\"GMT\");\necho \"*** Testing timezone_offset_get() : error conditions ***\\n\";\necho \"\\n-- Testing timezone_offset_get() function with an invalid values for \\$object argument --\\n\";\n$invalid_obj = new stdClass();\ntry {\n    var_dump( timezone_offset_get($invalid_obj, $date) );\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n    echo \"\\n\";\n}\n$invalid_obj = 10;\ntry {\n    var_dump( timezone_offset_get($invalid_obj, $date) );\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n    echo \"\\n\";\n}\n$invalid_obj = null;\ntry {\n    var_dump( timezone_offset_get($invalid_obj, $date) );\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n    echo \"\\n\";\n}\necho \"\\n-- Testing timezone_offset_get() function with an invalid values for \\$datetime argument --\\n\";\n$invalid_obj = new stdClass();\ntry {\n    var_dump( timezone_offset_get($tz, $invalid_obj) );\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n    echo \"\\n\";\n}\n$invalid_obj = 10;\ntry {\n    var_dump( timezone_offset_get($tz, $invalid_obj) );\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n    echo \"\\n\";\n}\n$invalid_obj = null;\ntry {\n    var_dump( timezone_offset_get($tz, $invalid_obj) );\n} catch (Error $ex) {\n    var_dump($ex->getMessage());\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

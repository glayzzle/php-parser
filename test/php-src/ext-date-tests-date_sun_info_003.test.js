// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_sun_info_003.phpt
  it("Test basic date_sun_info()", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('America/Sao_Paulo');\n$sun_info = date_sun_info(strtotime(\"2015-01-12 00:00:00 UTC\"), 89.00, 1.00);\nforeach ($sun_info as $key => $elem ) {\n    echo \"$key: \" . date(\"H:i:s\", $elem) . \"\\n\";\n}\necho \"\\n\";\n$sun_info = date_sun_info(strtotime(\"2015-09-12 00:00:00 UTC\"), 89.00, 1.00);\nforeach ($sun_info as $key => $elem ) {\n    echo \"$key: \" . date(\"H:i:s\", $elem) . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

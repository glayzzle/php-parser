// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug67118.phpt
  it("Bug #67118 crashes in DateTime when this used after failed __construct", function () {
    expect(parser.parseCode("<?php\nclass mydt extends datetime\n{\n    public function __construct($time = 'now', $tz = NULL, $format = NULL)\n    {\n        if (!empty($tz) && !is_object($tz)) {\n            $tz = new DateTimeZone($tz);\n        }\n        try {\n            @parent::__construct($time, $tz);\n        } catch (Exception $e) {\n            echo \"Bad date\" . $this->format(\"Y\") . \"\\n\";\n        }\n    }\n};\nnew mydt(\"Funktionsansvarig rådgivning och juridik\", \"UTC\");\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug78139.phpt
  it("Bug #78139 (timezone_open accepts invalid timezone string argument)", function () {
    expect(parser.parseCode("<?php\n$strings = [\n\t\"x\",\n\t\"x UTC\",\n\t\"xx UTC\",\n\t\"xUTC\",\n\t\"UTCx\",\n\t\"UTC xx\",\n];\nforeach ($strings as $string)\n{\n\techo \"Parsing '{$string}':\\n\";\n\t$tz = timezone_open($string);\n\tvar_dump($tz);\n\ttry {\n\t\t$tz = new \\DateTimeZone($string);\n\t} catch (Exception $e) {\n\t\techo $e->getMessage(), \"\\n\";\n\t}\n\techo \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timezone_identifiers_list_wrong_constructor.phpt
  it("timezone_identifiers_list: ValueError when timezoneGroup is DateTimeZone::PER_COUNTRY", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(timezone_identifiers_list(DateTimeZone::PER_COUNTRY));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(timezone_identifiers_list(DateTimeZone::PER_COUNTRY, 'A'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

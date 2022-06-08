// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/internal_parent/missing_return_type.phpt
  it("Test that a notice is emitted when the tentative return type of the overridden method is omitted", function () {
    expect(parser.parseCode("<?php\nclass MyDateTimeZone extends DateTimeZone\n{\n    public static function listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null)\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});

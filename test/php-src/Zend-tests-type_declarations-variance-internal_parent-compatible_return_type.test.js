// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/internal_parent/compatible_return_type.phpt
  it("Test that no notice is emitted when the return type/value of the overriding method is compatible with the tentative return type/value of the overridden method", function () {
    expect(parser.parseCode("<?php\nclass MyDateTimeZone extends DateTimeZone\n{\n    public static function listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null): array\n    {\n        return [];\n    }\n}\nvar_dump(MyDateTimeZone::listIdentifiers());\n?>")).toMatchSnapshot();
  });
});

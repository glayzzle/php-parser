// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73746.phpt
  it("Bug #73746 (Method that returns string returns UNKNOWN:0 instead)", function () {
    expect(parser.parseCode("<?php\nnamespace Core\\Bundle\\Service\\Property\\Room\\Rooms;\nclass CountryMapping\n{\n    const CZ = 'CZ';\n    const EN = 'EN';\n    public function get(string $countryIsoCode = null) : string // Works correctly if return type is removed\n    {\n        switch (strtoupper($countryIsoCode)) {\n        case 'CZ':\n        case 'SK':\n            return self::CZ; // Works correctly if changed to CountryMapping::CZ\n        default:\n            return self::EN; // Works correctly if changed to CountryMapping::EN\n        }\n    }\n}\n$mapping = new CountryMapping();\nvar_dump($mapping->get('CZ'));\n?>")).toMatchSnapshot();
  });
});

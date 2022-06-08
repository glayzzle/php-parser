// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeZone_getLocation.phpt
  it("Test DateTimeZone::getLocation()", function () {
    expect(parser.parseCode("<?php\n$countryCode = array(\"??\");\n$countryCodeTest = array(\"AU\", \"CA\", \"ET\", \"AF\", \"US\", \"KZ\", \"AM\");\nforeach (DateTimeZone::listAbbreviations() as $value) {\n    if (NULL != $value[0]['timezone_id']) {\n        $timeZone = new DateTimeZone($value[0]['timezone_id']);\n        $timeZoneArray = $timeZone->getLocation();\n        if (false === $timeZoneArray) {\n            continue;\n        }\n        if (!in_array($timeZoneArray['country_code'], $countryCode) && NULL != $timeZoneArray['country_code']) {\n            array_push($countryCode, $timeZoneArray['country_code']);\n            if(in_array($timeZoneArray['country_code'], $countryCodeTest)){\n                print_r($timeZoneArray);\n            }\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug66985.phpt
  it("Bug #66985 (Some timezones are no longer valid in PHP 5.5.10)", function () {
    expect(parser.parseCode("<?php\n$zones = array(\n    \"CST6CDT\", \"Cuba\", \"Egypt\", \"Eire\", \"EST5EDT\", \"Factory\", \"GB-Eire\",\n    \"GMT0\", \"Greenwich\", \"Hongkong\", \"Iceland\", \"Iran\", \"Israel\", \"Jamaica\",\n    \"Japan\", \"Kwajalein\", \"Libya\", \"MST7MDT\", \"Navajo\", \"NZ-CHAT\", \"Poland\",\n    \"Portugal\", \"PST8PDT\", \"Singapore\", \"Turkey\", \"Universal\", \"W-SU\",\n    \"UTC\", \"GMT\", \"GMT+0100\", \"-0230\",\n);\nforeach ( $zones as $zone )\n{\n    $d = new DateTimeZone( $zone );\n    print_r($d);\n}\n?>")).toMatchSnapshot();
  });
});

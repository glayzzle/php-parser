// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug74652.phpt
  it("Test for bug #74652: Incomplete dates", function () {
    expect(parser.parseCode("<?php\n$formats = [\n    '2017-03-25 10:52:09',\n    '2017-03-25 10:52',\n    '2017-03-25 10am',\n    '2017-03-25',\n    '2017-03',\n    '2017.042',\n    '2017043',\n];\nforeach ( $formats as $format )\n{\n    $dt = new DateTimeImmutable( $format );\n    echo $dt->format( 'Y-m-d H:i:s' ), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

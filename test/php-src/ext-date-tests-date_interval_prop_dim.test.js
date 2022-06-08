// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_interval_prop_dim.phpt
  it("Test DateInterval props with dimension handling", function () {
    expect(parser.parseCode("<?php\nclass Z extends DateInterval{}\n$z = new Z('P2Y4DT6H8M');\n$i = 0;\n$z->prop[1]=10;\nwhile ($i < 1026) {\n    $z->prop[$i] = $i;\n    $i++;\n}\n?>\n==NOCRASH==")).toMatchSnapshot();
  });
});

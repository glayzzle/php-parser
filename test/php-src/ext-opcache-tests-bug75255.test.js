// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75255.phpt
  it("Bug #75255 (Request hangs and not finish)", function () {
    expect(parser.parseCode("<?php\nfunction generatePlanImage() {\n    if ($abc > 5) {\n        $abc = 5;\n    }\n    for ($row = 0; $row < $abc; $row++) {\n        for ($col = 0; $col < $numCols; $col++) {\n            getPossibleRatio($abc);\n        }\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});

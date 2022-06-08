// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75681.phpt
  it("Bug #75681: Warning: Narrowing occurred during type inference (specific case)", function () {
    expect(parser.parseCode("<?php\nfunction foobar()\n{\n    do {\n        foreach ($a as $i => $_) {\n            $a[$i][0] += 1;\n        }\n        $a[] = array(0, 0);\n    } while ($x !== false);\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});

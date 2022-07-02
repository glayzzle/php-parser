// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug76778.phpt
  it("Bug #76778 (array_reduce leaks memory if callback throws exception)", function () {
    expect(parser.parseCode("<?php\ntry {\n    array_reduce(\n        [1],\n        function ($carry, $item) {\n            throw new Exception;\n        },\n        range(1, 3)\n    );\n} catch (Exception $e) {\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});

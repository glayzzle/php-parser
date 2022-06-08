// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_007.phpt
  it("Incorrect CFG/SSA construction for SWITCH with few identical successors", function () {
    expect(parser.parseCode("<?php\nfunction render($properties) {\n    foreach ($properties as $key => $value) {\n        switch ($key) {\n            case 'Trapped':\n                if ($value == null) {\n                    $docInfo->$key = 1;\n                }\n            case 'CreationDate':\n            case 'ModDate':\n                $docInfo->$key = 2;\n                break;\n        }\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});

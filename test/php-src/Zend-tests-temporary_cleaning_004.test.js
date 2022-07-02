// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_004.phpt
  it("Temporary leak with switch", function () {
    expect(parser.parseCode("<?php\nfunction ops() {\n    throw new Exception();\n}\n$a = [new stdClass, new stdClass];\nswitch ($a[0]) {\n    case false:\n    break;\n    default:\n        try {\n            $x = 2;\n            $y = new stdClass;\n            while ($x-- && new stdClass) {\n                $r = [$x] + ($y ? ((array) $x) + [2] : ops());\n                $y = (array) $y;\n            }\n        } catch (Exception $e) {\n        }\n}\ntry {\n    switch ($a[0]) {\n        case false:\n        break;\n        default:\n            $x = 2;\n            $y = new stdClass;\n            while ($x-- && new stdClass) {\n                $r = [$x] + ($y ? ((array) $x) + [2] : ops());\n                $y = (array) $y;\n            }\n    }\n} catch (Exception $e) {\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});

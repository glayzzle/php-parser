// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_005.phpt
  it("Temporary leak with foreach", function () {
    expect(parser.parseCode("<?php\nfunction ops() {\n    throw new Exception();\n}\n$a = [new stdClass, new stdClass];\nforeach ([$a, [new stdClass]] as $b) {\n    switch ($b[0]) {\n        case false:\n        break;\n        default:\n            try {\n                $x = 2;\n                $y = new stdClass;\n                while ($x-- && new stdClass) {\n                    $r = [$x] + ($y ? ((array) $x) + [2] : ops());\n                    $y = (array) $y;\n                }\n            } catch (Exception $e) {\n            }\n    }\n}\nforeach ([$a, [new stdClass]] as $b) {\n    try {\n        switch ($b[0]) {\n            case false:\n            break;\n            default:\n                $x = 2;\n                $y = new stdClass;\n                while ($x-- && new stdClass) {\n                    $r = [$x] + ($y ? ((array) $x) + [2] : ops());\n                    $y = (array) $y;\n                }\n        }\n    } catch (Exception $e) {\n    }\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});

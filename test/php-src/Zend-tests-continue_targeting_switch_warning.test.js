// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/continue_targeting_switch_warning.phpt
  it("Warning on continue targeting switch", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    switch ($foo) {\n        case 0:\n            continue; // INVALID\n        case 1:\n            break;\n    }\n    while ($foo) {\n        switch ($bar) {\n            case 0:\n                continue; // INVALID\n            case 1:\n                continue 2;\n            case 2:\n                break;\n        }\n    }\n    switch ($bar) {\n        case 0:\n            while ($xyz) {\n                continue 2; // INVALID\n            }\n        case 1:\n            while ($xyz) {\n                continue;\n            }\n        case 2:\n            while ($xyz) {\n                break 2;\n            }\n    }\n    while ($foo) {\n        switch ($bar) {\n            case 0:\n                while ($xyz) {\n                    continue 2; // INVALID\n                }\n            case 1:\n                while ($xyz) {\n                    continue 3;\n                }\n            case 2:\n                while ($xyz) {\n                    break 2;\n                }\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});

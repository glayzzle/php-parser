// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/003.phpt
  it("Simple Switch Test", function () {
    expect(parser.parseCode("<?php\n$a=1;\nswitch($a) {\n    case 0:\n        echo \"bad\";\n        break;\n    case 1:\n        echo \"good\";\n        break;\n    default:\n        echo \"bad\";\n        break;\n}\n?>")).toMatchSnapshot();
  });
});

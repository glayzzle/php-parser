// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/001.phpt
  it("Basic match expression functionality test", function () {
    expect(parser.parseCode("<?php\nfunction wordify($x) {\n    return match ($x) {\n        0 => 'Zero',\n        1 => 'One',\n        2 => 'Two',\n        3 => 'Three',\n        4 => 'Four',\n        5 => 'Five',\n        6 => 'Six',\n        7 => 'Seven',\n        8 => 'Eight',\n        9 => 'Nine',\n    };\n}\nfor ($i = 0; $i <= 9; $i++) {\n    print wordify($i) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

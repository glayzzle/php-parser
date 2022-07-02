// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/004.phpt
  it("Match expression with true as expression", function () {
    expect(parser.parseCode("<?php\nfunction get_range($i) {\n    return match (true) {\n        $i >= 50 => '50+',\n        $i >= 40 => '40-50',\n        $i >= 30 => '30-40',\n        $i >= 20 => '20-30',\n        $i >= 10 => '10-20',\n        default => '0-10',\n    };\n}\necho get_range(22) . \"\\n\";\necho get_range(0) . \"\\n\";\necho get_range(59) . \"\\n\";\necho get_range(13) . \"\\n\";\necho get_range(39) . \"\\n\";\necho get_range(40) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});

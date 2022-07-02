// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45147.phpt
  it("Bug #45147 (unexpected T_ENDFOR)", function () {
    expect(parser.parseCode("<?php for ($i = 0; $i == 0; $i++): ?>\n        <?php if (true): ?>#<?php else: ?>#<?php endif; ?>\n<?php endfor; ?>")).toMatchSnapshot();
  });
});

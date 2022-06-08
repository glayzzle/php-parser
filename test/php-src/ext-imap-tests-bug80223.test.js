// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80223.phpt
  it("Bug #80223 (imap_mail_compose() leaks envelope on malformed bodies)", function () {
    expect(parser.parseCode("<?php\ntry {\n    imap_mail_compose([], []);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    imap_mail_compose([], [1]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\ntry {\n    imap_mail_compose([], [[]]);\n} catch (\\ValueError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

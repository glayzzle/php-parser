// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_ssl_connect_error.phpt
  it("Test ftp_ssl_connect() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ftp_ssl_connect() function : error conditions ***\\n\";\necho \"\\n-- Testing ftp_ssl_connect() function on failure --\\n\";\nvar_dump(ftp_ssl_connect('totes.invalid'));\necho \"\\n-- Testing ftp_ssl_connect() function timeout exception for value 0 --\\n\";\ntry {\n    ftp_ssl_connect('totes.invalid', 21, 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"===DONE===\\n\";")).toMatchSnapshot();
  });
});

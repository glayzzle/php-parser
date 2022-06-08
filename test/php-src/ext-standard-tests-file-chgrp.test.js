// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chgrp.phpt
  it("chgrp() with NULL as group name", function () {
    expect(parser.parseCode("<?php\ntry {\n    chgrp(\"sjhgfskhagkfdgskjfhgskfsdgfkdsajf\", 0);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

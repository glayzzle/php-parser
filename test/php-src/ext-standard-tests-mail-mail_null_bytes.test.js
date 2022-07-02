// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/mail_null_bytes.phpt
  it("mail() with null bytes in arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    mail(\"foo\\0bar\", \"x\", \"y\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mail(\"x\", \"foo\\0bar\", \"y\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mail(\"x\", \"y\", \"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mail(\"x\", \"y\", \"z\", \"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mail(\"x\", \"y\", \"z\", \"q\", \"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

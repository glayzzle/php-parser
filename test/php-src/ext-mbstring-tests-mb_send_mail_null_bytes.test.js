// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_send_mail_null_bytes.phpt
  it("mb_send_mail() with null bytes in arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    mb_send_mail(\"foo\\0bar\", \"x\", \"y\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mb_send_mail(\"x\", \"foo\\0bar\", \"y\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mb_send_mail(\"x\", \"y\", \"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mb_send_mail(\"x\", \"y\", \"z\", \"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    mb_send_mail(\"x\", \"y\", \"z\", \"q\", \"foo\\0bar\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

const parser = require("../main");

describe("Test lexer", function () {
  describe("initial state", function () {
    it("parse short tag", function () {
      expect(
        parser.parseCode("<? echo $a; ?>", {
          lexer: {
            short_tags: true,
          },
        })
      ).toMatchSnapshot();
    });

    it("parse short echo", function () {
      expect(parser.parseCode("<?= $a ?>")).toMatchSnapshot();
    });

    it("#263 - expect inline", function () {
      expect(parser.parseCode("<?php$a ?>")).toMatchSnapshot();
    });

    it("parse asp tag", function () {
      expect(
        parser.parseCode("<% echo $b; %>", {
          lexer: {
            short_tags: true,
            asp_tags: true,
          },
        })
      ).toMatchSnapshot();
    });

    it("parse asp echo tag", function () {
      expect(
        parser.parseCode("<%= $b %>", {
          lexer: {
            short_tags: true,
            asp_tags: true,
          },
        })
      ).toMatchSnapshot();
    });
  });

  it("test comments", function () {
    expect(
      parser.parseCode(
        `
      <?php
       // simple comment ?>
      <%
       // another line %>
      <?
       /**/ ?>
      <?php // last comment
    `,
        {
          lexer: {
            short_tags: true,
            asp_tags: true,
            debug: false,
          },
          parser: {
            extractDoc: true,
            debug: false,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it("test tokens", function () {
    expect(parser.tokenGetAll("<?php\necho $var;")).toMatchSnapshot();
  });

  it("test unput on whitespace", function () {
    expect(parser.tokenGetAll("<?php \r\n\t ")).toMatchSnapshot();
  });

  it("test #148 - sensitive lexer", function () {
    expect(parser.tokenGetAll("<?php $this-> list;")).toMatchSnapshot();
  });
});

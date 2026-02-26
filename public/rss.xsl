<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSS Feed</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 40px auto;
            padding: 0 20px;
            background: #0a0a0a;
            color: #e4e4e7;
          }
          h1 {
            color: #22d3ee;
            border-bottom: 1px solid #27272a;
            padding-bottom: 10px;
          }
          .item {
            background: #141414;
            border: 1px solid #27272a;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .item h2 {
            margin-top: 0;
          }
          .item h2 a {
            color: #22d3ee;
            text-decoration: none;
          }
          .item h2 a:hover {
            text-decoration: underline;
          }
          .date {
            color: #a1a1aa;
            font-size: 0.875rem;
          }
          .description {
            margin-top: 10px;
            color: #a1a1aa;
          }
        </style>
      </head>
      <body>
        <h1>RSS Feed</h1>
        <xsl:for-each select="rss/channel/item">
          <div class="item">
            <h2>
              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="link" />
                </xsl:attribute>
                <xsl:value-of select="title" />
              </a>
            </h2>
            <div class="date">
              <xsl:value-of select="pubDate" />
            </div>
            <div class="description">
              <xsl:value-of select="description" />
            </div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

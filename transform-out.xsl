<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!--empty template suppresses this attribute-->
    <xsl:template match="@theAtribute" />
    <!--identity template copies everything forward by default-->
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:if test="not(@id)" >
            <xsl:variable name="node" select="name(.)" />
              <xsl:attribute name="id"><xsl:value-of select="generate-id($node)"/></xsl:attribute>
            </xsl:if>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    <xsl:template match="*/@transform" />
</xsl:stylesheet>
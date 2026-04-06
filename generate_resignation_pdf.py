from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics

OUTPUT = "resignation_letter_2026.pdf"

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=3*cm,
    rightMargin=3*cm,
    topMargin=3.5*cm,
    bottomMargin=3*cm,
)

styles = getSampleStyleSheet()
normal = ParagraphStyle(
    "custom_normal",
    parent=styles["Normal"],
    fontSize=11,
    leading=17,
    fontName="Helvetica",
    alignment=TA_LEFT,
)
bold = ParagraphStyle(
    "custom_bold",
    parent=normal,
    fontName="Helvetica-Bold",
)

story = [
    Paragraph("<b>Date: 25<super>th</super> March 2026</b>", normal),
    Spacer(1, 0.3*cm),
    Paragraph("<b>Subject:</b> Resignation", normal),
    Spacer(1, 0.5*cm),
    Paragraph("Dear Team,", normal),
    Spacer(1, 0.4*cm),
    Paragraph(
        "I hereby submit my resignation from my position as an Analytics Engineer at Metadata "
        "Development &amp; Services (India) LLP.",
        normal,
    ),
    Spacer(1, 0.4*cm),
    Paragraph(
        "Thank you for the support and opportunities during my time here. I wish the team and the "
        "company continued success.",
        normal,
    ),
    Spacer(1, 0.4*cm),
    Paragraph("Kind regards,", normal),
    Spacer(1, 2.2*cm),
    Paragraph("ROHIT SINGH", normal),
    Paragraph("Employee ID - 2863", normal),
]

doc.build(story)
print(f"PDF created: {OUTPUT}")

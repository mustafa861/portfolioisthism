import pymupdf
from PIL import Image

# Open the PDF
pdf_path = "Muhammad_Mustafa_Certificate.pdf"
output_path = "portfolioapp/public/Muhammad_Mustafa_Certificate.png"

# Open PDF
pdf_document = pymupdf.open(pdf_path)

# Get the first page
page = pdf_document[0]

# Render page to an image with high resolution (300 DPI)
mat = pymupdf.Matrix(300/72, 300/72)  # 300 DPI scaling
pix = page.get_pixmap(matrix=mat)

# Save as PNG
pix.save(output_path)

pdf_document.close()
print(f"Certificate converted to image: {output_path}")

import os
from PyPDF2 import PdfReader
path = r'c:\Users\kadhi\OneDrive\Desktop\Kadhir Ponnambalam RESUME (2).pdf'
print('exists', os.path.exists(path))
reader = PdfReader(path)
print('pages', len(reader.pages))
for i, p in enumerate(reader.pages):
    print('--- page', i+1)
    text = p.extract_text()
    print(text)

import pdfplumber
import pandas as pd
import sys


def PDFToCSV(filesPath):
  with pdfplumber.open(filesPath) as pdf:
      writer = pd.ExcelWriter(f'{filesPath.replace(".pdf", "")}.xlsx', engine='xlsxwriter')
      i = 1
      table_settings = {
        "vertical_strategy": "lines",
        "horizontal_strategy": "text",
        "intersection_x_tolerance": 15
      }
      for page in pdf.pages:
        # tables = page.find_tables()     
        tables = page.find_tables(table_settings)     
        if len(tables) > 0:
          j = 0
          for j in range(len(tables)):
            tb = tables[j].extract()
            df = pd.DataFrame(tb[1:], columns=tb[0])
            sheetName = f'Sheet{i}' if len(tables) == 1 else f'Sheet{i}_{j + 1}'
            df.to_excel(writer, sheet_name=sheetName, index=False)
            j += 1
        i += 1
      writer.save()
  
  excel_file = writer
  all_sheets = pd.read_excel(excel_file, sheet_name=None)
  sheets = all_sheets.keys()

  for sheet_name in sheets:
      sheet = pd.read_excel(excel_file, sheet_name=sheet_name)
      sheet.to_csv("%s.csv" % sheet_name, index=False)


if __name__ == '__main__':
  input_pdf = sys.argv[1]
  PDFToCSV(input_pdf)

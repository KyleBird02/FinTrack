import pdfplumber
import pandas as pd
import sys

def get_col_widths(dataframe):
    # First we find the maximum length of the index column
    idx_max = max([len(str(s)) for s in dataframe.index.values] + [len(str(dataframe.index.name))])
    # Then, we concatenate this to the max of the lengths of column name and its values for each column, left to right
    return [idx_max] + [max([len(str(s)) for s in dataframe[col].values] + [len(col)]) for col in dataframe.columns]

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
        tables = page.find_tables(table_settings)
        if len(tables) > 0:
            for table in tables:
                tb = table.extract()
                combined_rows = []
                current_row = []
                for row in tb[1:]:
                    if row[0]:  # if first column has data
                        if current_row:  # if current row is not empty
                            combined_rows.append(current_row)  # add current row to combined rows
                        current_row = row  # start new current row
                    else:
                        current_row = [x + ' ' + y if x and y else x or y for x, y in zip(current_row, row)]
                        # combine cells in current row if second column is empty
                combined_rows.append(current_row)  # add last row to combined rows
                df = pd.DataFrame(combined_rows, columns=tb[0])
                sheetName = f'Sheet{i}' if len(tables) == 1 else f'Sheet{i}_{tables.index(table)+1}'
                df.to_excel(writer, sheet_name=sheetName, index=False)
                
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
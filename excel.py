
import pandas as pd
import json


excel_data_df = pd.read_excel('Registros.xlsx')

json_str = excel_data_df.to_json()

print(json_str)


with open("excel.json", "w") as outfile:
    json.dump(json_str, outfile)

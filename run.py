from datetime import datetime
my_string = '1-9-2020'

# Create date object in given time format yyyy-mm-dd
my_date = datetime.strptime(my_string, "%d-%m-%Y").strftime('%d-%m-%Y')

print(my_date)
print('Type: ',type(my_date))
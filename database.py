import harperdb
from secrets import HARPERDB__URL, HARPERDB__USERNAME, HARPERDB__PASSWORD 

db = harperdb.HarperDB(
     url = HARPERDB__URL,
    username = HARPERDB__USERNAME,
    password = HARPERDB__PASSWORD
)
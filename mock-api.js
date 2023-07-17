const mockData = [
    {
        "P_Id": 73981,
        "name": "S18",
        "lat": 13.006469,
        "NSO": "N",
        "lon": 80.242568,
        "location":"Main Gate",
        "EWO": "E",
        "Alt": 0,
        "sog": 0,
        "cog": 0,
        "hdop": 99.99,
        "vdop": 0,
        "pdop": 0,
        "temp":42,
        "humidity":"60%",
        "D_Time": "2022-09-18 16:55:35",
        "DHT_RH": 63.3,
        "DHT_TEMP": 28.3,
        "DF_PM1": 16,
        "DF_PM25": 20,
        "DF_PM10": 24
      },
      {
        "P_Id": 71796,
        "name": "S2",
        "lat": 12.999011,
        "NSO": "N",
        "lon": 80.239115,
        "location":"Vani Vani",
        "EWO": "E",
        "Alt": 0,
        "sog": 0,
        "cog": 0,
        "hdop": 99.99,
        "vdop": 0,
        "pdop": 0,
        "temp":32,
        "humidity":"60%",
        "D_Time": "2022-09-18 16:56:46",
        "DHT_RH": 62.2,
        "DHT_TEMP": 28.6,
        "DF_PM1": 0,
        "DF_PM25": 0,
        "DF_PM10": 0
      },
      {
        "P_Id": 84706,
        "name": "S8",
        "lat": 12.991533,
        "NSO": "N",
        "lon":  80.233713,
        "location":"Library",
        "EWO": "E",
        "Alt": 0,
        "sog": 0,
        "cog": 0,
        "hdop": 99.99,
        "vdop": 0,
        "pdop": 0,
        "temp":38,
        "humidity":"60%",
        "D_Time": "2022-09-18 16:57:22",
        "DHT_RH": 99.9,
        "DHT_TEMP": 29.4,
        "DF_PM1": 14,
        "DF_PM25": 19,
        "DF_PM10": 22,
        "SPS_PM1": 15.62,
        "SPS_PM25": 16.52,
        "SPS_PM4": 16.52,
        "SPS_PM10": 16.52
      },
      {
        "P_Id": 56195,
        "name": "S10",
        "lat": 12.990920,
        "NSO": "N",
        "lon":  80.231215,
        "location":"Kaatru Office",
        "EWO": "E",
        "temp":28,
        "humidity":"60%",
        "Alt": 0,
        "sog": 0,
        "cog": 0,
        "hdop": 99.99,
        "vdop": 0,
        "pdop": 0,
        "D_Time": "2022-09-18 16:58:09",
        "DHT_RH": 73.5,
        "DHT_TEMP": 37.9,
        "DF_PM1": 16,
        "DF_PM25": 21,
        "DF_PM10": 24,
        "SPS_PM1": 16.18,
        "SPS_PM25": 17.11,
        "SPS_PM4": 17.11,
        "SPS_PM10": 17.11
      },
      {
        "P_Id": 884,
        "name": "S7",
        "lat": 12.988840,
        "NSO": "N",
        "lon": 80.233634,
        "location":"OAT",
        "temp":39,
        "humidity":"60%",
        "EWO": "E",
        "Alt": 0,
        "sog": 0,
        "cog": 0,
        "hdop": 99.99,
        "vdop": 0,
        "pdop": 0,
        "D_Time": "2022-09-18 16:58:44",
        "DHT_RH": 55.1,
        "DHT_TEMP": 28.5,
        "DF_PM1": 14,
        "DF_PM25": 18,
        "DF_PM10": 20
      },
]

const mockForecast = [
    {
        "temp":32,
        "date":"25 july",
        "day":"Tuesday"
    },
    {
        "temp":32,
        "date":"26 july",
        "day":"Tuesday"
    },
    {
        "temp":32,
        "date":"27 july",
        "day":"Tuesday"
    },
    {
        "temp":32,
        "date":"28 july",
        "day":"Tuesday"
    },
    {
        "temp":32,
        "date":"29 july",
        "day":"Tuesday"
    },
    {
        "temp":32,
        "date":"30 july",
        "day":"Tuesday"
    },
    {
        "temp":32,
        "date":"31 july",
        "day":"Tuesday"
    },
]

function getForecast(){
    return mockForecast
}

function getMock(){
    return mockData;
}




import json
import pandas as pd
import urllib.request
# import logging
# import time
song_list = []


def getSongListUrl():
    url = "https://www.kdocs.cn/api/office/file/crNZPpbHA70t/download"
    try:
        req = urllib.request.Request(url, method="GET")
        resp = urllib.request.urlopen(req)
        jsonObjString = resp.read().decode('utf-8')
        jsonObj = json.loads(jsonObjString)
        return jsonObj["download_url"]
    except:
        print("Error obtaining song list URL")
        exit()
    
    # if jsonObj["result"] != "ok":
    #     logging.info("getSongListUrl err: fail to get download url")
    #     # 这里可以加一个重试的逻辑哈
    # return jsonObj["fileinfo"]["url"]


def updateSongList():
    url = getSongListUrl()
    try:
        urllib.request.urlretrieve(url, "music_list_7.xlsx")
    except:
        print("Error retrieving the song list excel file")
        exit()


def parseSonglist():
    song_df = pd.read_excel('./music_list_7.xlsx')
    song_df = song_df.where(pd.notnull(song_df), None)
    song_list.clear()
    for index, row in song_df.iterrows():
        song_data = {"index": index, "song_name": row[0], "artist": row[1], "language": row[2], "remarks": row[3],
                     "initial": row[4], "sticky_top": row[5], "paid": row[6], "BVID": row[7]}
        if row[5] == 1:
            song_list.insert(0, song_data)
        else:
            song_list.append(song_data)


if __name__ == '__main__':
    # 可以当个定时任务跑，最好多打点日志，不然坏了也不知道
    # while True:
    #     updateSongList()
    #     parseSonglist()
    #     with open("./public/music_list_7.json", 'w') as file:
    #         file.write(json.dumps(song_list))
    #     time.sleep(60*60*24)

    # updateSongList()
    parseSonglist()
    with open("./public/music_list_7.json", 'w') as file:
        file.write(json.dumps(song_list))

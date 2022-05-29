import sys
import urllib
import urllib.request
import os
import webbrowser
import configparser
config = configparser.ConfigParser()
str = sys.argv[1]
path = sys.argv[0]
path = path[:-3]+"ini"
config.read(path)
synology = config.getint("emby", "synology")
embyUrlClien = config.get("emby", "embyUrlClien")
localUrlCllien = config.get("emby", "localUrlCllien")
potplayer = config.get("emby","potplayer")
if synology == 1:
    unurl = urllib.request.unquote(str)
    unurl = unurl[15:]
    #unurl = unurl.replace(embyUrlClien,"")
    unurl = unurl.replace("/","\\")
    unurl = localUrlCllien + unurl
elif synology == 0:
    unurl = urllib.request.unquote(str)
    unurl = unurl.replace("/","\\")
os.system('start "" "%s" %s' % (potplayer, unurl))


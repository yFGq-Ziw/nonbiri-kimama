import numpy as np
from PIL import Image
from wordcloud import STOPWORDS, WordCloud

text = 'square'

# マスクを読み込む。
mask = np.array(Image.open('mask.png'))

STOPWORDS = [u'https', u'co', u'jul', u'sun', u'ある', u'いる',
 u'する', u'ない', u'れる', u'ため', u'こと', u'なる', u'もの']
 
# .txtをエンコーディングして読み込み
book = open("wakachi.txt", "rt", encoding='utf-8')
text = book.read()
book.close()

wc = WordCloud(font_path="c:\windows\fonts\HGRGM.TTC", width=800, height=600,
	       stopwords=(STOPWORDS) ,mask=mask, max_words=2000,
	       collocations = False, # 複合語のオプションをオフ
	       background_color='white', contour_width=1,
	       contour_color='orange', colormap='summer')

# テキストからワードクラウドを生成する。
wc.generate(text)

# ファイルに保存する。
wc.to_file('wordcloud.png')

# numpy 配列で取得する。
img = wc.to_array()

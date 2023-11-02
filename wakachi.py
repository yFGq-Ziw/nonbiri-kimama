import codecs
text_file = codecs.open('tweets.txt','r','utf-8')
txt = text_file.read()

# テキストを改行で区切った配列にする
sentences = txt.split('\n')

# janomeでテキスト分解
from janome.tokenizer import Tokenizer
t = Tokenizer()

write_file = codecs.open('wakachi.txt','w','utf-8')

for sentence in sentences:
    tokens = t.tokenize(sentence)

    # 出てきた単語から名詞・動詞・形容詞・形容動詞だけ抽出
    for token in tokens:
        if token.part_of_speech.split(',')[0] in['名詞', '動詞', '形容動詞', '形容詞']:
            write_file.write(token.base_form + ' ')

    write_file.write('\n')

write_file.close()
text_file.close()

print('End')

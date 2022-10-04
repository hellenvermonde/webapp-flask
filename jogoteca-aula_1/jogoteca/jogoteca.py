from flask import Flask, render_template #Biblioteca e função 


class Jogo: #instancianciação a objeto
    def __init__(self, nome, categoria, console):
        self.nome=nome
        self.categoria=categoria
        self.console=console

app = Flask(__name__) #instancia classe

@app.route('/inicio') #rota
def ola():
    titulo = 'Jogos'
    
    jogo1=Jogo('Tetris','Puzzle','Atrari')
    jogo2=Jogo('God of War','Rack n Slash','PS2')
    jogo3 = Jogo('Mortal Kombat', 'Luta','PS2')
    listaJogos = [jogo1, jogo2, jogo3]
    
    return render_template('lista.html', titulo=titulo, jogos=listaJogos) #ponte entre servidor e html, recebe parametros também 

app.run() #roda


# Flask faz o papel do nosso servidor 
# Página com conteudo do servidor 
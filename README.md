# Passos Iniciais

- Instale o aplicativo Insomnia e selecione a opção "__Use the local Scratch Pad__", caso não tenha conta.
- Ao abrir o projeto pelo VSCode, rode os comandos:
- *npm install -y*
- *npm install nodemon*
- *npm install axios*
- *npm run dev*

Assim, o código será hospedado em um link localhost.

-----------------------------------
# Como consultar a tabela?

- Copie e cole o link localhost:9340 no aplicativo Insomnia.
- Utilize "__localhost:9340/[nome da tabela]__" após o link para indicar que você está buscando dentros das tabelas bruxos, varinhas ou casas, utilizando o método __GET__.
- Utilize "__localhost:9340/[nome da tabela]/id__" para indicar que você está buscando um registro específico, utilizando seu ID e o método __GET__.

-----------------------------------
# Como adicionar ou editar um registro na tabela?

- Copie e cole o link localhost:9340 no aplicativo Insomnia.
- Utilize "__localhost:9340/[nome da tabela]__" para indicar que você está buscando dentro das tabelas bruxos, varinhas ou casas.
- Caso queira adicionar um bruxo, utilize __POST__ e selecione a opção "__JSON__". E coloque os dados do bruxos na seguinte ordem:

```
{
	{
	"nome": "joao",
	"idade": "13",
	"genero": "masculino",
	"habilidade": "ser top",
	"casa": "grifinória",
	"status_sangue": "puro",
	"patrono": "sapinho"
}
}
```
- Caso preencha como no exemplo, receberá uma mensagem como *"bruxo criado com sucesso".*   

- Caso queira adicionar uma varinha, coloque os dados na seguinte ordem:

```
{
	"material": "madeira",
	"comprimento": "15cm",
	"nucelos": "coração de galinha",
	"data-fab": "23-01-2007"
}
```
- Caso preencha como no exemplo, receberá uma mensagem como *"varinha criada com sucesso".*  


- Caso queira adicionar uma casa, coloque os dados da casa na ordem:

```
{
	"nome": "grifinoria",
	"cor": "vermelho",
	"animal": "leao"
}
```
- Caso preencha como no exemplo, receberá uma mensagem como *"casa criada com sucesso".*  

- Para __editar__ um registro, utilize o link como "__localhost:9340/[nome da tabela]/id__" e o método __PUT__.
- Selecione a opção JSON e altere os dados de acordo com os exemplos acima.

-----------------------------------
# Como deletar um registro na tabela?

- Copie e cole o link localhost:9340 no aplicativo Insomnia.
- Utilize "__localhost:9340/[nome da tabela]/id__" para indicar que você está buscando um registro específico, utilizando o método __DELETE__.

- Caso preencha como no exemplo de acordo com cada tabela, receberá uma mensagem como *"[objeto] excluido com sucesso".*
-----------------------------------

*Atividade feita pora Júlia Ferreira da Silva, Turma 3TDS2 - SENAI Valinhos.*
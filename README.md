# Arena das Camisas

Loja demonstrativa responsiva em HTML, CSS e JavaScript puro.

## Como abrir
1. Extraia o arquivo ZIP.
2. Abra `index.html` em um navegador moderno.
3. Para publicar, envie os três arquivos (`index.html`, `style.css`, `script.js`) para sua hospedagem estática.

## Recursos incluídos
- Layout responsivo para celular, tablet, desktop e telas grandes.
- Busca por nome/time, filtros por time e ordenação por preço.
- Cards de produtos, seletor de tamanho, favoritos e carrinho com quantidades.
- Carrinho salvo no navegador via localStorage.
- Cálculo demonstrativo de frete grátis acima de R$ 299.
- Checkout com cidade e forma de pagamento.
- **Pix disponível para todas as cidades.**
- **Cartão disponível somente para pedidos com entrega em Teresópolis.**
- Finalização que abre o WhatsApp com itens, tamanhos, quantidades, cidade, forma de pagamento, subtotal, frete e total pré-preenchidos.
- Newsletter demonstrativa, links de atendimento e menu mobile.

## Antes de vender de verdade
- Os produtos, preços e disponibilidade são exemplos editáveis em `script.js`.
- O checkout abre uma conversa no WhatsApp; por segurança, o cliente ainda precisa apertar **Enviar**. O site não cobra automaticamente: o atendimento confirma disponibilidade, frete e instruções de pagamento. Pix é aceito em todas as cidades; cartão é liberado no site somente para Teresópolis.
- A newsletter é apenas demonstrativa e não armazena/cadastra e-mails em um servidor.
- Configure política de privacidade, trocas, entrega, dados fiscais, estoque e meios de pagamento reais.
- As imagens de fundo usam URLs externas do Unsplash; a camisa nos cards é uma ilustração CSS. Substitua pelas fotos autorizadas dos seus produtos.
- A marca e o layout são inspirados no visual esportivo editorial, mas não copiam logotipos ou assets proprietários da Nike.


## FOTOS DOS PRODUTOS

As fotos ficam dentro da pasta `images/`. Cada produto possui uma pasta própria com três espaços: `frente.jpg`, `costas.jpg` e `detalhe.jpg`.

Você pode substituir as fotos a qualquer momento sem alterar o restante do site. Se uma foto estiver faltando, o catálogo usa automaticamente a arte ilustrada da camisa como reserva.

### Estrutura

```text
images/
├── real-madrid-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── barcelona-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── flamengo-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── corinthians-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── palmeiras-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── sao-paulo-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── internacional-home-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── brasil-amarela-2026/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── argentina-home-2026/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── real-madrid-away-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── barcelona-away-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
├── flamengo-away-25-26/
│   ├── frente.jpg
│   ├── costas.jpg
│   └── detalhe.jpg
```

### Dica para as fotos
Use fotos verticais, bem iluminadas e com a camisa centralizada. Para a vitrine, a foto `frente.jpg` é a mais importante.

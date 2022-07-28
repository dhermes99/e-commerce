export default function database() {
  const functions = {
    // Retorna todos os items na chave especificada do localStorage
    getItems: (key) => {
      const data = localStorage.getItem(key);

      return JSON.parse(data) || [];
    },

    // Retorna um item na chave especificada do localStorage
    getItem: (key, id) => {
      const produtos = functions.getItems(key);

      return produtos.find((produto) => produto.id === id);
    },

    // Remove um item na chave especificada do localStorage
    removeItem: (key, id) => {
      const produtos = functions.getItems(key);

      const newProdutos = produtos.filter((produto) => produto.id !== id);

      localStorage.setItem(key, JSON.stringify(newProdutos));
    },

    // Remove todos os items da chave especificada do localStorage
    removeItems: (key) => {
      localStorage.setItem(key, "[]");
    },

    // Adiciona um item na chave especificada do localStorage
    saveItem: (key, produto) => {
      const produtos = functions.getItems(key);

      produtos.push(produto);

      localStorage.setItem(key, JSON.stringify(produtos));
    },
  };

  return functions;
}

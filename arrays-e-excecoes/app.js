const listaArgumentos = process.argv.slice(2);

try {
    const listaProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente",
    ];
    
    const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto => { 
        return listaArgumentos.find(argumento => argumento === produto);
    });
    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Nós temos este produto: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(argumento => {
        return !listaProdutosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Nós não temos estes produtos: ${argumento}`));
    
    listaProdutosDisponiveis.sort();
    listaProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponivel: ${produto}`));    
} catch (error) {
    console.log("Erro ao processar produtos! Tente novamente mais tarde ou entre em contato com um administrador do sistema!");
}

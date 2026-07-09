// ============================================
// CONFIGURAÇÕES DO SITE - EDITAR AQUI!
// ============================================

const CONFIG = {
    // INFORMAÇÕES DO SERVIÇO
    servico: {
        nome: 'Serviços Adicionais', 
        mensagemBoasVindas: `Conheça nossos serviços adicionais!<br />
        Além da assessoria completa para casamentos e 15 anos, 
        oferecemos soluções personalizadas para tornar seu evento 
        ainda mais especial.`
    },

    // TEMPO DE EXPERIÊNCIA
    experiencia: {
        anos: '10',
        texto: 'Há <strong>mais de 10 anos</strong> transformando sonhos em momentos inesquecíveis.'
    },

    // CONTATOS - LINKS CORRETOS!
    contatos: {
        whatsapp: 'https://wa.me/5521988666854', // WhatsApp da Camila
        instagram: 'https://instagram.com/camilarochacerimonial', // Instagram
        site: 'https://camilarochaeventos.com.br/' // Site da Camila
    },

    // ARQUIVO PDF
    pdf: {
        arquivo: 'servicos.pdf'
    },

    // TÍTULO DO SITE
    tituloPagina: 'Camila Rocha Eventos - Serviços Adicionais'
};

// ============================================
// NÃO ALTERE DAQUI PARA BAIXO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    document.title = CONFIG.tituloPagina;
    document.getElementById('nomeServico').textContent = CONFIG.servico.nome;
    document.getElementById('mensagemBoasVindas').innerHTML = CONFIG.servico.mensagemBoasVindas;
    document.getElementById('mensagemAnos').innerHTML = CONFIG.experiencia.texto;
    document.getElementById('linkWhatsapp').href = CONFIG.contatos.whatsapp;
    document.getElementById('linkInstagram').href = CONFIG.contatos.instagram;
    document.getElementById('linkSite').href = CONFIG.contatos.site;
    window.CONFIG_PDF = CONFIG.pdf.arquivo;
});

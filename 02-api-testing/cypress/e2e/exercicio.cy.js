/// <reference types="cypress" />

describe('Testes da Funcionalidade Catálogo de Livros', () => {

    let token

    beforeEach(() => {
        cy.geraToken('admin@biblioteca.com', 'admin123').then(tkn => {
            token = tkn
        })
    });

    // Objetivo: Verificar que a API retorna lista de livros com paginação e filtros funcionando
    it('GET - Deve listar livros com filtros e paginação', () => {

        cy.api({
            method: 'GET',
            url: 'books',
            qs: {
                category: 'Literatura Brasileira',
                limit: 20,
                offset: 0,
                orderBy: 'title',
                order: 'ASC'
            }
        }).should(response => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('books')
            expect(response.body.books).to.be.an('array')

            expect(response.body).to.have.property('pagination')
            expect(response.body.pagination).to.have.property('limit')
            expect(response.body.pagination).to.have.property('currentPage')

            expect(response.body).to.have.property('filters')
        })
    });

    // Objetivo: Validar que é possível obter detalhes de um livro específico pelo ID
    it('GET - Deve obter detalhes de um livro específico', () => {

        cy.api({
            method: 'GET',
            url: 'books/1'
        }).should(response => {
            expect(response.status).to.equal(200)

            expect(response.body.book).to.have.property('id')
            expect(response.body.book).to.have.property('title')
            expect(response.body.book).to.have.property('author')
            expect(response.body.book).to.have.property('category')

            expect(response.body.book.id).to.equal(1)
        })
    });

    // Objetivo: Validar que um novo livro é adicionado com sucesso ao catálogo
    it('POST - Deve cadastrar um novo livro com sucesso', () => {

        const timestamp = Date.now()
        const isbn = `978-${timestamp}`

        cy.api({
            method: 'POST',
            url: 'books',
            headers: {
                Authorization: token
            },
            body: {
                title: `Livro Cypress ${timestamp}`,
                author: `Autor ${timestamp}`,
                description: 'Livro criado via automação',
                category: 'Teste Automação',
                isbn: isbn,
                editor: 'EBAC',
                language: 'Português',
                publication_year: 2026,
                pages: 200,
                format: 'Físico',
                total_copies: 5,
                available_copies: 5
            }
        }).should(response => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Livro criado com sucesso.')
            expect(response.body.book).to.have.property('id')
        })
    });

    // Objetivo: Garantir que dados inválidos são rejeitados ao adicionar um livro
    it('POST - Deve rejeitar livro com dados inválidos', () => {

        cy.api({
            method: 'POST',
            url: 'books',
            headers: {
                Authorization: token
            },
            body: {},
            failOnStatusCode: false
        }).should(response => {
            expect(response.status).to.equal(400)
        })
    });

    // Objetivo: Validar que um livro pode ser atualizado com sucesso
    it('PUT - Deve atualizar um livro previamente cadastrado', () => {

        const timestamp = Date.now()
        const isbn = `978-${timestamp}`

        cy.api({
            method: 'POST',
            url: 'books',
            headers: {
                Authorization: token
            },
            body: {
                title: `Livro Temporário ${timestamp}`,
                author: `Autor Teste ${timestamp}`,
                description: 'Descrição Teste',
                category: 'Teste',
                isbn: isbn,
                editor: 'EBAC',
                language: 'Português',
                publication_year: 2026,
                pages: 100,
                format: 'Físico',
                total_copies: 2,
                available_copies: 2
            }
        }).then(createResponse => {

            const bookId = createResponse.body.book.id

            cy.api({
                method: 'PUT',
                url: `books/${bookId}`,
                headers: {
                    Authorization: token
                },
                body: {
                    title: 'Livro Atualizado',
                    author: 'Autor Atualizado',
                    description: 'Descrição Atualizada',
                    category: 'Categoria Atualizada',
                    editor: 'Editora Atualizada',
                    language: 'Português',
                    publication_year: 2000,
                    pages: 300,
                    format: 'Físico',
                    total_copies: 10,
                    available_copies: 5
                }
            }).should(response => {
                expect(response.status).to.equal(200)
            })
        })
    });

    // Objetivo: Validar que um livro pode ser removido do catálogo
    it('DELETE - Deve deletar um livro previamente cadastrado', () => {

        const timestamp = Date.now()
        const isbn = `978-${timestamp}`

        cy.api({
            method: 'POST',
            url: 'books',
            headers: {
                Authorization: token
            },
            body: {
                title: `Livro Para Excluir ${timestamp}`,
                author: `Autor Teste ${timestamp}`,
                description: 'Descrição Teste',
                category: 'Teste',
                isbn: isbn,
                editor: 'EBAC',
                language: 'Português',
                publication_year: 2026,
                pages: 100,
                format: 'Físico',
                total_copies: 2,
                available_copies: 2
            }
        }).then(createResponse => {

            const bookId = createResponse.body.book.id

            cy.api({
                method: 'DELETE',
                url: `books/${bookId}`,
                headers: {
                    Authorization: token
                }
            }).should(response => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Livro deletado com sucesso.')
                expect(response.body.deletedBook).to.have.property('id')
            })
        })
    });

});
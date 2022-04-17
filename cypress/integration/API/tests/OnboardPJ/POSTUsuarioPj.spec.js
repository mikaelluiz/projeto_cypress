import * as POSTRequest from '../../requests/OnboardPJ/POSTUsuarioPj.request';

    describe('Cadastrar Usuário PJ',  () => {
        it('Dado que quero cadastrar usuário, quando passo todos dados então cadastro é realizado com sucesso', () => {
            POSTRequest.criarUsuarioPj().should((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(10);
                expect(res.body.password).to.eq('Testando');
                expect(res.body.userName).to.eq('Mikael');
                expect(res.body).to.be.not.null;
            })
         })       
    })
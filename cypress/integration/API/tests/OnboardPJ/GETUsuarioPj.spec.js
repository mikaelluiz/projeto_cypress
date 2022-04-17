import * as GETRequest from '../../requests/OnboardPJ/GETUsuarioPj.request';

    describe('Buscar Usuário PJ',  () => {
        it('Dado que quero buscar usuários, quando consulto os usuarios então consigo buscar todos os usuario com sucesso.', () => {
            GETRequest.buscarUsuarioPj().should((res) => {
                expect(res.status).to.eq(200);
                expect(res.body[0]).to.have.property('id');
                expect(res.body[0]).to.have.property('userName');
                expect(res.body[0]).to.have.property('password');
                expect(res.body).to.be.not.null;
            })
         })       
    })
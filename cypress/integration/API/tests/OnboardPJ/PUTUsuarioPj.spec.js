import * as PUTRequest from '../../requests/OnboardPJ/PUTUsuarioPj.request';
import * as POSTRequest from '../../requests/OnboardPJ/POSTUsuarioPj.request';

    describe('Atualizar Usuário PJ',  () => {
        it('Dado que quero atualizar usuário, quando passo os dados atualizados então usuáro é atualizado com sucesso', () => {
            POSTRequest.criarUsuarioPj().then((resPostUsuario) => {
                PUTRequest.atualizarUsuarioPj(resPostUsuario.body.id).should((resPutUsuario) => {
                    expect(resPutUsuario.status).to.eq(200);
                    expect(resPutUsuario.body.id).to.eq(10);
                    expect(resPutUsuario.body.password).to.eq('Testando');
                    expect(resPutUsuario.body.userName).to.eq('Mikael Luiz');
                    expect(resPutUsuario.body).to.be.not.null;
                })
            })
         })       
    })
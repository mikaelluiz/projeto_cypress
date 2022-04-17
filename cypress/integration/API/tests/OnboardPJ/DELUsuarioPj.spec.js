import * as DELRequest from '../../requests/OnboardPJ/DELUsuarioPj.request';
import * as POSTRequest from '../../requests/OnboardPJ/POSTUsuarioPj.request'
import * as GETRequest from '../../requests/OnboardPJ/GETUsuarioPj.request'

    describe('Deletar Usuário PJ',  () => {
        it('Dado que crio um usuário, quando passo usuario criado para deletar então o usuário é deletado com sucesso.', () => {
            POSTRequest.criarUsuarioPj().then((resPostUsuario) => {
                DELRequest.deletarUsuarioPj(resPostUsuario.body.id).should((resDelUsuario) => {
                    expect(resDelUsuario.status).to.eq(200)   
                    expect(resDelUsuario.body).to.eq('')
                })
            })
         }),

         it('Dado que consulto um usuário, quando passo usuario consultado para deletar então é deletado com sucesso', () => {
            GETRequest.buscarUsuarioPj().then((resGetUsuario) => {
                DELRequest.deletarUsuarioPj(resGetUsuario.body[0].id).should((resDelUsuario) => {
                    expect(resDelUsuario.status).to.eq(200)   
                    expect(resDelUsuario.body).to.eq('')
                })
            })
         })           
    });
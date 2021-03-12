import React from 'react';
import QxdProvider from "./gerenciamentos/quatroxdoisfixo";
import UsuarioProvider from "./usuario";
import SaldoProvider from "./saldo";
import LucrosProvider from "./lucro";
import GerenciamentoProvider from "./gerenciamento";
import HistoricoProvider from "./historico";
import RankingProvider from "./ranking";
import PlayProvider from "./play";
import DxUprovider from "./gerenciamentos/DoisUm"//2x1 com soros
import DoisUmFixoprovider from "./gerenciamentos/DoisUmFixo"
import TresUmFixoprovider from "./gerenciamentos/TresUmFixo"
import PerfilProvedor from "./perfilUsuario";

const context = ({children}) => {
  return (
      <PerfilProvedor>
      <TresUmFixoprovider>
      <DoisUmFixoprovider>
      <DxUprovider>
      <PlayProvider>
      <QxdProvider>
          <UsuarioProvider>
              <SaldoProvider>
                  <LucrosProvider>
                      <GerenciamentoProvider>
                          <HistoricoProvider>
                              <RankingProvider>
                                  {children}
                              </RankingProvider>
                          </HistoricoProvider>
                      </GerenciamentoProvider>
                  </LucrosProvider>
              </SaldoProvider>
          </UsuarioProvider>
      </QxdProvider>
      </PlayProvider>
      </DxUprovider>
      </DoisUmFixoprovider>
      </TresUmFixoprovider>
      </PerfilProvedor>
  )
}

export default context;
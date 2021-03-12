import { useQxd } from "../context/gerenciamentos/quatroxdoisfixo";
import { useQxU } from "../context/gerenciamentos/DoisUm";
import { useDoisUmFixo } from "../context/gerenciamentos/DoisUmFixo";
import { useTresUmFixo } from "../context/gerenciamentos/TresUmFixo";


export default function selecionarGerenciamento(type){
        const Options = {
            Qxd : useQxd(),
            DoisUmFixo : useDoisUmFixo(),
            TresUmFixo : useTresUmFixo(),
            DoisUm : useQxU()
        }
        return Options[type] || Options.Qxd
}
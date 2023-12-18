import { Column, Content, Row } from "../personalData/style";

export default function ProfessionalData() {
  return (
    <Content>
      <Row>
        <Column>
          <label>Setor</label>
          <select>
            <option>Comercial</option>
            <option>Administrativo</option>
            <option>Financeiro</option>
            <option>Operacional</option>
            <option>Outros</option>
          </select>
        </Column>

        <Column>
          <label>Função</label>
          <select>
            <option>Gerente</option>
            <option>Supervisor</option>
            <option>Operador</option>
            <option>Outros</option>
          </select>
        </Column>
      </Row>

      <Row>
        <Column>
          <label>Loja</label>
          <select>
            <option>Loja 1</option>
            <option>Loja 2</option>
            <option>Loja 3</option>
            <option>Loja 4</option>
            <option>Loja 5</option>
            <option>Loja 6</option>
          </select>
        </Column>

        <Column>
          <label>Admissão</label>
          <input type="date" placeholder="Admissão" />
        </Column>
      </Row>
      <Row>
        <button>Salvar</button>
      </Row>
    </Content>
  );
}

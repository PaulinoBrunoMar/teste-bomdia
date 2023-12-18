import { Column, Content, Row } from "./style";

export default function PersonalData() {
  return (
    <Content>
      <Row>
        <Column>
          <label>Nome</label>
          <input placeholder="Nome" />
        </Column>

        <Column>
          <label>Sobrenome</label>
          <input placeholder="Sobrenome" />
        </Column>
      </Row>
      <hr />
      <Row>
        <Column>
          <label>CPF</label>
          <input placeholder="CPF" />
        </Column>

        <Column>
          <label>RG</label>
          <input placeholder="RG" />
        </Column>

        <Column>
          <label>Sexo</label>
          <select>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não informar</option>
          </select>
        </Column>
      </Row>
      <hr />
      <Row>
        <Column>
          <label>Data de Nascimento</label>
          <input placeholder="Data de Nascimento" />
        </Column>
        <Column>
          <label>Altura</label>
          <input placeholder="Altura" />
        </Column>

        <Column>
          <label>Peso</label>
          <input placeholder="Peso" />
        </Column>
      </Row>

      <hr />
      <Row>
        <Column>
          <label>Telefone</label>
          <input placeholder="Telefone" />
        </Column>
      </Row>
      <Row>
        <Column>
          <label>CEP</label>
          <input placeholder="CEP" />
        </Column>

        <Column>
          <label>Estado</label>
          <input placeholder="Estado" />
        </Column>

        <Column>
          <label>Cidade</label>
          <input placeholder="Cidade" />
        </Column>
      </Row>

      <Row>
        <Column>
          <label>Bairro</label>
          <input placeholder="Bairro" />
        </Column>

        <Column>
          <label>Rua</label>
          <input placeholder="Rua" />
        </Column>

        <Column>
          <label>Número</label>
          <input placeholder="Número" />
        </Column>
      </Row>
      <Row>
        <button>Salvar</button>
      </Row>
    </Content>
  );
}

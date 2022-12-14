import * as S from './styles'

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo com fundo rosa e React Avançado escrito ao lado"
      />
      <S.Title>React Avançado!</S.Title>
      <S.Description>
        Typescript, React, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com código"
      />
    </S.Wrapper>
  )
}

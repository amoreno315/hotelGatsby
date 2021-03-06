import React from 'react';
import {graphql, userStaticQuery, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 3rem;
  }
`
const ContenidoNosotros = () => {
  const resultado = useStaticQuery(graphql`
  query {
    allDatoCmsPage(filter: {slug: {eq: "nosotros"}}) {
      nodes {
        titulo
        contenido
        imagen {
          fluid( maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
  `)

  const {titulo, contenido, imagen } = resultado.allDatoCmsPage.nodes[0]
  return ( 
    <>
      <h2
        css={css `
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >{titulo}</h2>
      <Contenido>
        <p>{contenido}</p>
        <Image  
          fluid={imagen.fluid}
        />
      </Contenido>
    </>
  );
}
 
export default ContenidoNosotros;
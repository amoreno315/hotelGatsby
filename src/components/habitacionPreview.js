import React from 'react';
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import {Link} from 'gatsby'

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44,62,80,.85);
  width: 100%;
  color: white;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`
const HabitacionPreview = ({habitacion}) => {

  const {contenido, imagen, titulo, slug} = habitacion
  return ( 
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <Image
        fluid = {imagen.fluid}
      />
      <div
        css= {css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >{titulo}</h3>
        <p
          css={css`
            font-weight: 100;
            font-size: 1.2rem;
            line-height: 1.8;
          `}
        >{contenido}</p>
        <Boton to= {slug}>Mehr Info</Boton>
      </div>
    </div>
   );
}
 
export default HabitacionPreview;
import styled from "styled-components";
import {borderRadius, colors, size} from "./variables";
import MEDIA from "./mediaTemplates";

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 80%;
  margin: auto;

  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    text-align: cener;
  `};
`;

export default Container;


import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 28px;
  height: 28px;
`;

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;

import * as React from 'react';
import { whileStatement } from '@babel/types';
export interface IButtonProps {
  children?: React.ReactNode,
  onClick?: (e:any) => void
}
const styles = {
  border: '1px solid pink',
  borderRadius: 3,
  backgroundColor: '#888777',
  color: "white",
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};
export const Button: React.SFC<IButtonProps> = (props) => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {}
};

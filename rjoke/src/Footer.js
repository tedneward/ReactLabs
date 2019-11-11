import React from 'react';

export function Footer(props) {
  const date = new Date().getFullYear();

  return <h6>Copyright {props.company} (c) {date}</h6>
}

import React from 'react'
import { connectNumericMenu } from 'react-instantsearch-dom';

const NumericMenu = ({ items, refine, createURL }) => {
    return (
        <div className=" border my-2 rounded-lg p-5">
            <h3 className="text-xs font-semibold text-gray-600">DURACION</h3>
            <ul>
    {items.map(item => (
      <li key={item.value} className="border-2  ">
        <a
          href={createURL(item.value)}
          className="bg-gray-100 "
          style={{ fontWeight: item.isRefined ? 'bold' : '' }}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
        </div>
    )
}
export const CustomNumericMenu = connectNumericMenu(NumericMenu);

export default NumericMenu

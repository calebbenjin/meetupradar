import React from 'react';

type LabelProps = {
  text: string;
};

const Label = ({ text }: LabelProps) => (
  <label className="text-sm font-semibold mb-3 text-gray-800">{text}</label>
);

export default Label;
